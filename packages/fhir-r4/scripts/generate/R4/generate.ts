/**
 * This script reads FHIR JSON schemas and data elements,
 * transforms them into Zod schemas and corresponding TypeScript interfaces,
 * and writes them to the specified location.
 */

import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { createJsonSchemaDraft06Schema, type JSONSchemaDraft06 } from '../../../src/json-schema';
import { BundleSchema, StructureDefinitionSchema, StructureDefinition } from './data-elements';
import { FhirDependencyGraph } from '../dependencies/fhir-dependency-graph';
import { findStronglyConnectedComponents } from '../dependencies/utils';

/* -------------------------------------------------------------------------- */
/*                         1. Read and parse input files                      */
/* -------------------------------------------------------------------------- */

const schemaPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'specifications',
  'R4',
  'definitions',
  'fhir.schema.json',
);

const dataElementsPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'specifications',
  'R4',
  'definitions',
  'dataelements.json',
);

// Read header files
const resourcesSchemaHeaderFile = fs.readFileSync(
  path.join(__dirname, './resources-schema-header-file.ts'),
  'utf-8',
);

const primitivesSchemaHeaderFile = fs.readFileSync(
  path.join(__dirname, './primitives-schema-header-file.ts'),
  'utf-8',
);

const schemaCacheHeaderFile = fs.readFileSync(path.join(__dirname, './schema-cache.ts'), 'utf-8');

const schemaContent = fs.readFileSync(schemaPath, 'utf-8');
const dataElementsContent = fs.readFileSync(dataElementsPath, 'utf-8');

const jsonSchema = JSON.parse(schemaContent);
const jsonDataelements = JSON.parse(dataElementsContent);

const spec = createJsonSchemaDraft06Schema().parse(jsonSchema);
const dataElements = BundleSchema.parse(jsonDataelements);

/* -------------------------------------------------------------------------- */
/*               2. Build a lookup from data elements by resource name        */
/* -------------------------------------------------------------------------- */

const dataElementsLookup = dataElements.entry.reduce(
  (acc, entry) => {
    if (typeof entry.resource.name === 'string') {
      acc[entry.resource.name] = StructureDefinitionSchema.parse(entry.resource);
    }
    return acc;
  },
  {} as Record<string, StructureDefinition>,
);

/* -------------------------------------------------------------------------- */
/*            3. Gather relevant definitions (primitives, dataTypes, etc.)    */
/* -------------------------------------------------------------------------- */

const primitives = Object.keys(spec.definitions ?? {}).filter((key) => /^[a-z]{1}/.test(key));
const dataTypes = Object.keys(spec.definitions ?? {}).filter((key) => /^[A-Z]{1}/.test(key));
const preferredLazy = ['Element', 'Extension', 'Identifier'];
const extendedPrimitives = ['string', 'number', 'boolean'].concat(primitives);

/* -------------------------------------------------------------------------- */
/*                          4. Utility functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Lowercases the first character of a string.
 */
function lcFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Uppercases the first character of a string.
 */
function ucFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Transforms a type name to consistent PascalCase format.
 * e.g., "Account_Coverage" -> "AccountCoverage"
 */
function normalizeTypeName(name: string): string {
  return name.split('_').map(ucFirst).join('');
}

/**
 * Transforms internal path references, e.g. "Foo_Bar" => "Foo.bar".
 */
function toPath(key: string): string {
  const treated = key.replace(/_([A-Z]+)/g, '.$1');
  if (!/\./.test(treated)) {
    return treated;
  }
  const primaryType = treated.substring(0, treated.indexOf('.'));
  const secondaryType = treated.substring(treated.indexOf('.') + 1);
  const lcFirstSecondaryType = lcFirst(secondaryType);
  return `${primaryType}.${lcFirstSecondaryType}`;
}

/**
 * Checks if a type is a primitive type
 */
function isPrimitiveType(type: string): boolean {
  return primitives.includes(type) || ['string', 'number', 'boolean'].includes(type);
}

/**
 * Gets all dependencies for a property
 */
