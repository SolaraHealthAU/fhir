import { execSync, spawn } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

interface MemorySnapshot {
  rss: number; // Resident Set Size - total memory allocated
  heapTotal: number; // Total heap allocated
  heapUsed: number; // Heap actually used
  external: number; // Memory used by C++ objects bound to JS objects
  arrayBuffers: number; // Memory allocated for ArrayBuffers and SharedArrayBuffers
}

interface ColdStartResults {
  library: string;
  processStartTime: number;
  moduleLoadTime: number;
  firstOperationTime: number;
  totalColdStartTime: number;
  memoryBefore: MemorySnapshot;
  memoryAfter: MemorySnapshot;
  memoryDelta: {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
    arrayBuffers: number;
  };
  peakMemoryUsage: MemorySnapshot;
  gcCollections?: number;
  timestamp: string;
  nodeVersion: string;
  platform: string;
}

interface ComprehensiveMemoryResults {
  fhirR4: ColdStartResults;
  ahryman40k: ColdStartResults;
  comparison: {
    coldStartTime: {
      winner: string;
      fhirR4Time: number;
      ahryman40kTime: number;
      difference: string;
    };
    moduleLoadTime: {
      winner: string;
      fhirR4Time: number;
      ahryman40kTime: number;
      difference: string;
    };
    memoryFootprint: {
      winner: string;
      fhirR4Memory: number;
      ahryman40kMemory: number;
      difference: string;
    };
    peakMemory: {
      winner: string;
      fhirR4Peak: number;
      ahryman40kPeak: number;
      difference: string;
    };
  };
  timestamp: string;
}

// Helper function to get memory snapshot
function getMemorySnapshot(): MemorySnapshot {
  const usage = process.memoryUsage();
  return {
    rss: usage.rss,
    heapTotal: usage.heapTotal,
    heapUsed: usage.heapUsed,
    external: usage.external,
    arrayBuffers: usage.arrayBuffers,
  };
}

// Helper function to calculate memory delta
function calculateMemoryDelta(before: MemorySnapshot, after: MemorySnapshot) {
  return {
    rss: after.rss - before.rss,
    heapTotal: after.heapTotal - before.heapTotal,
    heapUsed: after.heapUsed - before.heapUsed,
    external: after.external - before.external,
    arrayBuffers: after.arrayBuffers - before.arrayBuffers,
  };
}

