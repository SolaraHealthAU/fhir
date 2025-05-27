import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface BenchmarkResults {
  schemaCreation?: {
    average: number;
    min: number;
    max: number;
    samples: number[];
  };
  schemaAccess?: {
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
    successRate?: number;
  };
  memory: {
    estimatedBytesPerPatient: number;
    totalKB: number;
  };
  timestamp: string;
  nodeVersion: string;
  platform: string;
  library?: string;
}

interface ComparisonResults {
  fhirR4: BenchmarkResults;
  ahryman40k: BenchmarkResults;
  comparison: {
    schemaPerformance: {
      winner: string;
      fhirR4Time: number;
      ahryman40kTime: number;
      difference: string;
    };
    parsingPerformance: {
      winner: string;
      fhirR4Throughput: number;
      ahryman40kThroughput: number;
      difference: string;
    };
    memoryUsage: {
      winner: string;
      fhirR4Memory: number;
      ahryman40kMemory: number;
      difference: string;
    };
    successRate: {
      fhirR4Rate: number;
      ahryman40kRate: number;
      winner: string;
    };
  };
  timestamp: string;
}

async function runBenchmarks(): Promise<ComparisonResults> {
  console.log('🚀 Starting FHIR Library Comparison Benchmark\n');
  console.log('==============================================\n');

  // Run fhir-r4 benchmark
  console.log('📊 Running @solarahealth/fhir-r4 benchmark...');
  try {
    execSync('npm run benchmark:results', {
      cwd: join(__dirname, 'fhir-r4'),
      stdio: 'inherit',
    });
  } catch (error) {
    console.error('Error running fhir-r4 benchmark:', error);
    throw error;
  }

  // Run ahryman40k benchmark
  console.log('\n📊 Running @ahryman40k/ts-fhir-types benchmark...');
  try {
    execSync('npm install', {
      cwd: join(__dirname, 'ahryman40k-ts-fhir-types'),
      stdio: 'inherit',
    });
    execSync('npm run benchmark:results', {
      cwd: join(__dirname, 'ahryman40k-ts-fhir-types'),
      stdio: 'inherit',
    });
  } catch (error) {
    console.error('Error running ahryman40k benchmark:', error);
    throw error;
  }

  // Read results
  const fhirR4Results: BenchmarkResults = JSON.parse(
    readFileSync(join(__dirname, 'fhir-r4', 'benchmark-results.json'), 'utf-8'),
  );

  const ahryman40kResults: BenchmarkResults = JSON.parse(
    readFileSync(join(__dirname, 'ahryman40k-ts-fhir-types', 'benchmark-results.json'), 'utf-8'),
  );

  // Calculate comparisons
  const schemaFhirR4Time = fhirR4Results.schemaCreation?.average || 0;
  const schemaAhryman40kTime = ahryman40kResults.schemaAccess?.average || 0;
  const schemaWinner =
    schemaFhirR4Time < schemaAhryman40kTime ? '@solarahealth/fhir-r4' : '@ahryman40k/ts-fhir-types';
  const schemaDifference =
    schemaFhirR4Time < schemaAhryman40kTime
      ? `${(((schemaAhryman40kTime - schemaFhirR4Time) / schemaFhirR4Time) * 100).toFixed(1)}% faster`
      : `${(((schemaFhirR4Time - schemaAhryman40kTime) / schemaAhryman40kTime) * 100).toFixed(1)}% faster`;

  const parsingWinner =
    fhirR4Results.parsing.throughputPerSecond > ahryman40kResults.parsing.throughputPerSecond
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';
  const parsingDifference =
    fhirR4Results.parsing.throughputPerSecond > ahryman40kResults.parsing.throughputPerSecond
      ? `${(((fhirR4Results.parsing.throughputPerSecond - ahryman40kResults.parsing.throughputPerSecond) / ahryman40kResults.parsing.throughputPerSecond) * 100).toFixed(1)}% faster`
      : `${(((ahryman40kResults.parsing.throughputPerSecond - fhirR4Results.parsing.throughputPerSecond) / fhirR4Results.parsing.throughputPerSecond) * 100).toFixed(1)}% faster`;

  const memoryWinner =
    fhirR4Results.memory.estimatedBytesPerPatient <
    ahryman40kResults.memory.estimatedBytesPerPatient
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';
  const memoryDifference =
    fhirR4Results.memory.estimatedBytesPerPatient <
    ahryman40kResults.memory.estimatedBytesPerPatient
      ? `${(((ahryman40kResults.memory.estimatedBytesPerPatient - fhirR4Results.memory.estimatedBytesPerPatient) / fhirR4Results.memory.estimatedBytesPerPatient) * 100).toFixed(1)}% less memory`
      : `${(((fhirR4Results.memory.estimatedBytesPerPatient - ahryman40kResults.memory.estimatedBytesPerPatient) / ahryman40kResults.memory.estimatedBytesPerPatient) * 100).toFixed(1)}% less memory`;

  const fhirR4SuccessRate =
    (fhirR4Results.parsing.successfullyParsed / fhirR4Results.parsing.totalPatients) * 100;
  const ahryman40kSuccessRate =
    ahryman40kResults.parsing.successRate ||
    (ahryman40kResults.parsing.successfullyParsed / ahryman40kResults.parsing.totalPatients) * 100;
  const successWinner =
    fhirR4SuccessRate >= ahryman40kSuccessRate
      ? '@solarahealth/fhir-r4'
      : '@ahryman40k/ts-fhir-types';

  const comparisonResults: ComparisonResults = {
    fhirR4: fhirR4Results,
    ahryman40k: ahryman40kResults,
    comparison: {
      schemaPerformance: {
        winner: schemaWinner,
        fhirR4Time: schemaFhirR4Time,
        ahryman40kTime: schemaAhryman40kTime,
        difference: schemaDifference,
      },
      parsingPerformance: {
        winner: parsingWinner,
        fhirR4Throughput: fhirR4Results.parsing.throughputPerSecond,
        ahryman40kThroughput: ahryman40kResults.parsing.throughputPerSecond,
        difference: parsingDifference,
      },
      memoryUsage: {
        winner: memoryWinner,
        fhirR4Memory: fhirR4Results.memory.estimatedBytesPerPatient,
        ahryman40kMemory: ahryman40kResults.memory.estimatedBytesPerPatient,
        difference: memoryDifference,
      },
      successRate: {
        fhirR4Rate: fhirR4SuccessRate,
        ahryman40kRate: ahryman40kSuccessRate,
        winner: successWinner,
      },
    },
    timestamp: new Date().toISOString(),
  };

  return comparisonResults;
}

