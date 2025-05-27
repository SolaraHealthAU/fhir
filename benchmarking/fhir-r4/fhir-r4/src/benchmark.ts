import { createPatientSchema } from '@solarahealth/fhir-r4';

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
  console.log('🚀 Starting FHIR Patient Schema Benchmarking\n');

  // Benchmark 1: Schema Creation Time
  console.log('📊 Benchmark 1: Schema Creation Time');
  console.log('=====================================');

  const schemaCreationResults = [];
  const numSchemaCreations = 10; // Create schema multiple times to get average

  for (let i = 0; i < numSchemaCreations; i++) {
    const { duration } = measureTime(() => createPatientSchema(), `Schema creation #${i + 1}`);
    schemaCreationResults.push(duration);
  }

  const avgSchemaCreation =
    schemaCreationResults.reduce((a, b) => a + b, 0) / schemaCreationResults.length;
  const minSchemaCreation = Math.min(...schemaCreationResults);
  const maxSchemaCreation = Math.max(...schemaCreationResults);

  console.log(`\n📈 Schema Creation Statistics:`);
  console.log(`   Average: ${avgSchemaCreation.toFixed(3)}ms`);
  console.log(`   Min: ${minSchemaCreation.toFixed(3)}ms`);
  console.log(`   Max: ${maxSchemaCreation.toFixed(3)}ms`);
  console.log(
    `   Total for ${numSchemaCreations} creations: ${schemaCreationResults.reduce((a, b) => a + b, 0).toFixed(3)}ms\n`,
  );

  // Benchmark 2: Parsing 1,000 Patients
  console.log('📊 Benchmark 2: Parsing 1,000 Patients');
  console.log('======================================');

  // Create schema once for parsing benchmark
  const { result: patientSchema, duration: schemaDuration } = measureTime(
    () => createPatientSchema(),
    'Schema creation for parsing benchmark',
  );

  // Generate 1,000 patient data objects
  console.log('\n🔄 Generating 1,000 patient data objects...');
  const patientDataArray = Array.from({ length: 1000 }, (_, i) => generatePatientData(i));
  console.log('✅ Patient data generation complete\n');

  // Benchmark individual parsing
  console.log('🔍 Individual parsing benchmark (first 10 patients):');
  const individualParsingTimes = [];
  for (let i = 0; i < Math.min(10, patientDataArray.length); i++) {
    const { duration } = measureTime(
      () => patientSchema.parse(patientDataArray[i]),
      `  Patient #${i + 1} parsing`,
    );
    individualParsingTimes.push(duration);
  }

  const avgIndividualParsing =
    individualParsingTimes.reduce((a, b) => a + b, 0) / individualParsingTimes.length;
  console.log(`\n📈 Individual Parsing Statistics (first 10):`);
  console.log(`   Average: ${avgIndividualParsing.toFixed(3)}ms per patient`);
  console.log(`   Min: ${Math.min(...individualParsingTimes).toFixed(3)}ms`);
  console.log(`   Max: ${Math.max(...individualParsingTimes).toFixed(3)}ms\n`);

  // Benchmark batch parsing of all 1,000 patients
  console.log('🚀 Batch parsing 1,000 patients...');
  const { result: parsedPatients, duration: batchParsingDuration } = measureTime(() => {
    const results = [];
    for (const patientData of patientDataArray) {
      results.push(patientSchema.parse(patientData));
    }
    return results;
  }, 'Batch parsing of 1,000 patients');

  const avgParsingPerPatient = batchParsingDuration / 1000;
  const patientsPerSecond = 1000 / (batchParsingDuration / 1000);

  console.log(`\n📈 Batch Parsing Statistics:`);
  console.log(`   Total time: ${batchParsingDuration.toFixed(3)}ms`);
  console.log(`   Average per patient: ${avgParsingPerPatient.toFixed(3)}ms`);
  console.log(`   Patients per second: ${patientsPerSecond.toFixed(0)}`);
  console.log(`   Successfully parsed: ${parsedPatients.length} patients\n`);

  // Memory usage estimation
  const estimatedMemoryPerPatient = JSON.stringify(parsedPatients[0]).length;
  const totalEstimatedMemory = estimatedMemoryPerPatient * parsedPatients.length;

  console.log(`💾 Memory Usage Estimation:`);
  console.log(`   Estimated memory per patient: ${estimatedMemoryPerPatient} bytes`);
  console.log(
    `   Total estimated memory for 1,000 patients: ${(totalEstimatedMemory / 1024).toFixed(2)} KB\n`,
  );

  // Summary
  console.log('📋 BENCHMARK SUMMARY');
  console.log('===================');
  console.log(`Schema Creation (avg): ${avgSchemaCreation.toFixed(3)}ms`);
  console.log(`Individual Parsing (avg): ${avgIndividualParsing.toFixed(3)}ms`);
  console.log(`Batch Parsing (1,000 patients): ${batchParsingDuration.toFixed(3)}ms`);
  console.log(`Throughput: ${patientsPerSecond.toFixed(0)} patients/second`);
  console.log(`Memory per patient: ~${estimatedMemoryPerPatient} bytes`);

  // Performance recommendations
  console.log('\n💡 PERFORMANCE INSIGHTS');
  console.log('=======================');
  if (avgSchemaCreation > 100) {
    console.log('⚠️  Schema creation is relatively slow - consider caching the schema');
  } else {
    console.log('✅ Schema creation performance is good');
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
}

// Run the benchmark
runBenchmark().catch(console.error);
