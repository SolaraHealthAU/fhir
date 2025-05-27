import { promises as fs } from 'fs';
import path from 'path';

interface TreeShakingResult {
  scenario: string;
  bundleSize: number;
  bundleSizeKB: number;
  gzippedSize?: number;
  gzippedSizeKB?: number;
  buildTime: number;
}

interface TreeShakingResults {
  timestamp: string;
  library?: string;
  entryPoint: string;
  results: TreeShakingResult[];
}

async function loadResults(filePath: string): Promise<TreeShakingResults | null> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Could not load results from ${filePath}:`, error);
    return null;
  }
}

async function compareTreeShakingResults() {
  console.log('🔍 FHIR Library Tree Shaking Comparison\n');
  console.log('========================================\n');

  // Load results from both libraries
  const solaraResults = await loadResults(
    path.join(__dirname, 'fhir-r4', 'dist', 'tree-shaking', 'tree-shaking-results.json'),
  );
  const ahrymanResults = await loadResults(
    path.join(
      __dirname,
      'ahryman40k-ts-fhir-types',
      'dist',
      'tree-shaking',
      'tree-shaking-results.json',
    ),
  );

  if (!solaraResults || !ahrymanResults) {
    console.error('❌ Could not load results from one or both libraries');
    console.log('Please run the tree shaking benchmarks first:');
    console.log('  cd fhir-r4 && npm run benchmark:tree-shaking');
    console.log('  cd ahryman40k-ts-fhir-types && npm run benchmark:tree-shaking');
    return;
  }

  console.log('📊 Bundle Size Comparison (Minified + Tree Shaking)\n');

  // Find the best results for each library
  const solaraBest = solaraResults.results.find(
    (r) =>
      r.scenario.includes('Tree Shaking + Minified') && !r.scenario.includes('No Tree Shaking'),
  );
  const ahrymanBest = ahrymanResults.results.find(
    (r) =>
      r.scenario.includes('Tree Shaking + Minified') && !r.scenario.includes('No Tree Shaking'),
  );

  if (!solaraBest || !ahrymanBest) {
    console.error('❌ Could not find comparable results');
    return;
  }

  // Create comparison table
  console.log('| Library | Bundle Size | Gzipped | Build Time | Tree Shaking Effectiveness |');
  console.log('|---------|-------------|---------|------------|---------------------------|');

  // Calculate tree shaking effectiveness for each library
  const solaraNoTreeShaking = solaraResults.results.find((r) =>
    r.scenario.includes('No Tree Shaking'),
  );
  const ahrymanNoTreeShaking = ahrymanResults.results.find((r) =>
    r.scenario.includes('No Tree Shaking'),
  );

  const solaraTreeShakingEffect = solaraNoTreeShaking
    ? (
        ((solaraNoTreeShaking.bundleSize - solaraBest.bundleSize) /
          solaraNoTreeShaking.bundleSize) *
        100
      ).toFixed(1) + '%'
    : 'N/A';

  const ahrymanTreeShakingEffect = ahrymanNoTreeShaking
    ? (
        ((ahrymanNoTreeShaking.bundleSize - ahrymanBest.bundleSize) /
          ahrymanNoTreeShaking.bundleSize) *
        100
      ).toFixed(1) + '%'
    : 'N/A';

  console.log(
    `| @solarahealth/fhir-r4 | ${solaraBest.bundleSizeKB.toFixed(2)} KB | ${solaraBest.gzippedSizeKB?.toFixed(2) || 'N/A'} KB | ${solaraBest.buildTime.toFixed(0)}ms | ${solaraTreeShakingEffect} |`,
  );
  console.log(
    `| @ahryman40k/ts-fhir-types | ${ahrymanBest.bundleSizeKB.toFixed(2)} KB | ${ahrymanBest.gzippedSizeKB?.toFixed(2) || 'N/A'} KB | ${ahrymanBest.buildTime.toFixed(0)}ms | ${ahrymanTreeShakingEffect} |`,
  );

  // Calculate size differences
  const bundleSizeDiff = ahrymanBest.bundleSize - solaraBest.bundleSize;
  const gzippedSizeDiff =
    ahrymanBest.gzippedSize && solaraBest.gzippedSize
      ? ahrymanBest.gzippedSize - solaraBest.gzippedSize
      : null;

  console.log('\n📈 Key Insights\n');
  console.log('===============\n');

  console.log(
    `🎯 **Bundle Size Winner**: ${solaraBest.bundleSize < ahrymanBest.bundleSize ? '@solarahealth/fhir-r4' : '@ahryman40k/ts-fhir-types'}`,
  );
  console.log(
    `   Size difference: ${Math.abs(bundleSizeDiff / 1024).toFixed(2)} KB (${((Math.abs(bundleSizeDiff) / Math.max(solaraBest.bundleSize, ahrymanBest.bundleSize)) * 100).toFixed(1)}% ${bundleSizeDiff > 0 ? 'smaller' : 'larger'})\n`,
  );

  if (gzippedSizeDiff !== null) {
    console.log(
      `📦 **Gzipped Size Winner**: ${solaraBest.gzippedSize! < ahrymanBest.gzippedSize! ? '@solarahealth/fhir-r4' : '@ahryman40k/ts-fhir-types'}`,
    );
    console.log(
      `   Gzipped difference: ${Math.abs(gzippedSizeDiff / 1024).toFixed(2)} KB (${((Math.abs(gzippedSizeDiff) / Math.max(solaraBest.gzippedSize!, ahrymanBest.gzippedSize!)) * 100).toFixed(1)}% ${gzippedSizeDiff > 0 ? 'smaller' : 'larger'})\n`,
    );
  }

  console.log(`🌳 **Tree Shaking Effectiveness**:`);
  console.log(`   @solarahealth/fhir-r4: ${solaraTreeShakingEffect} reduction`);
  console.log(`   @ahryman40k/ts-fhir-types: ${ahrymanTreeShakingEffect} reduction\n`);

  console.log(`⚡ **Build Performance**:`);
  console.log(`   @solarahealth/fhir-r4: ${solaraBest.buildTime.toFixed(0)}ms`);
  console.log(`   @ahryman40k/ts-fhir-types: ${ahrymanBest.buildTime.toFixed(0)}ms\n`);

  // Detailed scenario comparison
  console.log('📋 Detailed Scenario Comparison\n');
  console.log('===============================\n');

  const scenarios = [
    'ESM + Tree Shaking + Minified',
    'ESM + Tree Shaking (No Minification)',
    'ESM + No Tree Shaking + Minified',
  ];

  for (const scenario of scenarios) {
    const solaraResult = solaraResults.results.find((r) => r.scenario === scenario);
    const ahrymanResult = ahrymanResults.results.find((r) => r.scenario === scenario);

    if (solaraResult && ahrymanResult) {
      console.log(`**${scenario}**`);
      console.log(`| Library | Bundle Size | Gzipped | Build Time |`);
      console.log(`|---------|-------------|---------|------------|`);
      console.log(
        `| @solarahealth/fhir-r4 | ${solaraResult.bundleSizeKB.toFixed(2)} KB | ${solaraResult.gzippedSizeKB?.toFixed(2) || 'N/A'} KB | ${solaraResult.buildTime.toFixed(0)}ms |`,
      );
      console.log(
        `| @ahryman40k/ts-fhir-types | ${ahrymanResult.bundleSizeKB.toFixed(2)} KB | ${ahrymanResult.gzippedSizeKB?.toFixed(2) || 'N/A'} KB | ${ahrymanResult.buildTime.toFixed(0)}ms |`,
      );
      console.log('');
    }
  }

  // Recommendations
  console.log('💡 Recommendations\n');
  console.log('==================\n');

  if (solaraBest.bundleSize < ahrymanBest.bundleSize) {
    console.log('✅ **For Bundle Size**: Choose @solarahealth/fhir-r4');
    console.log(
      `   - ${((1 - solaraBest.bundleSize / ahrymanBest.bundleSize) * 100).toFixed(1)}% smaller bundle`,
    );
    console.log(`   - Better for client-side applications\n`);
  } else {
    console.log('✅ **For Bundle Size**: Choose @ahryman40k/ts-fhir-types');
    console.log(
      `   - ${((1 - ahrymanBest.bundleSize / solaraBest.bundleSize) * 100).toFixed(1)}% smaller bundle\n`,
    );
  }

  const solaraTreeShakingNum = parseFloat(solaraTreeShakingEffect.replace('%', ''));
  const ahrymanTreeShakingNum = parseFloat(ahrymanTreeShakingEffect.replace('%', ''));

  if (solaraTreeShakingNum > ahrymanTreeShakingNum) {
    console.log('🌳 **For Tree Shaking**: @solarahealth/fhir-r4 has better tree shaking');
  } else {
    console.log('🌳 **For Tree Shaking**: @ahryman40k/ts-fhir-types has better tree shaking');
  }
  console.log(`   - More effective at eliminating unused code\n`);

  console.log('🎯 **Overall**: Consider your priorities:');
  console.log('   - **Smaller bundles**: Choose the library with smaller bundle size');
  console.log(
    '   - **Better tree shaking**: Choose the library with higher tree shaking effectiveness',
  );
  console.log(
    '   - **Build performance**: Consider build time differences for your CI/CD pipeline',
  );
}

// Run the comparison
compareTreeShakingResults().catch(console.error);
