import { build } from 'esbuild';
import { promises as fs } from 'fs';
import path from 'path';

interface BundleResult {
  bundleSize: number;
  bundleSizeKB: number;
  gzippedSize?: number;
  gzippedSizeKB?: number;
  buildTime: number;
}

async function measureBundleSize(
  entryPoint: string,
  outputPath: string,
  options: {
    minify?: boolean;
    treeShaking?: boolean;
    format?: 'esm' | 'cjs' | 'iife';
    target?: string;
  } = {},
): Promise<BundleResult> {
  const start = performance.now();

  try {
    await build({
      entryPoints: [entryPoint],
      bundle: true,
      outfile: outputPath,
      minify: options.minify || false,
      treeShaking: options.treeShaking !== false, // Default to true
      format: options.format || 'esm',
      target: options.target || 'es2020',
      platform: 'node',
      write: true,
      metafile: true,
      mainFields: ['module', 'main'],
      conditions: ['import', 'require'],
    });

    const buildTime = performance.now() - start;

    // Read the generated bundle to measure its size
    const bundleContent = await fs.readFile(outputPath);
    const bundleSize = bundleContent.length;
    const bundleSizeKB = bundleSize / 1024;

    // Try to calculate gzipped size (optional, requires zlib)
    let gzippedSize: number | undefined;
    let gzippedSizeKB: number | undefined;

    try {
      const zlib = await import('zlib');
      const gzipped = zlib.gzipSync(bundleContent);
      gzippedSize = gzipped.length;
      gzippedSizeKB = gzippedSize / 1024;
    } catch (error) {
      console.warn('Could not calculate gzipped size:', error);
    }

    return {
      bundleSize,
      bundleSizeKB,
      gzippedSize,
      gzippedSizeKB,
      buildTime,
    };
  } catch (error) {
    console.error('Build failed:', error);
    throw error;
  }
}

async function runTreeShakingBenchmark() {
  console.log('🌳 Starting Tree Shaking Benchmark\n');

  const entryPoint = path.join(__dirname, 'tree-shaking-entry.ts');
  const outputDir = path.join(__dirname, '..', 'dist', 'tree-shaking');

  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  const scenarios = [
    {
      name: 'ESM + Tree Shaking + Minified',
      outputFile: path.join(outputDir, 'bundle-esm-minified.js'),
      options: { format: 'esm' as const, minify: true, treeShaking: true },
    },
    {
      name: 'ESM + Tree Shaking (No Minification)',
      outputFile: path.join(outputDir, 'bundle-esm-dev.js'),
      options: { format: 'esm' as const, minify: false, treeShaking: true },
    },
    {
      name: 'ESM + No Tree Shaking + Minified',
      outputFile: path.join(outputDir, 'bundle-esm-no-treeshaking.js'),
      options: { format: 'esm' as const, minify: true, treeShaking: false },
    },
    {
      name: 'CommonJS + Tree Shaking + Minified',
      outputFile: path.join(outputDir, 'bundle-cjs-minified.js'),
      options: { format: 'cjs' as const, minify: true, treeShaking: true },
    },
    {
      name: 'IIFE + Tree Shaking + Minified',
      outputFile: path.join(outputDir, 'bundle-iife-minified.js'),
      options: { format: 'iife' as const, minify: true, treeShaking: true },
    },
  ];

  const results: Array<{ scenario: string; result: BundleResult }> = [];

  for (const scenario of scenarios) {
    console.log(`📦 Building: ${scenario.name}`);

    try {
      const result = await measureBundleSize(entryPoint, scenario.outputFile, scenario.options);
      results.push({ scenario: scenario.name, result });

      console.log(`   ✅ Bundle size: ${result.bundleSizeKB.toFixed(2)} KB`);
      if (result.gzippedSizeKB) {
        console.log(`   📦 Gzipped size: ${result.gzippedSizeKB.toFixed(2)} KB`);
      }
      console.log(`   ⏱️  Build time: ${result.buildTime.toFixed(2)}ms\n`);
    } catch (error) {
      console.error(`   ❌ Failed to build ${scenario.name}:`, error);
    }
  }

  // Generate summary report
  console.log('📊 TREE SHAKING BENCHMARK RESULTS');
  console.log('=================================\n');

  console.log('| Scenario | Bundle Size | Gzipped | Build Time |');
  console.log('|----------|-------------|---------|------------|');

  for (const { scenario, result } of results) {
    const gzippedStr = result.gzippedSizeKB ? `${result.gzippedSizeKB.toFixed(2)} KB` : 'N/A';
    console.log(
      `| ${scenario.padEnd(28)} | ${result.bundleSizeKB.toFixed(2).padStart(8)} KB | ${gzippedStr.padStart(7)} | ${result.buildTime.toFixed(2).padStart(7)}ms |`,
    );
  }

  // Find the smallest bundle
  if (results.length > 0) {
    const smallestBundle = results.reduce((min, current) =>
      current.result.bundleSize < min.result.bundleSize ? current : min,
    );

    console.log(`\n🏆 Smallest bundle: ${smallestBundle.scenario}`);
    console.log(`   Size: ${smallestBundle.result.bundleSizeKB.toFixed(2)} KB`);
    if (smallestBundle.result.gzippedSizeKB) {
      console.log(`   Gzipped: ${smallestBundle.result.gzippedSizeKB.toFixed(2)} KB`);
    }
  } else {
    console.log(`\n❌ No successful builds to compare`);
  }

  // Calculate tree shaking effectiveness
  if (results.length > 0) {
    const noTreeShakingResult = results.find((r) => r.scenario.includes('No Tree Shaking'));
    const withTreeShakingResult = results.find((r) =>
      r.scenario.includes('ESM + Tree Shaking + Minified'),
    );

    if (noTreeShakingResult && withTreeShakingResult) {
      const sizeDifference =
        noTreeShakingResult.result.bundleSize - withTreeShakingResult.result.bundleSize;
      const percentageReduction = (sizeDifference / noTreeShakingResult.result.bundleSize) * 100;

      console.log(`\n🌳 Tree Shaking Effectiveness:`);
      console.log(`   Size reduction: ${(sizeDifference / 1024).toFixed(2)} KB`);
      console.log(`   Percentage reduction: ${percentageReduction.toFixed(1)}%`);
    }
  }

  // Save results to JSON file
  const resultsFile = path.join(outputDir, 'tree-shaking-results.json');
  await fs.writeFile(
    resultsFile,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        entryPoint: entryPoint,
        results: results.map((r) => ({
          scenario: r.scenario,
          bundleSize: r.result.bundleSize,
          bundleSizeKB: r.result.bundleSizeKB,
          gzippedSize: r.result.gzippedSize,
          gzippedSizeKB: r.result.gzippedSizeKB,
          buildTime: r.result.buildTime,
        })),
      },
      null,
      2,
    ),
  );

  console.log(`\n💾 Results saved to: ${resultsFile}`);
  console.log(`📁 Bundle files saved to: ${outputDir}`);
}

// Run the benchmark
runTreeShakingBenchmark().catch(console.error);