function getPropertyDependencies(property: Property): Set<string> {
  const deps = new Set<string>();

  if (
    property.type === 'reference' &&
    property.ref != null &&
    typeof property.ref === 'string' &&
    !isPrimitiveType(property.ref)
  ) {
    deps.add(normalizeTypeName(property.ref));
  }

  if (property.type === 'array' && property.items != null) {
    property.items.forEach((item) => {
      if (item != null && typeof item === 'string' && !isPrimitiveType(item)) {
        deps.add(normalizeTypeName(item));
      }
    });
  }

  // Handle direct type references that aren't marked as references
  // This catches cases like AccountCoverage[] and AccountGuarantor[]
  if (
    property.type != null &&
    typeof property.type === 'string' &&
    !isPrimitiveType(property.type) &&
    property.type !== 'array' &&
    property.type !== 'reference'
  ) {
    deps.add(normalizeTypeName(property.type));
  }

  return deps;
}

/**
 * Gets all schema function dependencies for a property
 */
function getPropertySchemaFunctions(property: Property): Set<string> {
  const funcs = new Set<string>();

  // Handle direct references
  if (property.type === 'reference' && property.ref != null) {
    if (!isPrimitiveType(property.ref)) {
      funcs.add(`create${normalizeTypeName(property.ref)}Schema`);
    }
  }

  // Handle array items
  if (property.type === 'array' && property.items != null) {
    property.items.forEach((item) => {
      if (item != null && !isPrimitiveType(item)) {
        funcs.add(`create${normalizeTypeName(item)}Schema`);
      }
    });
  }

  return funcs;
}

/* -------------------------------------------------------------------------- */
/* 5. Main mapping function for each property from the JSON schema definition */
/* -------------------------------------------------------------------------- */

/**
 * Maps a property key to a structure with type info, data element metadata, etc.
 */
function mapProperty(
  typeKey: string,
  propertyKey: string,
  definition: JSONSchemaDraft06,
  makedAsRequired: boolean = false,
) {
  // Identify property details (enum, array, reference, etc.)
  const property = (() => {
    const pathVal = toPath(`${toPath(typeKey)}.${propertyKey}`);
    const propertyDefinition = definition.properties?.[propertyKey];

    if (propertyDefinition?.enum) {
      return {
        property: propertyKey,
        type: 'enum',
        enum: propertyDefinition.enum,
        path: pathVal,
      };
    }

    if (propertyDefinition?.type === 'array') {
      const items = Array.isArray(propertyDefinition.items)
        ? propertyDefinition.items
        : [propertyDefinition.items];
      return {
        property: propertyKey,
        type: 'array',
        path: pathVal,
        items: items.map((item) => {
          return item?.$ref?.replace('#/definitions/', '');
        }),
      };
    }

    if (propertyDefinition?.$ref) {
      return {
        property: propertyKey,
        path: pathVal,
        type: 'reference',
        ref: propertyDefinition.$ref.replace('#/definitions/', ''),
      };
    }

    return {
      property: propertyKey,
      type: propertyDefinition?.type,
      path: pathVal,
    };
  })();

  // Fetch related data element from dataElementsLookup if available
  const dataElement = dataElementsLookup[property.path];
  if (dataElement != null) {
    const [element] = dataElement.snapshot.element;
    if (element != null) {
      const [type] = element.type;

      // Build out additional metadata
      const needs = {
        short: element.short,
        definition: element.definition,
        min: element.min,
        max: element.max,
        reference: (() => {
          if (type.code === 'Reference') {
            function shortenReference(reference: string) {
              return reference.substring(reference.lastIndexOf('/') + 1);
            }

            if (typeof type.targetProfile === 'string') {
              return shortenReference(type.targetProfile);
            } else if (
              Array.isArray(type.targetProfile) &&
              type.targetProfile.every((t) => typeof t === 'string')
            ) {
              return type.targetProfile.map(shortenReference);
            }
            return null;
          }
          return null;
        })(),
      };

      return {
        ...property,
        ...needs,
      };
    }
  }

  // If no specific data element info found, default min is 0 or 1 if required
  return {
    ...property,
    min: makedAsRequired ? 1 : 0,
  };
}

/* -------------------------------------------------------------------------- */
/*       6. Transform a data type definition into a structured object         */
/* -------------------------------------------------------------------------- */

/**
 * Builds a structured object for each data type definition.
 */