// Helper function to format bytes
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Create isolated benchmark script for fhir-r4
function createFhirR4BenchmarkScript(): string {
  return `
const startTime = process.hrtime.bigint();

// Measure module load time
const moduleLoadStart = process.hrtime.bigint();
const { createPatientSchema } = require('@solarahealth/fhir-r4');
const moduleLoadEnd = process.hrtime.bigint();
const moduleLoadTime = Number(moduleLoadEnd - moduleLoadStart) / 1000000; // Convert to ms

// Get initial memory
function getMemorySnapshot() {
  const usage = process.memoryUsage();
  return {
    rss: usage.rss,
    heapTotal: usage.heapTotal,
    heapUsed: usage.heapUsed,
    external: usage.external,
    arrayBuffers: usage.arrayBuffers,
  };
}

const memoryBefore = getMemorySnapshot();

// Sample patient data
const samplePatient = {
  resourceType: 'Patient',
  name: [{ given: ['John'], family: 'Doe' }],
  birthDate: '1990-01-01',
  gender: 'male',
  active: true,
  telecom: [
    {
      system: 'phone',
      value: '+1-555-123-4567',
      use: 'home',
    },
  ],
  address: [
    {
      use: 'home',
      line: ['123 Main St'],
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'US',
    },
  ],
};

// Measure first operation time
const firstOpStart = process.hrtime.bigint();
const schema = createPatientSchema();
const result = schema.parse(samplePatient);
const firstOpEnd = process.hrtime.bigint();
const firstOperationTime = Number(firstOpEnd - firstOpStart) / 1000000; // Convert to ms

// Get memory after operations
const memoryAfter = getMemorySnapshot();

// Calculate total cold start time
const totalTime = Number(process.hrtime.bigint() - startTime) / 1000000; // Convert to ms

// Track peak memory usage during a batch operation
let peakMemory = memoryAfter;
const patients = Array.from({ length: 100 }, (_, i) => ({
  ...samplePatient,
  id: \`patient-\${i}\`,
}));

for (const patient of patients) {
  schema.parse(patient);
  const currentMemory = getMemorySnapshot();
  if (currentMemory.heapUsed > peakMemory.heapUsed) {
    peakMemory = currentMemory;
  }
}

const results = {
  library: '@solarahealth/fhir-r4',
  processStartTime: 0, // Will be set by parent
  moduleLoadTime,
  firstOperationTime,
  totalColdStartTime: totalTime,
  memoryBefore,
  memoryAfter,
  memoryDelta: {
    rss: memoryAfter.rss - memoryBefore.rss,
    heapTotal: memoryAfter.heapTotal - memoryBefore.heapTotal,
    heapUsed: memoryAfter.heapUsed - memoryBefore.heapUsed,
    external: memoryAfter.external - memoryBefore.external,
    arrayBuffers: memoryAfter.arrayBuffers - memoryBefore.arrayBuffers,
  },
  peakMemoryUsage: peakMemory,
  timestamp: new Date().toISOString(),
  nodeVersion: process.version,
  platform: process.platform,
};

console.log(JSON.stringify(results, null, 2));
`;
}

// Create isolated benchmark script for ahryman40k
function createAhryman40kBenchmarkScript(): string {
  return `
const startTime = process.hrtime.bigint();

// Measure module load time
const moduleLoadStart = process.hrtime.bigint();
const { RTTI_Patient } = require('@ahryman40k/ts-fhir-types').R4;
const { isRight } = require('fp-ts/lib/Either');
const moduleLoadEnd = process.hrtime.bigint();
const moduleLoadTime = Number(moduleLoadEnd - moduleLoadStart) / 1000000; // Convert to ms

// Get initial memory
function getMemorySnapshot() {
  const usage = process.memoryUsage();
  return {
    rss: usage.rss,
    heapTotal: usage.heapTotal,
    heapUsed: usage.heapUsed,
    external: usage.external,
    arrayBuffers: usage.arrayBuffers,
  };
}

const memoryBefore = getMemorySnapshot();

// Sample patient data
const samplePatient = {
  resourceType: 'Patient',
  name: [{ given: ['John'], family: 'Doe' }],
  birthDate: '1990-01-01',
  gender: 'male',
  active: true,
  telecom: [
    {
      system: 'phone',
      value: '+1-555-123-4567',
      use: 'home',
    },
  ],
  address: [
    {
      use: 'home',
      line: ['123 Main St'],
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'US',
    },
  ],
};

// Measure first operation time
const firstOpStart = process.hrtime.bigint();
const result = RTTI_Patient.decode(samplePatient);
const isValid = isRight(result);
const firstOpEnd = process.hrtime.bigint();
const firstOperationTime = Number(firstOpEnd - firstOpStart) / 1000000; // Convert to ms

// Get memory after operations
const memoryAfter = getMemorySnapshot();

// Calculate total cold start time
const totalTime = Number(process.hrtime.bigint() - startTime) / 1000000; // Convert to ms

// Track peak memory usage during a batch operation
let peakMemory = memoryAfter;
const patients = Array.from({ length: 100 }, (_, i) => ({
  ...samplePatient,
  id: \`patient-\${i}\`,
}));

for (const patient of patients) {
  RTTI_Patient.decode(patient);
  const currentMemory = getMemorySnapshot();
  if (currentMemory.heapUsed > peakMemory.heapUsed) {
    peakMemory = currentMemory;
  }
}

const results = {
  library: '@ahryman40k/ts-fhir-types',
  processStartTime: 0, // Will be set by parent
  moduleLoadTime,
  firstOperationTime,
  totalColdStartTime: totalTime,
  memoryBefore,
  memoryAfter,
  memoryDelta: {
    rss: memoryAfter.rss - memoryBefore.rss,
    heapTotal: memoryAfter.heapTotal - memoryBefore.heapTotal,
    heapUsed: memoryAfter.heapUsed - memoryBefore.heapUsed,
    external: memoryAfter.external - memoryBefore.external,
    arrayBuffers: memoryAfter.arrayBuffers - memoryBefore.arrayBuffers,
  },
  peakMemoryUsage: peakMemory,
  timestamp: new Date().toISOString(),
  nodeVersion: process.version,
  platform: process.platform,
};

console.log(JSON.stringify(results, null, 2));
`;
}

