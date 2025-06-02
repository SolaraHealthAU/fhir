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

function getTargetDirectory(resourceType: string): string {
  return path.join('tests', resourceType.toLowerCase());
}

function getFixturePath(resourceType: string): string {
  return path.join(getTargetDirectory(resourceType), 'fixture.ts');
}

function getTestPath(resourceType: string): string {
  return path.join(getTargetDirectory(resourceType), 'schema.test.ts');
}

function getSourceTypeDirectory(resourceType: string): string {
  return path.join('src/v4.0.1', resourceType.toLowerCase());
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
        const sourceTypeDir = getSourceTypeDirectory(resourceType);
        if (!fs.existsSync(sourceTypeDir)) {
          console.warn(`Skipping ${file}: Source type directory ${sourceTypeDir} does not exist`);
          continue;
        }

        // Initialize fixture content for this resource type if not exists
        if (!fixtureMap.has(resourceType)) {
          fixtureMap.set(resourceType, {
            imports: new Set(),
            exports: [],
            fixtures: [],
          });
        }

        const fixtureContent = fixtureMap.get(resourceType)!;

        // Add import for the resource type using relative path
        fixtureContent.imports.add(
          `import type { ${resourceType} } from '../../src/v4.0.1/${resourceType.toLowerCase()}/types';`,
        );

        // Clean the resource to remove null values that cause TypeScript issues
        const cleanedResource = cleanNullValues(resource);

        // Add export for this fixture
        const exportStatement = `export const ${constantName}: ${resourceType} = ${JSON.stringify(cleanedResource, null, 2)} as const;`;
        fixtureContent.exports.push(exportStatement);

        // Track fixture for test generation
        fixtureContent.fixtures.push({ name: constantName, resourceType });

        console.log(`Processed ${file} -> ${resourceType}/${constantName}`);
        processedCount++;
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }

    // Write fixture files and test files
    let totalCreated = 0;
    for (const [resourceType, content] of fixtureMap) {
      try {
        const fixtureDir = getTargetDirectory(resourceType);

        // Ensure the directory exists
        if (!fs.existsSync(fixtureDir)) {
          fs.mkdirSync(fixtureDir, { recursive: true });
        }

        // Generate fixture file
        const fixturePath = getFixturePath(resourceType);
        const imports = Array.from(content.imports).join('\n');
        const exports = content.exports.join('\n\n');
        const fixtureFileContent = `${imports}\n\n${exports}\n`;
        await writeFile(fixturePath, fixtureFileContent);

        // Generate test file
        const testPath = getTestPath(resourceType);
        const schemaFunctionName = getSchemaFunctionName(resourceType);

        // Import all fixtures and the schema function
        const fixtureImports = content.fixtures.map((f) => f.name).join(', ');

        const testFileContent = `import { ${schemaFunctionName} } from '../../src';
import { ${fixtureImports} } from './fixture';
import { z } from 'zod/v4';

describe('${resourceType} Schema Validation', () => {
${content.fixtures
  .map(
    (fixture) => `  it('should validate ${fixture.name} fixture', () => {
    const result = ${schemaFunctionName}().safeParse(${fixture.name});
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
        console.log(`Created ${testPath} with ${content.fixtures.length} test(s)`);
        totalCreated++;
      } catch (error) {
        console.error(`Error writing files for ${resourceType}:`, error);
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