function transformDataTypeDefinition(key: string) {
  return (definition: JSONSchemaDraft06) => {
    return {
      type: normalizeTypeName(key),
      path: toPath(key),
      description: definition.description,
      properties: Object.keys(definition.properties ?? {}).map((property) =>
        mapProperty(key, property, definition, definition.required?.includes(property)),
      ),
    };
  };
}

const definitions = dataTypes.flatMap((dataType) => {
  // Don't skip any types, let them all generate
  const definition = spec.definitions?.[dataType];
  if (!definition) {
    return [];
  }
  return [transformDataTypeDefinition(dataType)(definition)];
});

/* -------------------------------------------------------------------------- */
/*                7. Types for property handling and code output             */
/* -------------------------------------------------------------------------- */

type Property = (typeof definitions)[number]['properties'][number];

/**
 * Builds the function name for creating a given reference type.
 */
function referenceCreateTypeFunction(str: string): string {
  return `create${createTypeName(str, false)}Schema`;
}

/**
 * Creates a TypeScript-friendly name by capitalizing or converting base types.
 */
function createTypeName(str: string, swapBaseTypes: boolean = false): string {
  if (swapBaseTypes === true) {
    switch (str.toLowerCase()) {
      case 'base64binary':
      case 'string':
      case 'instant':
      case 'date':
      case 'time':
      case 'datetime':
      case 'uuid':
      case 'uri':
      case 'url':
      case 'oid':
      case 'id':
      case 'canonical':
      case 'xhtml':
      case 'markdown':
      case 'code':
        return 'string';
      case 'boolean':
        return 'boolean';
      case 'decimal':
      case 'integer':
      case 'unsignedint':
      case 'positiveint':
      case 'number':
        return 'number';
      default:
        break;
    }
  }
  return normalizeTypeName(str);
}

/* -------------------------------------------------------------------------- */
/*          8. Generate code snippets for Zod property and TS interface       */
/* -------------------------------------------------------------------------- */

/**
 * Produces the string for a single property inside the Zod schema object.
 */
function outputZodProperty(property: Property, resourceType: string): string {
  // If property is not required, add `.optional()`
  const postfix = (() => {
    if ('min' in property && typeof property.min === 'number' && property.min !== 1) {
      return '.optional()';
    }
    return '';
  })();

  if (property.property === 'resourceType') {
    return `resourceType: z.literal('${resourceType}')${postfix}`;
  }

  if (property.type === 'enum' && property.enum != null) {
    return `${property.property}: z.enum([${property.enum.map((e) => `'${e}'`).join(', ')}])${postfix}`;
  }

  if (property.type === 'reference' && property.ref != null) {
    if (primitives.includes(property.ref)) {
      return `${property.property}: ${referenceCreateTypeFunction(property.ref)}()${postfix}`;
    }
    if (preferredLazy.includes(property.ref)) {
      return `${property.property}: z.lazy(() => ${referenceCreateTypeFunction(property.ref)}())${postfix}`;
    }
    return `${property.property}: ${referenceCreateTypeFunction(property.ref)}()${postfix}`;
  }

  if (property.type === 'array' && property.items != null) {
    const itemReferences = property.items
      .map((i) => {
        if (i != null) {
          if (primitives.includes(i)) {
            return `${referenceCreateTypeFunction(i)}()`;
          }
          if (preferredLazy.includes(i)) {
            return `z.lazy(() => ${referenceCreateTypeFunction(i)}())`;
          }
          return `${referenceCreateTypeFunction(i)}()`;
        }
        return `z.any()`;
      })
      .join(', ');

    return `${property.property}: z.array(${itemReferences})${postfix}`;
  }

  if (property.type === 'reference' && property.ref != null) {
    if (primitives.includes(property.ref)) {
      return `${property.property}: ${referenceCreateTypeFunction(property.ref)}()${postfix}`;
    }
    return `${property.property}: z.any()${postfix}`;
  }

  return `${property.property}: z.${property.type}()${postfix}`;
}

/**
 * Produces the string for a single property inside the TypeScript interface.
 */
