import * as fs from 'fs';
import * as path from 'path';
import prettier from 'prettier';

interface FHIRResource {
  resourceType: string;
  id?: string;
  [key: string]: any;
}

const excludeExamples: string[] = [];

interface FixtureContent {
  imports: Set<string>;
  exports: string[];
  fixtures: Array<{ name: string; resourceType: string }>;
}

function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

function toConstantName(filename: string): string {
  // Remove .json extension and convert to PascalCase
  const baseName = filename.replace(/\.json$/, '');

  // Replace dots with underscores and other problematic characters
  const sanitized = baseName
    .replace(/\./g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');

  return toPascalCase(sanitized);
}

// Parent-child detection logic (copied from main generation script)
function getParentTypeName(typeName: string): string | null {
  const possibleParents: string[] = [];

  // Extract all capital letter positions to identify word boundaries
  const capitalPositions: number[] = [];
  for (let i = 0; i < typeName.length; i++) {
    if (typeName[i] >= 'A' && typeName[i] <= 'Z') {
      capitalPositions.push(i);
    }
  }

  // Try different combinations of words as potential parents
  // Start from the second-to-last capital letter and work backwards
  for (let i = capitalPositions.length - 2; i >= 1; i--) {
    const potentialParent = typeName.substring(0, capitalPositions[i]);
    if (potentialParent.length > 0 && potentialParent.length < typeName.length) {
      possibleParents.push(potentialParent);
    }
  }

  // Return the longest potential parent (most specific)
  return possibleParents.length > 0 ? possibleParents[0] : null;
}

function getRootParentTypeName(typeName: string, allTypes: Set<string>): string {
  let currentType = typeName;
  let rootParent = typeName;
  let maxDepth = 10; // Prevent infinite loops

  // Keep looking for parents until we can't find any more
  while (maxDepth > 0) {
    const parent = getParentTypeName(currentType);
    if (!parent) {
      break;
    }

    // Check if this parent actually exists in our type definitions
    if (allTypes.has(parent)) {
      rootParent = parent;
      currentType = parent;
      maxDepth--;
    } else {
      // If the parent doesn't exist in our definitions, stop here
      break;
    }
  }

  return rootParent;
}

// Get all available types by scanning the source directories
function getAvailableTypes(): Set<string> {
  const typesSet = new Set<string>();
  const srcDir = 'src/v4.0.1';

  try {
    if (fs.existsSync(srcDir)) {
      const groupDirs = fs.readdirSync(srcDir).filter((dir) => {
        const fullPath = path.join(srcDir, dir);
        return fs.statSync(fullPath).isDirectory();
      });

      for (const groupDir of groupDirs) {
        const typesPath = path.join(srcDir, groupDir, 'types.ts');
        if (fs.existsSync(typesPath)) {
          try {
            const typesContent = fs.readFileSync(typesPath, 'utf8');
            // Extract interface/type definitions
            const interfaceMatches = typesContent.match(/export interface (\w+)/g);
            if (interfaceMatches) {
              interfaceMatches.forEach((match) => {
                const typeName = match.replace('export interface ', '');
                typesSet.add(typeName);
              });
            }
          } catch (error) {
            console.warn(`Error reading types from ${typesPath}:`, error);
          }
        }
      }
    }
  } catch (error) {
    console.warn('Error scanning for available types:', error);
  }

  return typesSet;
}

// Map a resource type to its consolidated group directory
function getConsolidatedGroupName(resourceType: string, availableTypes: Set<string>): string {
  const rootParent = getRootParentTypeName(resourceType, availableTypes);
  return rootParent.toLowerCase();
}

function getTargetDirectory(resourceType: string, availableTypes: Set<string>): string {
  const groupName = getConsolidatedGroupName(resourceType, availableTypes);
  return path.join('tests', groupName);
}

function getFixturePath(resourceType: string, availableTypes: Set<string>): string {
  return path.join(getTargetDirectory(resourceType, availableTypes), 'fixture.ts');
}

function getTestPath(resourceType: string, availableTypes: Set<string>): string {
  return path.join(getTargetDirectory(resourceType, availableTypes), 'schema.test.ts');
}

function getSourceTypeDirectory(resourceType: string, availableTypes: Set<string>): string {
  const groupName = getConsolidatedGroupName(resourceType, availableTypes);
  return path.join('src/v4.0.1', groupName);
}

function getSchemaFunctionName(resourceType: string): string {
  return `create${resourceType}Schema`;
}

function cleanNullValues(obj: any): any {
  if (obj === null || obj === undefined) {
    return undefined;
  }

  if (Array.isArray(obj)) {
    const cleaned = obj.map(cleanNullValues).filter((item) => item !== undefined);
    return cleaned.length > 0 ? cleaned : undefined;
  }

  if (typeof obj === 'object') {
    const cleaned: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const cleanedValue = cleanNullValues(value);
      if (cleanedValue !== undefined) {
        cleaned[key] = cleanedValue;
      }
    }
    return Object.keys(cleaned).length > 0 ? cleaned : undefined;
  }

  return obj;
}

async function writeFile(filePath: string, content: string): Promise<void> {
  const prettierOutput = await prettier.format(content, { parser: 'typescript' });
  fs.writeFileSync(filePath, prettierOutput, 'utf-8');
}

