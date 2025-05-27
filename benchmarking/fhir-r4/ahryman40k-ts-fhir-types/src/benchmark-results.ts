import { R4 } from '@ahryman40k/ts-fhir-types';
import { either as E } from 'fp-ts';

// Sample patient data for benchmarking
const samplePatientData = {
  resourceType: 'Patient' as const,
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
    {
      system: 'email',
      value: 'john.doe@example.com',
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

interface BenchmarkResults {
  schemaAccess: {
    average: number;
    min: number;
    max: number;
    samples: number[];
  };
  parsing: {
    individualAverage: number;
    individualMin: number;
    individualMax: number;
    batchTotal: number;
    averagePerPatient: number;
    throughputPerSecond: number;
    successfullyParsed: number;
    totalPatients: number;
    successRate: number;
  };
  memory: {
    estimatedBytesPerPatient: number;
    totalKB: number;
  };
  timestamp: string;
  nodeVersion: string;
  platform: string;
  library: string;
}

// Utility function to measure execution time
function measureTime<T>(fn: () => T): { result: T; duration: number } {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = end - start;
  return { result, duration };
}

// Function to generate varied patient data
function generatePatientData(index: number) {
  const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Eve', 'Frank'];
  const families = ['Doe', 'Smith', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore'];
  const genders = ['male', 'female', 'other', 'unknown'];

  return {
    ...samplePatientData,
    name: [
      {
        given: [names[index % names.length]],
        family: families[index % families.length],
      },
    ],
    gender: genders[index % genders.length],
    birthDate: `19${50 + (index % 50)}-${String((index % 12) + 1).padStart(2, '0')}-${String((index % 28) + 1).padStart(2, '0')}`,
    id: `patient-${index}`,
  };
}

export async function runBenchmarkAndGetResults(): Promise<BenchmarkResults> {
  // Benchmark 1: Schema Access Time
  const schemaAccessResults = [];
  const numSchemaAccesses = 10;

  for (let i = 0; i < numSchemaAccesses; i++) {
    const { duration } = measureTime(() => R4.RTTI_Patient);
    schemaAccessResults.push(duration);
  }

  const avgSchemaAccess =
    schemaAccessResults.reduce((a, b) => a + b, 0) / schemaAccessResults.length;
  const minSchemaAccess = Math.min(...schemaAccessResults);
  const maxSchemaAccess = Math.max(...schemaAccessResults);

  // Benchmark 2: Parsing 1,000 Patients
  const { result: patientRTTI } = measureTime(() => R4.RTTI_Patient);

  // Generate 1,000 patient data objects
  const patientDataArray = Array.from({ length: 1000 }, (_, i) => generatePatientData(i));

  // Benchmark individual parsing (first 10)
  const individualParsingTimes = [];
  const individualResults = [];

  for (let i = 0; i < Math.min(10, patientDataArray.length); i++) {
    const { result, duration } = measureTime(() => patientRTTI.decode(patientDataArray[i]));
    individualParsingTimes.push(duration);
    individualResults.push(result);
  }

  const avgIndividualParsing =
    individualParsingTimes.reduce((a, b) => a + b, 0) / individualParsingTimes.length;

  // Benchmark batch parsing of all 1,000 patients
  const { result: batchResults, duration: batchParsingDuration } = measureTime(() => {
    const results = [];
    for (const patientData of patientDataArray) {
      results.push(patientRTTI.decode(patientData));
    }
    return results;
  });

  const successfulParsed = batchResults.filter((result) => E.isRight(result)).length;
  const avgParsingPerPatient = batchParsingDuration / 1000;
  const patientsPerSecond = 1000 / (batchParsingDuration / 1000);
  const successRate = (successfulParsed / 1000) * 100;

  // Memory usage estimation (using successful results)
  const successfulResults = batchResults.filter((result) => E.isRight(result));
  let estimatedMemoryPerPatient = 0;
  if (successfulResults.length > 0) {
    const firstSuccessful = successfulResults[0];
    if (E.isRight(firstSuccessful)) {
      estimatedMemoryPerPatient = JSON.stringify(firstSuccessful.right).length;
    }
  }
  const totalEstimatedMemory = estimatedMemoryPerPatient * successfulResults.length;

  return {
    schemaAccess: {
      average: avgSchemaAccess,
      min: minSchemaAccess,
      max: maxSchemaAccess,
      samples: schemaAccessResults,
    },
    parsing: {
      individualAverage: avgIndividualParsing,
      individualMin: Math.min(...individualParsingTimes),
      individualMax: Math.max(...individualParsingTimes),
      batchTotal: batchParsingDuration,
      averagePerPatient: avgParsingPerPatient,
      throughputPerSecond: patientsPerSecond,
      successfullyParsed: successfulParsed,
      totalPatients: 1000,
      successRate: successRate,
    },
    memory: {
      estimatedBytesPerPatient: estimatedMemoryPerPatient,
      totalKB: totalEstimatedMemory / 1024,
    },
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    library: '@ahryman40k/ts-fhir-types',
  };
}

// CLI runner
if (require.main === module) {
  runBenchmarkAndGetResults()
    .then((results) => {
      console.log('🚀 FHIR Patient Schema Benchmark Results (@ahryman40k/ts-fhir-types)');
      console.log('=====================================================================\n');

      console.log('📊 Schema Access:');
      console.log(`   Average: ${results.schemaAccess.average.toFixed(3)}ms`);
      console.log(`   Min: ${results.schemaAccess.min.toFixed(3)}ms`);
      console.log(`   Max: ${results.schemaAccess.max.toFixed(3)}ms\n`);

      console.log('📊 Parsing Performance:');
      console.log(`   Individual Average: ${results.parsing.individualAverage.toFixed(3)}ms`);
      console.log(`   Batch Total (1,000): ${results.parsing.batchTotal.toFixed(3)}ms`);
      console.log(`   Average per Patient: ${results.parsing.averagePerPatient.toFixed(3)}ms`);
      console.log(
        `   Throughput: ${results.parsing.throughputPerSecond.toFixed(0)} patients/second`,
      );
      console.log(`   Success Rate: ${results.parsing.successRate.toFixed(1)}%\n`);

      console.log('💾 Memory Usage:');
      console.log(`   Per Patient: ${results.memory.estimatedBytesPerPatient} bytes`);
      console.log(
        `   Total (${results.parsing.successfullyParsed}): ${results.memory.totalKB.toFixed(2)} KB\n`,
      );

      console.log('🔧 Environment:');
      console.log(`   Library: ${results.library}`);
      console.log(`   Node.js: ${results.nodeVersion}`);
      console.log(`   Platform: ${results.platform}`);
      console.log(`   Timestamp: ${results.timestamp}\n`);

      // Export results to JSON file
      const fs = require('fs');
      const resultsFile = 'benchmark-results.json';
      fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
      console.log(`📄 Results exported to: ${resultsFile}`);
    })
    .catch(console.error);
}