function outputInterfaceType(property: Property, resourceType: string): string {
  const comment = (() => {
    if ('definition' in property && typeof property.definition === 'string') {
      return `/** ${property.definition} */`;
    }
    return '';
  })();

  // Optional if min != 1 or if property name starts with underscore
  const optional = (() => {
    if (
      ('min' in property && typeof property.min === 'number' && property.min !== 1) ||
      /^_/.test(property.property)
    ) {
      return '?';
    }
    return '';
  })();

  if (property.property === 'resourceType') {
    return `${comment}\n  resourceType: \`${resourceType}\``;
  }

  if (typeof property.type === 'string' && extendedPrimitives.includes(property.type)) {
    return `${comment}\n  ${property.property}${optional}: ${createTypeName(property.type, true)}`;
  }

  if (property.type === 'enum' && property.enum != null) {
    return `${comment}\n  ${property.property}${optional}: (${property.enum
      .map((e) => `'${e}'`)
      .join(' | ')})`;
  }

  if (property.type === 'reference' && property.ref != null) {
    return `${comment}\n  ${property.property}${optional}: ${createTypeName(property.ref, true)}`;
  }

  if (property.type === 'array' && property.items != null) {
    const itemReferences = property.items.flatMap((i) => {
      if (i != null) {
        return [createTypeName(i, true)];
      }
      return [];
    });

    if (itemReferences.length === 1) {
      return `${comment}\n  ${property.property}${optional}: ${itemReferences[0]}[]`;
    } else if (itemReferences.length > 1) {
      return `${comment}\n  ${property.property}${optional}: (${itemReferences.join(' | ')})[]`;
    }
  }

  if (property.type === 'reference' && property.ref != null) {
    return `${comment}\n  ${property.property}${optional}: ${createTypeName(property.ref, true)}`;
  }

  console.warn('WARNING: Unhandled property type', property.type, property);
  return `${comment}\n  ${property.property}${optional}: any`;
}

/* -------------------------------------------------------------------------- */
/*         9. Generate final output for each definition (Zod + TS)            */
/* -------------------------------------------------------------------------- */

type Definition = (typeof definitions)[number];

/**
 * Outputs a combined string for Zod and interface definitions of a single type.
 */
function outputZodType(type: Definition): string {
  const functionName = referenceCreateTypeFunction(type.type);
  const typeName = createTypeName(type.type);

  return `
export function ${functionName}() {
  return getCachedSchema('${typeName}', () => {
    const baseSchema: z.ZodType<types.${typeName}> = z.strictObject({
      ${type.properties.map((k) => outputZodProperty(k, type.type)).join(',\n    ')}
    });

    return baseSchema;
  });
}
  `;
}

function outputType(type: Definition): string {
  return `
${type.description ? `/** ${type.description} */` : ''}
export interface ${type.type} {
  ${type.properties.map((k) => outputInterfaceType(k, type.type)).join(';\n  ')}
}
`;
}

// Filter through the definitions to identify the Resource types
const resourceDefinitions = definitions.filter((d) =>
  d.properties.some((p) => p.property === 'resourceType'),
);

/* -------------------------------------------------------------------------- */
/*         10. Build dependency graph and find strongly connected components   */
/* -------------------------------------------------------------------------- */

// Create a new dependency graph
const graph = new FhirDependencyGraph();

// Add all types to the graph first
definitions.forEach((def) => {
  graph.addType({ name: def.type });
});

// Now add dependencies based on property references
definitions.forEach((def) => {
  const fromType = { name: def.type };

  def.properties.forEach((prop) => {
    // Handle direct references
    if (prop.type === 'reference' && prop.ref != null && !primitives.includes(prop.ref)) {
      graph.addDependency(fromType, { name: prop.ref });
    }

    // Handle array items that are references
    if (prop.type === 'array' && prop.items != null) {
      prop.items.forEach((item) => {
        if (item != null && !primitives.includes(item)) {
          graph.addDependency(fromType, { name: item });
        }
      });
    }
  });
});

// Find strongly connected components
const sccs = findStronglyConnectedComponents(graph);

// Sort SCCs by size (largest first) and filter out single-type components
const multiTypeSccs = sccs.filter((scc) => scc.length > 1).sort((a, b) => b.length - a.length);

// Group the definitions by their SCC
type TypeGroup = {
  name: string;
  types: Definition[];
  isCore: boolean;
  dependencies: Set<string>; // Track dependencies for this group
  schemaFunctions: Set<string>; // Track schema function dependencies
};

