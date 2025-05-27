# FHIR Patient Schema Benchmarking

This project benchmarks the performance of the `@solarahealth/fhir-r4` Patient schema creation and parsing operations.

## Overview

The benchmark measures two key performance metrics:

1. **Schema Creation Time** - How long it takes to create a Patient schema
2. **Patient Parsing Time** - How long it takes to parse and validate 1,000 patient records

## Quick Start

```bash
# Run the interactive benchmark with detailed output
npm run benchmark

# Run the benchmark and export results to JSON
npm run benchmark:results

# Run the tree shaking benchmark to measure bundle sizes
npm run benchmark:tree-shaking

# Run all benchmarks (performance + tree shaking)
npm run benchmark:all
```

## Benchmark Results

### Latest Results (Node.js v18.20.3, macOS)

| Metric                             | Value                 |
| ---------------------------------- | --------------------- |
| **Schema Creation (avg)**          | 0.303ms               |
| **Individual Parsing (avg)**       | 0.479ms               |
| **Batch Parsing (1,000 patients)** | 126.807ms             |
| **Throughput**                     | 7,886 patients/second |
| **Memory per Patient**             | 390 bytes             |
| **Total Memory (1,000 patients)**  | 380.86 KB             |

### Performance Insights

✅ **Schema Creation Performance**: Excellent (< 1ms average)

- First creation: ~1.4ms (includes initial setup)
- Subsequent creations: ~0.1-0.4ms
- **Recommendation**: Schema creation is fast enough for most use cases

✅ **Individual Parsing Performance**: Good (< 0.5ms average)

- Range: 0.2ms - 1.5ms per patient
- **Recommendation**: Suitable for real-time validation

✅ **Batch Processing Performance**: Excellent (7,886 patients/second)

- Average: 0.127ms per patient in batch mode
- **Recommendation**: Ideal for bulk data processing

## Test Data

The benchmark uses realistic FHIR Patient data including:

- Patient demographics (name, birthDate, gender)
- Contact information (telecom)
- Address information
- Various patient identifiers

Sample patient data is varied across 1,000 records with different:

- Names and family names
- Birth dates (1950-1999)
- Genders (male, female, other, unknown)
- Unique patient IDs

## Scripts

### `npm run benchmark`

Runs the comprehensive benchmark with detailed console output including:

- Individual schema creation timings
- Individual patient parsing timings (first 10)
- Batch processing statistics
- Memory usage estimates
- Performance recommendations

### `npm run benchmark:results`

Runs the benchmark and exports structured results to `benchmark-results.json` for:

- Automated performance monitoring
- Historical performance tracking
- Integration with CI/CD pipelines

### `npm run benchmark:tree-shaking`

Runs the tree shaking benchmark to measure bundle sizes with different build configurations:

- ESM + Tree Shaking + Minified
- ESM + Tree Shaking (No Minification)
- ESM + No Tree Shaking + Minified
- CommonJS + Tree Shaking + Minified
- IIFE + Tree Shaking + Minified

This benchmark helps assess:

- How effectively tree shaking reduces bundle size
- Impact of different module formats on bundle size
- Comparison between minified and non-minified builds
- Gzipped bundle sizes for real-world deployment scenarios

### `npm run benchmark:all`

Runs both the performance benchmark and tree shaking benchmark in sequence for comprehensive analysis.

## Output Files

### `benchmark-results.json`

Contains structured benchmark data:

```json
{
  "schemaCreation": {
    "average": 0.303,
    "min": 0.110,
    "max": 1.407,
    "samples": [...]
  },
  "parsing": {
    "individualAverage": 0.479,
    "batchTotal": 126.807,
    "throughputPerSecond": 7886,
    "successfullyParsed": 1000
  },
  "memory": {
    "estimatedBytesPerPatient": 390,
    "totalKB": 380.86
  },
  "timestamp": "2025-05-27T03:03:15.383Z",
  "nodeVersion": "v18.20.3",
  "platform": "darwin"
}
```

### `dist/tree-shaking/`

Contains tree shaking benchmark results:

- **Bundle files**: Various optimized JavaScript bundles (ESM, CommonJS, IIFE)
- **`tree-shaking-results.json`**: Structured results with bundle sizes, build times, and tree shaking effectiveness

Example tree shaking results:

```json
{
  "timestamp": "2025-01-27T12:00:00.000Z",
  "entryPoint": "/path/to/tree-shaking-entry.ts",
  "results": [
    {
      "scenario": "ESM + Tree Shaking + Minified",
      "bundleSize": 45231,
      "bundleSizeKB": 44.17,
      "gzippedSize": 12456,
      "gzippedSizeKB": 12.16,
      "buildTime": 23.45
    }
  ]
}
```

## Performance Considerations

### When to Cache Schemas

- Schema creation is fast (< 1ms), but if you're processing thousands of patients, consider caching the schema
- First schema creation includes initialization overhead (~1.4ms)
- Subsequent creations are much faster (~0.1-0.4ms)

### Batch vs Individual Processing

- **Individual processing**: ~0.479ms per patient
- **Batch processing**: ~0.127ms per patient (3.8x faster)
- **Recommendation**: Use batch processing for bulk operations

### Memory Usage

- Each parsed patient uses approximately 390 bytes
- 1,000 patients use ~381 KB total memory
- Memory usage scales linearly with patient count

## Environment

- **Node.js**: v18.20.3
- **Platform**: macOS (darwin)
- **TypeScript**: 5.4.5
- **Runtime**: esbuild-runner for fast TypeScript execution

## Dependencies

- `@solarahealth/fhir-r4`: FHIR R4 schema validation
- `esbuild-runner`: Fast TypeScript execution
- `typescript`: TypeScript compiler

## Contributing

To add new benchmarks or modify existing ones:

1. Update the benchmark scripts in `src/`
2. Run the benchmarks to verify functionality
3. Update this README with new results
4. Commit the updated `benchmark-results.json`