// Run isolated benchmark for a library
async function runIsolatedBenchmark(
  scriptContent: string,
  scriptName: string,
): Promise<ColdStartResults> {
  return new Promise((resolve, reject) => {
    const scriptPath = join(__dirname, scriptName);
    writeFileSync(scriptPath, scriptContent);

    const processStartTime = process.hrtime.bigint();

    const child = spawn('node', [scriptPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'production' },
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      const processEndTime = process.hrtime.bigint();
      const processTime = Number(processEndTime - processStartTime) / 1000000; // Convert to ms

      if (code !== 0) {
        reject(new Error(`Process exited with code ${code}. Stderr: ${stderr}`));
        return;
      }

      try {
        const results: ColdStartResults = JSON.parse(stdout.trim());
        results.processStartTime = processTime;
        resolve(results);
      } catch (error) {
        reject(new Error(`Failed to parse results: ${error}. Stdout: ${stdout}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function runMemoryAndColdStartBenchmarks(): Promise<ComprehensiveMemoryResults> {
  console.log('🧠 Starting Memory & Cold-Start Benchmark\n');
  console.log('==========================================\n');

  // Force garbage collection before starting
  if (global.gc) {
    global.gc();
  }

  console.log('📊 Running @solarahealth/fhir-r4 cold-start benchmark...');
  const fhirR4Script = createFhirR4BenchmarkScript();
  const fhirR4Results = await runIsolatedBenchmark(fhirR4Script, 'temp-fhir-r4-benchmark.js');

  // Wait a bit and force GC between tests
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (global.gc) {
    global.gc();
  }

  console.log('📊 Running @ahryman40k/ts-fhir-types cold-start benchmark...');
  const ahryman40kScript = createAhryman40kBenchmarkScript();
  const ahryman40kResults = await runIsolatedBenchmark(
    ahryman40kScript,
    'temp-ahryman40k-benchmark.js',
  );

  // Calculate comparisons
  const coldStartWinner =
    fhirR4Results.totalColdStartTime < ahryman40kResults.totalColdStartTime
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';
  const coldStartDifference =
    fhirR4Results.totalColdStartTime < ahryman40kResults.totalColdStartTime
      ? `${(((ahryman40kResults.totalColdStartTime - fhirR4Results.totalColdStartTime) / fhirR4Results.totalColdStartTime) * 100).toFixed(1)}% faster`
      : `${(((fhirR4Results.totalColdStartTime - ahryman40kResults.totalColdStartTime) / ahryman40kResults.totalColdStartTime) * 100).toFixed(1)}% faster`;

  const moduleLoadWinner =
    fhirR4Results.moduleLoadTime < ahryman40kResults.moduleLoadTime
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';
  const moduleLoadDifference =
    fhirR4Results.moduleLoadTime < ahryman40kResults.moduleLoadTime
      ? `${(((ahryman40kResults.moduleLoadTime - fhirR4Results.moduleLoadTime) / fhirR4Results.moduleLoadTime) * 100).toFixed(1)}% faster`
      : `${(((fhirR4Results.moduleLoadTime - ahryman40kResults.moduleLoadTime) / ahryman40kResults.moduleLoadTime) * 100).toFixed(1)}% faster`;

  const memoryWinner =
    fhirR4Results.memoryDelta.heapUsed < ahryman40kResults.memoryDelta.heapUsed
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';
  const memoryDifference =
    fhirR4Results.memoryDelta.heapUsed < ahryman40kResults.memoryDelta.heapUsed
      ? `${(((ahryman40kResults.memoryDelta.heapUsed - fhirR4Results.memoryDelta.heapUsed) / fhirR4Results.memoryDelta.heapUsed) * 100).toFixed(1)}% less memory`
      : `${(((fhirR4Results.memoryDelta.heapUsed - ahryman40kResults.memoryDelta.heapUsed) / ahryman40kResults.memoryDelta.heapUsed) * 100).toFixed(1)}% less memory`;

  const peakMemoryWinner =
    fhirR4Results.peakMemoryUsage.heapUsed < ahryman40kResults.peakMemoryUsage.heapUsed
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';
  const peakMemoryDifference =
    fhirR4Results.peakMemoryUsage.heapUsed < ahryman40kResults.peakMemoryUsage.heapUsed
      ? `${(((ahryman40kResults.peakMemoryUsage.heapUsed - fhirR4Results.peakMemoryUsage.heapUsed) / fhirR4Results.peakMemoryUsage.heapUsed) * 100).toFixed(1)}% lower peak`
      : `${(((fhirR4Results.peakMemoryUsage.heapUsed - ahryman40kResults.peakMemoryUsage.heapUsed) / ahryman40kResults.peakMemoryUsage.heapUsed) * 100).toFixed(1)}% lower peak`;

  const comparisonResults: ComprehensiveMemoryResults = {
    fhirR4: fhirR4Results,
    ahryman40k: ahryman40kResults,
    comparison: {
      coldStartTime: {
        winner: coldStartWinner,
        fhirR4Time: fhirR4Results.totalColdStartTime,
        ahryman40kTime: ahryman40kResults.totalColdStartTime,
        difference: coldStartDifference,
      },
      moduleLoadTime: {
        winner: moduleLoadWinner,
        fhirR4Time: fhirR4Results.moduleLoadTime,
        ahryman40kTime: ahryman40kResults.moduleLoadTime,
        difference: moduleLoadDifference,
      },
      memoryFootprint: {
        winner: memoryWinner,
        fhirR4Memory: fhirR4Results.memoryDelta.heapUsed,
        ahryman40kMemory: ahryman40kResults.memoryDelta.heapUsed,
        difference: memoryDifference,
      },
      peakMemory: {
        winner: peakMemoryWinner,
        fhirR4Peak: fhirR4Results.peakMemoryUsage.heapUsed,
        ahryman40kPeak: ahryman40kResults.peakMemoryUsage.heapUsed,
        difference: peakMemoryDifference,
      },
    },
    timestamp: new Date().toISOString(),
  };

  return comparisonResults;
}

function displayMemoryResults(results: ComprehensiveMemoryResults) {
  console.log('\n🧠 MEMORY & COLD-START COMPARISON RESULTS');
  console.log('==========================================\n');

  console.log('❄️  COLD-START PERFORMANCE');
  console.log('---------------------------');
  console.log(`🥇 Winner: ${results.comparison.coldStartTime.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.comparison.coldStartTime.fhirR4Time.toFixed(2)}ms`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.comparison.coldStartTime.ahryman40kTime.toFixed(2)}ms`,
  );
  console.log(`   Difference: ${results.comparison.coldStartTime.difference}\n`);

  console.log('📦 MODULE LOAD TIME');
  console.log('-------------------');
  console.log(`🥇 Winner: ${results.comparison.moduleLoadTime.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.comparison.moduleLoadTime.fhirR4Time.toFixed(2)}ms`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.comparison.moduleLoadTime.ahryman40kTime.toFixed(2)}ms`,
  );
  console.log(`   Difference: ${results.comparison.moduleLoadTime.difference}\n`);

  console.log('💾 MEMORY FOOTPRINT (Heap Used Delta)');
  console.log('-------------------------------------');
  console.log(`🥇 Winner: ${results.comparison.memoryFootprint.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${formatBytes(results.comparison.memoryFootprint.fhirR4Memory)}`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${formatBytes(results.comparison.memoryFootprint.ahryman40kMemory)}`,
  );
  console.log(`   Difference: ${results.comparison.memoryFootprint.difference}\n`);

  console.log('📈 PEAK MEMORY USAGE');
  console.log('--------------------');
  console.log(`🥇 Winner: ${results.comparison.peakMemory.winner}`);
  console.log(`   @solarahealth/fhir-r4: ${formatBytes(results.comparison.peakMemory.fhirR4Peak)}`);
  console.log(
    `   @ahryman40k/ts-fhir-types: ${formatBytes(results.comparison.peakMemory.ahryman40kPeak)}`,
  );
  console.log(`   Difference: ${results.comparison.peakMemory.difference}\n`);

  console.log('📊 DETAILED MEMORY BREAKDOWN');
  console.log('============================\n');

  console.log('📋 @solarahealth/fhir-r4:');
  console.log(`   RSS Delta: ${formatBytes(results.fhirR4.memoryDelta.rss)}`);
  console.log(`   Heap Total Delta: ${formatBytes(results.fhirR4.memoryDelta.heapTotal)}`);
  console.log(`   Heap Used Delta: ${formatBytes(results.fhirR4.memoryDelta.heapUsed)}`);
  console.log(`   External Delta: ${formatBytes(results.fhirR4.memoryDelta.external)}`);
  console.log(`   Peak Heap Used: ${formatBytes(results.fhirR4.peakMemoryUsage.heapUsed)}\n`);

  console.log('📋 @ahryman40k/ts-fhir-types:');
  console.log(`   RSS Delta: ${formatBytes(results.ahryman40k.memoryDelta.rss)}`);
  console.log(`   Heap Total Delta: ${formatBytes(results.ahryman40k.memoryDelta.heapTotal)}`);
  console.log(`   Heap Used Delta: ${formatBytes(results.ahryman40k.memoryDelta.heapUsed)}`);
  console.log(`   External Delta: ${formatBytes(results.ahryman40k.memoryDelta.external)}`);
  console.log(`   Peak Heap Used: ${formatBytes(results.ahryman40k.peakMemoryUsage.heapUsed)}\n`);

  console.log('🎯 AWS LAMBDA IMPLICATIONS');
  console.log('==========================');
  console.log('For AWS Lambda cold starts:');
  console.log(`• Faster cold-start: ${results.comparison.coldStartTime.winner}`);
  console.log(`• Lower memory usage: ${results.comparison.memoryFootprint.winner}`);
  console.log(`• Faster module loading: ${results.comparison.moduleLoadTime.winner}`);
  console.log('\nConsider cold-start time and memory usage for Lambda pricing optimization.\n');
}

// Main execution
async function main() {
  try {
    const results = await runMemoryAndColdStartBenchmarks();
    displayMemoryResults(results);

    // Save results to file
    const resultsFile = 'memory-coldstart-results.json';
    writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    console.log(`📄 Results exported to: ${resultsFile}`);

    // Clean up temporary files
    try {
      const fs = require('fs');
      fs.unlinkSync(join(__dirname, 'temp-fhir-r4-benchmark.js'));
      fs.unlinkSync(join(__dirname, 'temp-ahryman40k-benchmark.js'));
    } catch (e) {
      // Ignore cleanup errors
    }
  } catch (error) {
    console.error('❌ Benchmark failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { runMemoryAndColdStartBenchmarks, type ComprehensiveMemoryResults };
