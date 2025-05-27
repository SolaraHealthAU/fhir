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

// Utility function to measure execution time
function measureTime<T>(fn: () => T, label: string): { result: T; duration: number } {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = end - start;
  console.log(`${label}: ${duration.toFixed(3)}ms`);
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

async function runBenchmark() {
  console.log('🚀 Starting FHIR Patient Schema Benchmarking (@ahryman40k/ts-fhir-types)\n');

  // Benchmark 1: Schema Access Time (RTTI_Patient is pre-built, so we measure access time)
  console.log('📊 Benchmark 1: Schema Access Time');
  console.log('==================================');

  const schemaAccessResults = [];
  const numSchemaAccesses = 10; // Access RTTI_Patient multiple times to get average

  for (let i = 0; i < numSchemaAccesses; i++) {
    const { duration } = measureTime(() => R4.RTTI_Patient, `Schema access #${i + 1}`);
    schemaAccessResults.push(duration);
  }

  const avgSchemaAccess =
    schemaAccessResults.reduce((a, b) => a + b, 0) / schemaAccessResults.length;
  const minSchemaAccess = Math.min(...schemaAccessResults);
  const maxSchemaAccess = Math.max(...schemaAccessResults);

  console.log(`\n📈 Schema Access Statistics:`);
  console.log(`   Average: ${avgSchemaAccess.toFixed(3)}ms`);
  console.log(`   Min: ${minSchemaAccess.toFixed(3)}ms`);
  console.log(`   Max: ${maxSchemaAccess.toFixed(3)}ms`);
  console.log(
    `   Total for ${numSchemaAccesses} accesses: ${schemaAccessResults.reduce((a, b) => a + b, 0).toFixed(3)}ms\n`,
  );

  // Benchmark 2: Parsing 1,000 Patients
  console.log('📊 Benchmark 2: Parsing 1,000 Patients');
  console.log('======================================');

  // Access RTTI_Patient once for parsing benchmark
  const { result: patientRTTI, duration: rttiDuration } = measureTime(
    () => R4.RTTI_Patient,
    'RTTI_Patient access for parsing benchmark',
  );

  // Generate 1,000 patient data objects
  console.log('\n🔄 Generating 1,000 patient data objects...');
  const patientDataArray = Array.from({ length: 1000 }, (_, i) => generatePatientData(i));
  console.log('✅ Patient data generation complete\n');

  // Benchmark individual parsing
  console.log('🔍 Individual parsing benchmark (first 10 patients):');
  const individualParsingTimes = [];
  const individualResults = [];

  for (let i = 0; i < Math.min(10, patientDataArray.length); i++) {
    const { result, duration } = measureTime(
      () => patientRTTI.decode(patientDataArray[i]),
      `  Patient #${i + 1} parsing`,
    );
    individualParsingTimes.push(duration);
    individualResults.push(result);
  }

  const avgIndividualParsing =
    individualParsingTimes.reduce((a, b) => a + b, 0) / individualParsingTimes.length;
  console.log(`\n📈 Individual Parsing Statistics (first 10):`);
  console.log(`   Average: ${avgIndividualParsing.toFixed(3)}ms per patient`);
  console.log(`   Min: ${Math.min(...individualParsingTimes).toFixed(3)}ms`);
  console.log(`   Max: ${Math.max(...individualParsingTimes).toFixed(3)}ms`);

  // Check validation results
  const successfulIndividual = individualResults.filter((result) => E.isRight(result)).length;
  console.log(`   Successful validations: ${successfulIndividual}/10\n`);

  // Benchmark batch parsing of all 1,000 patients
  console.log('🚀 Batch parsing 1,000 patients...');
  const { result: batchResults, duration: batchParsingDuration } = measureTime(() => {
    const results = [];
    for (const patientData of patientDataArray) {
      results.push(patientRTTI.decode(patientData));
    }
    return results;
  }, 'Batch parsing of 1,000 patients');

  const successfulParsed = batchResults.filter((result) => E.isRight(result)).length;
  const avgParsingPerPatient = batchParsingDuration / 1000;
  const patientsPerSecond = 1000 / (batchParsingDuration / 1000);

  console.log(`\n📈 Batch Parsing Statistics:`);
  console.log(`   Total time: ${batchParsingDuration.toFixed(3)}ms`);
  console.log(`   Average per patient: ${avgParsingPerPatient.toFixed(3)}ms`);
  console.log(`   Patients per second: ${patientsPerSecond.toFixed(0)}`);
  console.log(`   Successfully parsed: ${successfulParsed} patients`);
  console.log(`   Failed validations: ${1000 - successfulParsed} patients\n`);

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

  console.log(`💾 Memory Usage Estimation:`);
  console.log(`   Estimated memory per patient: ${estimatedMemoryPerPatient} bytes`);
  console.log(
    `   Total estimated memory for ${successfulResults.length} patients: ${(totalEstimatedMemory / 1024).toFixed(2)} KB\n`,
  );

  // Summary
  console.log('📋 BENCHMARK SUMMARY');
  console.log('===================');
  console.log(`Schema Access (avg): ${avgSchemaAccess.toFixed(3)}ms`);
  console.log(`Individual Parsing (avg): ${avgIndividualParsing.toFixed(3)}ms`);
  console.log(`Batch Parsing (1,000 patients): ${batchParsingDuration.toFixed(3)}ms`);
  console.log(`Throughput: ${patientsPerSecond.toFixed(0)} patients/second`);
  console.log(`Success Rate: ${((successfulParsed / 1000) * 100).toFixed(1)}%`);
  console.log(`Memory per patient: ~${estimatedMemoryPerPatient} bytes`);

  // Performance recommendations
  console.log('\n💡 PERFORMANCE INSIGHTS');
  console.log('=======================');
  if (avgSchemaAccess > 1) {
    console.log('⚠️  Schema access is relatively slow - consider caching the RTTI object');
  } else {
    console.log('✅ Schema access performance is excellent');
  }

  if (avgParsingPerPatient > 1) {
    console.log('⚠️  Individual parsing is relatively slow - consider batch processing');
  } else {
    console.log('✅ Individual parsing performance is good');
  }

  if (patientsPerSecond < 1000) {
    console.log('⚠️  Consider optimizing for higher throughput if processing large datasets');
  } else {
    console.log('✅ Excellent throughput for batch processing');
  }

  if (successfulParsed < 1000) {
    console.log(`⚠️  ${1000 - successfulParsed} validation failures detected - check data quality`);
  } else {
    console.log('✅ All validations successful');
  }
}

// Run the benchmark
runBenchmark().catch(console.error);