async function generateFixtures(): Promise<void> {
  const examplesDir = 'specifications/R4/examples';
  const fixtureMap = new Map<string, FixtureContent>();

  // Get available types once at the beginning
  const availableTypes = getAvailableTypes();
  console.log(`Found ${availableTypes.size} available types in source`);

  try {
    const files = fs.readdirSync(examplesDir);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));

    console.log(`Found ${jsonFiles.length} JSON files to process`);

    let processedCount = 0;
    const maxFilesToProcess = 3000; // Limit to prevent memory issues

    for (const file of jsonFiles) {
      if (processedCount >= maxFilesToProcess) {
        console.log(`Stopping at ${maxFilesToProcess} files to prevent memory issues`);
        break;
      }

      try {
        const filePath = path.join(examplesDir, file);

        // Skip very large files to prevent memory issues
        const stats = fs.statSync(filePath);
        if (stats.size > 100 * 1024) {
          // Skip files larger than 100KB
          console.warn(`Skipping ${file}: File too large (${Math.round(stats.size / 1024)}KB)`);
          continue;
        }

        const content = fs.readFileSync(filePath, 'utf8');
        const resource: FHIRResource = JSON.parse(content);

        if (!resource.resourceType) {
          console.warn(`Skipping ${file}: No resourceType found`);
          continue;
        }

        const resourceType = resource.resourceType;
        const constantName = toConstantName(file);

        // Check if this example should be excluded
        if (excludeExamples.includes(constantName)) {
          console.log(`Skipping ${file}: Example '${constantName}' is in exclude list`);
          continue;
        }

        // Validate the constant name
        if (!/^[A-Z][a-zA-Z0-9_]*$/.test(constantName)) {
          console.warn(`Skipping ${file}: Invalid constant name generated: ${constantName}`);
          continue;
        }

        // Check if source type directory exists - only generate for existing resource types
        const sourceTypeDir = getSourceTypeDirectory(resourceType, availableTypes);
        if (!fs.existsSync(sourceTypeDir)) {
          console.warn(`Skipping ${file}: Source type directory ${sourceTypeDir} does not exist`);
          continue;
        }

        // Get the consolidated group name for organizing fixtures
        const groupName = getConsolidatedGroupName(resourceType, availableTypes);

        // Initialize fixture content for this group if not exists
        if (!fixtureMap.has(groupName)) {
          fixtureMap.set(groupName, {
            imports: new Set(),
            exports: [],
            fixtures: [],
          });
        }

        const fixtureContent = fixtureMap.get(groupName)!;

        // Add import for the resource type using relative path to the consolidated directory
        fixtureContent.imports.add(
          `import type { ${resourceType} } from '../../src/v4.0.1/${groupName}/types';`,
        );

        // Clean the resource to remove null values that cause TypeScript issues
        const cleanedResource = cleanNullValues(resource);

        // Add export for this fixture
        const exportStatement = `export const ${constantName}: ${resourceType} = ${JSON.stringify(cleanedResource, null, 2)} as const;`;
        fixtureContent.exports.push(exportStatement);

        // Track fixture for test generation
        fixtureContent.fixtures.push({ name: constantName, resourceType });

        console.log(`Processed ${file} -> ${groupName}/${constantName} (${resourceType})`);
        processedCount++;
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }

    // Write fixture files and test files
    let totalCreated = 0;
    for (const [groupName, content] of fixtureMap) {
      try {
        const fixtureDir = path.join('tests', groupName);

        // Ensure the directory exists
        if (!fs.existsSync(fixtureDir)) {
          fs.mkdirSync(fixtureDir, { recursive: true });
        }

        // Generate fixture file
        const fixturePath = path.join(fixtureDir, 'fixture.ts');
        const imports = Array.from(content.imports).join('\n');
        const exports = content.exports.join('\n\n');
        const fixtureFileContent = `${imports}\n\n${exports}\n`;
        await writeFile(fixturePath, fixtureFileContent);

        // Generate test file
        const testPath = path.join(fixtureDir, 'schema.test.ts');

        // Import all fixtures and schema functions
        const fixtureImports = content.fixtures.map((f) => f.name).join(', ');
        const schemaFunctions = Array.from(
          new Set(content.fixtures.map((f) => getSchemaFunctionName(f.resourceType))),
        );
        const schemaImports = schemaFunctions.join(', ');

        const testFileContent = `import { ${schemaImports} } from '../../src';
import { ${fixtureImports} } from './fixture';
import { z } from 'zod/v4';

describe('${groupName.charAt(0).toUpperCase() + groupName.slice(1)} Group Schema Validation', () => {
${content.fixtures
  .map(
    (fixture) => `  it('should validate ${fixture.name} fixture (${fixture.resourceType})', () => {
    const result = ${getSchemaFunctionName(fixture.resourceType)}().safeParse(${fixture.name});
    if (!result.success) {
      console.error('Validation failed for ${fixture.name}:');
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(\`Schema validation failed for ${fixture.name}: \${result.error.message}\`);
    }
    expect(result.success).toBe(true);
  });`,
  )
  .join('\n\n')}
});
`;

        await writeFile(testPath, testFileContent);

        console.log(`Created ${fixturePath} with ${content.exports.length} fixture(s)`);
        console.log(
          `Created ${testPath} with ${content.fixtures.length} test(s) for group '${groupName}'`,
        );
        totalCreated++;
      } catch (error) {
        console.error(`Error writing files for group ${groupName}:`, error);
      }
    }

    console.log(`\nGeneration complete! Created ${totalCreated} fixture and test file pairs.`);
  } catch (error) {
    console.error('Error during fixture generation:', error);
  }
}

// Run the script
if (require.main === module) {
  generateFixtures().catch(console.error);
}

export { generateFixtures };