function findSccForType(type: string): string[] | undefined {
  return sccs.find((scc) => scc.includes(type));
}

// Helper to find which group contains a type
function findGroupForType(type: string, groups: TypeGroup[]): TypeGroup | undefined {
  return groups.find((g) => g.types.some((t) => t.type === type));
}

// Helper to get the schema function name for a type
function getSchemaFunctionName(type: string): string {
  return `create${type}Schema`;
}

// Collect all schema function names needed for a property
function collectSchemaFunctions(prop: Property): Set<string> {
  const funcs = new Set<string>();

  // Add base type schema function
  if (prop.type === 'reference' && prop.ref != null) {
    funcs.add(getSchemaFunctionName(prop.ref));
  }

  // Add array item schema functions
  if (prop.type === 'array' && prop.items != null) {
    prop.items.forEach((item) => {
      if (item != null) {
        funcs.add(getSchemaFunctionName(item));
      }
    });
  }

  // Add special schema functions based on property type
  if (prop.type === 'string') funcs.add('createStringSchema');
  if (prop.type === 'number') funcs.add('createNumberSchema');
  if (prop.type === 'boolean') funcs.add('createBooleanSchema');
  if (prop.type === 'date') funcs.add('createDateSchema');
  if (prop.type === 'dateTime') funcs.add('createDateTimeSchema');
  if (prop.type === 'time') funcs.add('createTimeSchema');
  if (prop.type === 'instant') funcs.add('createInstantSchema');
  if (prop.type === 'decimal') funcs.add('createDecimalSchema');
  if (prop.type === 'uri') funcs.add('createUriSchema');
  if (prop.type === 'url') funcs.add('createUrlSchema');
  if (prop.type === 'canonical') funcs.add('createCanonicalSchema');
  if (prop.type === 'uuid') funcs.add('createUuidSchema');
  if (prop.type === 'id') funcs.add('createIdSchema');
  if (prop.type === 'oid') funcs.add('createOidSchema');
  if (prop.type === 'positiveInt') funcs.add('createPositiveIntSchema');
  if (prop.type === 'unsignedInt') funcs.add('createUnsignedIntSchema');
  if (prop.type === 'code') funcs.add('createCodeSchema');
  if (prop.type === 'markdown') funcs.add('createMarkdownSchema');
  if (prop.type === 'xhtml') funcs.add('createXhtmlSchema');
  if (prop.type === 'base64Binary') funcs.add('createBase64BinarySchema');

  return funcs;
}

// Collect dependencies for a property
function collectDependencies(prop: Property): string[] {
  const deps: string[] = [];

  // Handle direct references
  if (prop.type === 'reference' && prop.ref != null && !primitives.includes(prop.ref)) {
    deps.push(prop.ref);
  }

  // Handle array items that are references
  if (prop.type === 'array' && prop.items != null) {
    prop.items.forEach((item) => {
      if (item != null && !primitives.includes(item)) {
        deps.push(item);
      }
    });
  }

  return deps;
}

// Organize definitions into groups
const groups: TypeGroup[] = [];

// First, handle the core types (the largest SCC)
const coreTypes = multiTypeSccs[0] || [];
groups.push({
  name: 'core',
  types: definitions.filter((d) => coreTypes.includes(d.type)),
  isCore: true,
  dependencies: new Set<string>(),
  schemaFunctions: new Set<string>(),
});

// Then group the remaining types by their SCC or as standalone
definitions
  .filter((d) => !coreTypes.includes(d.type))
  .forEach((def) => {
    const scc = findSccForType(def.type);
    if (!scc || scc.length === 1) {
      // Standalone type
      groups.push({
        name: def.type.toLowerCase(),
        types: [def],
        isCore: false,
        dependencies: new Set<string>(),
        schemaFunctions: new Set<string>(),
      });
    } else {
      // Part of a multi-type SCC
      const existingGroup = groups.find((g) => g.types.some((t) => scc.includes(t.type)));
      if (existingGroup) {
        existingGroup.types.push(def);
      } else {
        groups.push({
          name: def.type.toLowerCase().split('_')[0], // Use the base name before underscore
          types: [def],
          isCore: false,
          dependencies: new Set<string>(),
          schemaFunctions: new Set<string>(),
        });
      }
    }
  });