function displayResults(results: ComparisonResults) {
  console.log('\n🏆 FHIR LIBRARY COMPARISON RESULTS');
  console.log('==================================\n');

  console.log('📊 SCHEMA/INITIALIZATION PERFORMANCE');
  console.log('------------------------------------');
  console.log(`🥇 Winner: ${results.comparison.schemaPerformance.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.comparison.schemaPerformance.fhirR4Time.toFixed(3)}ms (schema creation)`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.comparison.schemaPerformance.ahryman40kTime.toFixed(3)}ms (schema access)`,
  );
  console.log(`   Difference: ${results.comparison.schemaPerformance.difference}\n`);

  console.log('🚀 PARSING PERFORMANCE');
  console.log('----------------------');
  console.log(`🥇 Winner: ${results.comparison.parsingPerformance.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.comparison.parsingPerformance.fhirR4Throughput.toFixed(0)} patients/second`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.comparison.parsingPerformance.ahryman40kThroughput.toFixed(0)} patients/second`,
  );
  console.log(`   Difference: ${results.comparison.parsingPerformance.difference}\n`);

  console.log('💾 MEMORY USAGE');
  console.log('---------------');
  console.log(`🥇 Winner: ${results.comparison.memoryUsage.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.comparison.memoryUsage.fhirR4Memory} bytes per patient`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.comparison.memoryUsage.ahryman40kMemory} bytes per patient`,
  );
  console.log(`   Difference: ${results.comparison.memoryUsage.difference}\n`);

  console.log('✅ SUCCESS RATE');
  console.log('---------------');
  console.log(`🥇 Winner: ${results.comparison.successRate.winner}`);
  console.log(`   @solarahealth/fhir-r4: ${results.comparison.successRate.fhirR4Rate.toFixed(1)}%`);
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.comparison.successRate.ahryman40kRate.toFixed(1)}%\n`,
  );

  console.log('📋 DETAILED COMPARISON');
  console.log('======================');
  console.log('Individual Parsing Times:');
  console.log(
    `   @solarahealth/fhir-r4: ${results.fhirR4.parsing.individualAverage.toFixed(3)}ms avg`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.ahryman40k.parsing.individualAverage.toFixed(3)}ms avg\n`,
  );

  console.log('Batch Processing Times:');
  console.log(`   @solarahealth/fhir-r4: ${results.fhirR4.parsing.batchTotal.toFixed(3)}ms total`);
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.ahryman40k.parsing.batchTotal.toFixed(3)}ms total\n`,
  );

  console.log('💡 RECOMMENDATIONS');
  console.log('==================');

  if (results.comparison.schemaPerformance.winner === '@solarahealth/fhir-r4') {
    console.log('🔧 Schema Performance: @solarahealth/fhir-r4 has faster schema creation');
  } else {
    console.log('🔧 Schema Performance: @ahryman40k/ts-fhir-types has faster schema access');
  }

  if (results.comparison.parsingPerformance.winner === '@solarahealth/fhir-r4') {
    console.log(
      '⚡ Parsing Performance: @solarahealth/fhir-r4 is better for high-throughput scenarios',
    );
  } else {
    console.log(
      '⚡ Parsing Performance: @ahryman40k/ts-fhir-types is better for high-throughput scenarios',
    );
  }

  if (results.comparison.memoryUsage.winner === '@solarahealth/fhir-r4') {
    console.log('💾 Memory Efficiency: @solarahealth/fhir-r4 uses less memory per patient');
  } else {
    console.log('💾 Memory Efficiency: @ahryman40k/ts-fhir-types uses less memory per patient');
  }

  if (
    results.comparison.successRate.fhirR4Rate === 100 &&
    results.comparison.successRate.ahryman40kRate === 100
  ) {
    console.log('✅ Validation: Both libraries have perfect validation success rates');
  } else if (results.comparison.successRate.winner === '@solarahealth/fhir-r4') {
    console.log('✅ Validation: @solarahealth/fhir-r4 has better validation success rate');
  } else {
    console.log('✅ Validation: @ahryman40k/ts-fhir-types has better validation success rate');
  }

  console.log('\n🎯 OVERALL RECOMMENDATION');
  console.log('=========================');

  const fhirR4Wins = [
    results.comparison.schemaPerformance.winner === '@solarahealth/fhir-r4',
    results.comparison.parsingPerformance.winner === '@solarahealth/fhir-r4',
    results.comparison.memoryUsage.winner === '@solarahealth/fhir-r4',
    results.comparison.successRate.winner === '@solarahealth/fhir-r4',
  ].filter(Boolean).length;

  const ahryman40kWins = 4 - fhirR4Wins;

  if (fhirR4Wins > ahryman40kWins) {
    console.log('🏆 @solarahealth/fhir-r4 wins overall with better performance in most categories');
  } else if (ahryman40kWins > fhirR4Wins) {
    console.log(
      '🏆 @ahryman40k/ts-fhir-types wins overall with better performance in most categories',
    );
  } else {
    console.log('🤝 Both libraries perform similarly - choose based on your specific needs:');
    console.log('   - @solarahealth/fhir-r4: Better for Zod-based validation and type safety');
    console.log('   - @ahryman40k/ts-fhir-types: Better for io-ts runtime type checking');
  }
}

// Main execution
if (require.main === module) {
  runBenchmarks()
    .then((results) => {
      displayResults(results);

      // Save comparison results
      const resultsFile = 'library-comparison-results.json';
      writeFileSync(resultsFile, JSON.stringify(results, null, 2));
      console.log(`\n📄 Detailed comparison results saved to: ${resultsFile}`);
    })
    .catch((error) => {
      console.error('❌ Benchmark comparison failed:', error);
      process.exit(1);
    });
}
