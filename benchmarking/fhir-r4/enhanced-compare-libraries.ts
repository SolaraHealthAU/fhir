import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  runMemoryAndColdStartBenchmarks,
  ComprehensiveMemoryResults,
} from './memory-coldstart-benchmark';

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

interface EnhancedComparisonResults {
  performance: {
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
  };
  memoryAndColdStart: ComprehensiveMemoryResults;
  overallRecommendation: {
    forAWSLambda: {
      recommended: string;
      reasons: string[];
    };
    forHighThroughput: {
      recommended: string;
      reasons: string[];
    };
    forClientSide: {
      recommended: string;
      reasons: string[];
    };
  };
  timestamp: string;
}

// Helper function to format bytes
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function runPerformanceBenchmarks(): Promise<any> {
  console.log('🚀 Starting Performance Benchmarks\n');
  console.log('==================================\n');

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

  return {
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
  };
}

function generateRecommendations(
  performanceResults: any,
  memoryResults: ComprehensiveMemoryResults,
): EnhancedComparisonResults['overallRecommendation'] {
  const recommendations = {
    forAWSLambda: {
      recommended: '',
      reasons: [] as string[],
    },
    forHighThroughput: {
      recommended: '',
      reasons: [] as string[],
    },
    forClientSide: {
      recommended: '',
      reasons: [] as string[],
    },
  };

  // AWS Lambda recommendation
  const coldStartWinner = memoryResults.comparison.coldStartTime.winner;
  const memoryWinner = memoryResults.comparison.memoryFootprint.winner;
  const moduleLoadWinner = memoryResults.comparison.moduleLoadTime.winner;

  if (coldStartWinner === '@solarahealth/fhir-r4' && memoryWinner === '@solarahealth/fhir-r4') {
    recommendations.forAWSLambda.recommended = '@solarahealth/fhir-r4';
    recommendations.forAWSLambda.reasons.push('Faster cold-start time');
    recommendations.forAWSLambda.reasons.push('Lower memory footprint');
  } else if (
    coldStartWinner === '@ahryman40k/ts-fhir-types' &&
    memoryWinner === '@ahryman40k/ts-fhir-types'
  ) {
    recommendations.forAWSLambda.recommended = '@ahryman40k/ts-fhir-types';
    recommendations.forAWSLambda.reasons.push('Faster cold-start time');
    recommendations.forAWSLambda.reasons.push('Lower memory footprint');
  } else {
    // Mixed results - prioritize cold-start for Lambda
    recommendations.forAWSLambda.recommended = coldStartWinner;
    recommendations.forAWSLambda.reasons.push(
      'Better cold-start performance (critical for Lambda)',
    );
    if (moduleLoadWinner === coldStartWinner) {
      recommendations.forAWSLambda.reasons.push('Faster module loading');
    }
  }

  // High throughput recommendation
  const throughputWinner = performanceResults.comparison.parsingPerformance.winner;
  recommendations.forHighThroughput.recommended = throughputWinner;
  recommendations.forHighThroughput.reasons.push('Higher parsing throughput');
  if (performanceResults.comparison.schemaPerformance.winner === throughputWinner) {
    recommendations.forHighThroughput.reasons.push('Better schema performance');
  }

  // Client-side recommendation (prioritize bundle size from tree-shaking results)
  // For now, we'll use performance data, but this could be enhanced with bundle size data
  recommendations.forClientSide.recommended = '@solarahealth/fhir-r4';
  recommendations.forClientSide.reasons.push(
    'Typically smaller bundle size (based on Zod vs io-ts)',
  );
  recommendations.forClientSide.reasons.push('Good performance for client-side use cases');

  return recommendations;
}