// Collect dependencies and schema functions for each group
groups.forEach((group) => {
  const schemaFuncs = new Set<string>();

  group.types.forEach((def) => {
    def.properties.forEach((prop) => {
      // Collect dependencies
      const deps = collectDependencies(prop);
      deps.forEach((dep) => {
        const depGroup = findGroupForType(dep, groups);
        if (depGroup && depGroup !== group) {
          group.dependencies.add(depGroup.name);
        }
      });

      // Collect schema functions
      const funcs = collectSchemaFunctions(prop);
      funcs.forEach((f) => schemaFuncs.add(f));
    });
  });

  group.schemaFunctions = schemaFuncs;
});

// Log the grouping information
console.log('\nGenerated module groups:');
groups.forEach((group) => {
  console.log(`\n${group.name}${group.isCore ? ' (core)' : ''}:`);
  console.log('Types:', group.types.map((t) => t.type).join(', '));
  console.log('Dependencies:', Array.from(group.dependencies).join(', '));
  console.log('Schema Functions:', Array.from(group.schemaFunctions).join(', '));
});
console.log('\n');

/* -------------------------------------------------------------------------- */
/*         11. Generate output files for each group                           */
/* -------------------------------------------------------------------------- */

async function writeFile(filePath: string, content: string) {
  const prettierOutput = await prettier.format(content, { parser: 'typescript' });
  fs.writeFileSync(filePath, prettierOutput, 'utf-8');
}

(async () => {
  const baseOutputDir = path.join(__dirname, '..', '..', '..', 'src', 'v4.0.1');

  // Ensure the output directory exists
  if (!fs.existsSync(baseOutputDir)) {
    fs.mkdirSync(baseOutputDir, { recursive: true });
  }

  // Pre-process groups to collect all dependencies
  for (const group of groups) {
    const typeDeps = new Set<string>();
    const schemaFuncs = new Set<string>();

    group.types.forEach((def) => {
      def.properties.forEach((prop) => {
        // Collect type dependencies
        getPropertyDependencies(prop).forEach((dep) => typeDeps.add(dep));
        // Collect schema function dependencies
        getPropertySchemaFunctions(prop).forEach((func) => schemaFuncs.add(func));
      });
    });

    // Find which groups contain our dependencies
    const depGroups = new Set<string>();
    typeDeps.forEach((dep) => {
      const depGroup = groups.find((g) => g.types.some((t) => t.type === dep));
      if (depGroup && depGroup !== group) {
        depGroups.add(depGroup.name);
      }
    });

    group.dependencies = depGroups;
    group.schemaFunctions = schemaFuncs;
  }

  // Write each group's schema and types
  for (const group of groups) {
    const groupDir = path.join(baseOutputDir, group.name);
    if (!fs.existsSync(groupDir)) {
      fs.mkdirSync(groupDir, { recursive: true });
    }

    // Generate imports for schema file
    const schemaImports = new Set([
      `import { z } from 'zod/v4';`,
      `import * as types from './types';`,
      `import * as primitives from '../primitives';`,
      `import { getCachedSchema } from '../schema-cache';`,
    ]);

    // Add imports from dependencies
    const importsByGroup = new Map<string, Set<string>>();

    // First collect all needed imports by group
    group.types.forEach((def) => {
      def.properties.forEach((prop) => {
        const funcs = getPropertySchemaFunctions(prop);
        funcs.forEach((func) => {
          // Find which group contains the type for this schema function
          const typeName = func.replace(/^create|Schema$/g, '');
          const depGroup = groups.find((g) =>
            g.types.some((t) => normalizeTypeName(t.type) === typeName),
          );
          if (depGroup && depGroup !== group) {
            if (!importsByGroup.has(depGroup.name)) {
              importsByGroup.set(depGroup.name, new Set());
            }
            importsByGroup.get(depGroup.name)?.add(func);
          }
        });
      });
    });

    // Then generate the import statements
    importsByGroup.forEach((funcs, groupName) => {
      if (funcs.size > 0) {
        schemaImports.add(
          `import { ${Array.from(funcs).join(', ')} } from '../${groupName}/schema';`,
        );
      }
    });

    // Generate imports for types file
    const typesImports = new Set<string>();

    // Add imports from dependencies
    group.dependencies.forEach((dep) => {
      const depGroup = groups.find((g) => g.name === dep);
      if (depGroup) {
        const importTypes = new Set<string>();

        // Collect all type dependencies from all properties
        group.types.forEach((def) => {
          def.properties.forEach((prop) => {
            getPropertyDependencies(prop).forEach((type) => {
              // Check if this type exists in the dependency group
              if (depGroup.types.some((t) => normalizeTypeName(t.type) === type)) {
                importTypes.add(type);
              }
            });
          });
        });

        if (importTypes.size > 0) {
          typesImports.add(
            `import type { ${Array.from(importTypes).join(', ')} } from '../${dep}/types';`,
          );
        }
      }
    });

    // Add imports for types within the same group to handle circular dependencies
    const intraGroupDeps = new Set<string>();
    group.types.forEach((def) => {
      def.properties.forEach((prop) => {
        getPropertyDependencies(prop).forEach((dep) => {
          // Only add if it's a different type in the same group
          if (group.types.some((t) => normalizeTypeName(t.type) === dep) && dep !== def.type) {
            // Skip intra-group imports for core types since they're all defined in the same file
            if (!group.isCore) {
              intraGroupDeps.add(normalizeTypeName(dep));
            }
          }
        });
      });
    });

    if (intraGroupDeps.size > 0) {
      // Add type imports for dependencies within the same group
      typesImports.add(`import type { ${Array.from(intraGroupDeps).join(', ')} } from './types';`);
    }

    // Generate schema file content
    const schemaOutput = `      ${Array.from(schemaImports).join('\n')}

      /* Generated from FHIR JSON Schema */
      ${group.isCore ? resourcesSchemaHeaderFile : ''}
      ${group.types
        .map((type) => {
          const schema = outputZodType({
            ...type,
            type: normalizeTypeName(type.type),
          });
          // Replace direct primitive schema calls with primitives.* calls
          return schema.replace(
            /create(Base64Binary|Boolean|Canonical|Code|Date|DateTime|Decimal|Id|Instant|Integer|Markdown|Oid|PositiveInt|String|Time|UnsignedInt|Uri|Url|Uuid|Xhtml)Schema\(\)/g,
            'primitives.get$1Schema()',
          );
        })
        .join('\n\n')}
    `;

    // Generate types file content
    const typesOutput = `
      ${Array.from(typesImports).join('\n')}

      /** Generated from FHIR JSON Schema */
      ${group.types.map((t) => outputType({ ...t, type: normalizeTypeName(t.type) })).join('\n\n')}
    `;

    // Write the files
    await writeFile(path.join(groupDir, 'schema.ts'), schemaOutput);
    await writeFile(path.join(groupDir, 'types.ts'), typesOutput);
  }

  // Generate the main index.ts that re-exports everything
  const indexOutput = `
    /** Generated from FHIR JSON Schema */
    import { z } from 'zod/v4';
    export * from './primitives';
    ${groups
      .map(
        (group) => `
      export * from './${group.name}/schema';
      export * from './${group.name}/types';
    `,
      )
      .join('\n')}

    // Import all resource types
    ${resourceDefinitions
      .map((d) => {
        const typeName = normalizeTypeName(createTypeName(d.type, true));
        const group = groups.find((g) =>
          g.types.some((t) => normalizeTypeName(t.type) === typeName),
        );
        if (group) {
          return `import type { ${typeName} } from './${group.name}/types';`;
        }
        return '';
      })
      .filter(Boolean)
      .join('\n')}

    // Define resource type list
    export type ResourceListType = ${resourceDefinitions
      .map((d) => normalizeTypeName(createTypeName(d.type, true)))
      .join(' | ')};
    export type KnownResource = ResourceListType['resourceType'];

    // Create a Zod schema for known resource types
    export function createKnownResourceTypeSchema() {
      return z.enum([${resourceDefinitions.map((d) => `'${d.type}'`).join(', ')}]);
    }
  `;
  await writeFile(path.join(baseOutputDir, 'index.ts'), indexOutput);

  // Write out the primitives schema file
  await writeFile(path.join(baseOutputDir, 'primitives.ts'), primitivesSchemaHeaderFile);
  await writeFile(path.join(baseOutputDir, 'schema-cache.ts'), schemaCacheHeaderFile);
})();