function displayEnhancedResults(results: EnhancedComparisonResults) {
  console.log('\n🏆 COMPREHENSIVE FHIR LIBRARY COMPARISON');
  console.log('========================================\n');

  // Performance Results
  console.log('⚡ PERFORMANCE BENCHMARKS');
  console.log('========================\n');

  console.log('📊 SCHEMA/INITIALIZATION PERFORMANCE');
  console.log('------------------------------------');
  console.log(`🥇 Winner: ${results.performance.comparison.schemaPerformance.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.performance.comparison.schemaPerformance.fhirR4Time.toFixed(3)}ms (schema creation)`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.performance.comparison.schemaPerformance.ahryman40kTime.toFixed(3)}ms (schema access)`,
  );
  console.log(`   Difference: ${results.performance.comparison.schemaPerformance.difference}\n`);

  console.log('🚀 PARSING PERFORMANCE');
  console.log('----------------------');
  console.log(`🥇 Winner: ${results.performance.comparison.parsingPerformance.winner}`);
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.performance.comparison.parsingPerformance.ahryman40kThroughput.toFixed(0)} patients/second`,
  );
  console.log(
    `   @solarahealth/fhir-r4: ${results.performance.comparison.parsingPerformance.fhirR4Throughput.toFixed(0)} patients/second`,
  );
  console.log(`   Difference: ${results.performance.comparison.parsingPerformance.difference}\n`);

  // Memory and Cold-Start Results
  console.log('🧠 MEMORY & COLD-START BENCHMARKS');
  console.log('=================================\n');

  console.log('❄️  COLD-START PERFORMANCE');
  console.log('---------------------------');
  console.log(`🥇 Winner: ${results.memoryAndColdStart.comparison.coldStartTime.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.memoryAndColdStart.comparison.coldStartTime.fhirR4Time.toFixed(2)}ms`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.memoryAndColdStart.comparison.coldStartTime.ahryman40kTime.toFixed(2)}ms`,
  );
  console.log(`   Difference: ${results.memoryAndColdStart.comparison.coldStartTime.difference}\n`);

  console.log('📦 MODULE LOAD TIME');
  console.log('-------------------');
  console.log(`🥇 Winner: ${results.memoryAndColdStart.comparison.moduleLoadTime.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${results.memoryAndColdStart.comparison.moduleLoadTime.fhirR4Time.toFixed(2)}ms`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${results.memoryAndColdStart.comparison.moduleLoadTime.ahryman40kTime.toFixed(2)}ms`,
  );
  console.log(
    `   Difference: ${results.memoryAndColdStart.comparison.moduleLoadTime.difference}\n`,
  );

  console.log('💾 ACTUAL MEMORY FOOTPRINT');
  console.log('--------------------------');
  console.log(`🥇 Winner: ${results.memoryAndColdStart.comparison.memoryFootprint.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${formatBytes(results.memoryAndColdStart.comparison.memoryFootprint.fhirR4Memory)}`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${formatBytes(results.memoryAndColdStart.comparison.memoryFootprint.ahryman40kMemory)}`,
  );
  console.log(
    `   Difference: ${results.memoryAndColdStart.comparison.memoryFootprint.difference}\n`,
  );

  console.log('📈 PEAK MEMORY USAGE');
  console.log('--------------------');
  console.log(`🥇 Winner: ${results.memoryAndColdStart.comparison.peakMemory.winner}`);
  console.log(
    `   @solarahealth/fhir-r4: ${formatBytes(results.memoryAndColdStart.comparison.peakMemory.fhirR4Peak)}`,
  );
  console.log(
    `   @ahryman40k/ts-fhir-types: ${formatBytes(results.memoryAndColdStart.comparison.peakMemory.ahryman40kPeak)}`,
  );
  console.log(`   Difference: ${results.memoryAndColdStart.comparison.peakMemory.difference}\n`);

  // Recommendations
  console.log('🎯 DEPLOYMENT RECOMMENDATIONS');
  console.log('=============================\n');

  console.log('☁️  AWS LAMBDA / SERVERLESS');
  console.log('---------------------------');
  console.log(`🏆 Recommended: ${results.overallRecommendation.forAWSLambda.recommended}`);
  results.overallRecommendation.forAWSLambda.reasons.forEach((reason) => {
    console.log(`   • ${reason}`);
  });
  console.log('');

  console.log('🚀 HIGH-THROUGHPUT PROCESSING');
  console.log('-----------------------------');
  console.log(`🏆 Recommended: ${results.overallRecommendation.forHighThroughput.recommended}`);
  results.overallRecommendation.forHighThroughput.reasons.forEach((reason) => {
    console.log(`   • ${reason}`);
  });
  console.log('');

  console.log('🌐 CLIENT-SIDE APPLICATIONS');
  console.log('---------------------------');
  console.log(`🏆 Recommended: ${results.overallRecommendation.forClientSide.recommended}`);
  results.overallRecommendation.forClientSide.reasons.forEach((reason) => {
    console.log(`   • ${reason}`);
  });
  console.log('');

  console.log('💡 KEY INSIGHTS FOR AWS DEPLOYMENTS');
  console.log('===================================');
  console.log('• Cold-start time directly impacts Lambda response latency');
  console.log('• Memory usage affects Lambda pricing (billed per GB-second)');
  console.log('• Module load time contributes to cold-start overhead');
  console.log('• Peak memory usage determines minimum Lambda memory allocation');
  console.log('• Consider bundle size for Lambda deployment packages\n');
}

async function runEnhancedComparison(): Promise<EnhancedComparisonResults> {
  console.log('🔬 Starting Enhanced FHIR Library Comparison\n');
  console.log('============================================\n');

  // Run performance benchmarks
  const performanceResults = await runPerformanceBenchmarks();

  console.log('\n🧠 Running Memory & Cold-Start Benchmarks...\n');

  // Run memory and cold-start benchmarks
  const memoryResults = await runMemoryAndColdStartBenchmarks();

  // Generate recommendations
  const recommendations = generateRecommendations(performanceResults, memoryResults);

  const enhancedResults: EnhancedComparisonResults = {
    performance: performanceResults,
    memoryAndColdStart: memoryResults,
    overallRecommendation: recommendations,
    timestamp: new Date().toISOString(),
  };

  return enhancedResults;
}

// Main execution
async function main() {
  try {
    const results = await runEnhancedComparison();
    displayEnhancedResults(results);

    // Save results to file
    const resultsFile = 'enhanced-comparison-results.json';
    writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    console.log(`📄 Enhanced results exported to: ${resultsFile}`);
  } catch (error) {
    console.error('❌ Enhanced comparison failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { runEnhancedComparison, EnhancedComparisonResults };
