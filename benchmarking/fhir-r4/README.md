# FHIR Library Performance Comparison

This directory contains comprehensive benchmarking tools to compare the performance of two popular FHIR R4 TypeScript libraries:

- **[@solarahealth/fhir-r4](https://www.npmjs.com/package/@solarahealth/fhir-r4)** - Zod-based FHIR validation library
- **[@ahryman40k/ts-fhir-types](https://www.npmjs.com/package/@ahryman40k/ts-fhir-types)** - io-ts based FHIR validation library

## 📁 Directory Structure

```
benchmarking/fhir-r4/
├── fhir-r4/                          # @solarahealth/fhir-r4 benchmarks
│   ├── src/
│   │   ├── benchmark.ts              # Interactive benchmark runner
│   │   └── benchmark-results.ts      # Results generator
│   ├── package.json
│   └── benchmark-results.json        # Generated results
├── ahryman40k-ts-fhir-types/         # @ahryman40k/ts-fhir-types benchmarks
│   ├── src/
│   │   ├── benchmark.ts              # Interactive benchmark runner
│   │   └── benchmark-results.ts      # Results generator
│   ├── package.json
│   └── benchmark-results.json        # Generated results
├── compare-libraries.ts              # Performance comparison script
├── compare-tree-shaking.ts           # Bundle size & tree shaking comparison
├── library-comparison-results.json   # Generated comparison results
├── package.json                      # Comparison script dependencies
└── README.md                         # This file
```

## 🚀 Quick Start

### Run Complete Comparison (Recommended)

To run all benchmarks (performance + tree shaking) and generate comprehensive reports:

```bash
# From the benchmarking/fhir-r4 directory
npm install
npm run benchmark:all
```

### Run Specific Benchmark Types

```bash
# Performance benchmarks only
npm run benchmark:performance

# Tree shaking & bundle size analysis only
npm run benchmark:tree-shaking

# Compare tree shaking results
npm run compare:tree-shaking
```

### Run Individual Library Benchmarks

```bash
# @solarahealth/fhir-r4 only
npm run benchmark:fhir-r4

# @ahryman40k/ts-fhir-types only
npm run benchmark:ahryman40k
```

### Run Interactive Benchmarks

For detailed console output during benchmarking:

```bash
# @solarahealth/fhir-r4
cd fhir-r4
npm run benchmark:all

# @ahryman40k/ts-fhir-types
cd ahryman40k-ts-fhir-types
npm run benchmark:all
```

## 📊 What Gets Benchmarked

### Performance Metrics

- **Schema Performance**: Schema creation/access time
- **Parsing Throughput**: Patients processed per second
- **Memory Usage**: Bytes per validated Patient resource
- **Success Rate**: Percentage of successful validations

### Bundle Size & Tree Shaking Analysis

- **Bundle Size**: Minified and gzipped bundle sizes
- **Tree Shaking Effectiveness**: How well unused code is eliminated
- **Build Performance**: Compilation and bundling times
- **Module Format Support**: ESM, CommonJS, IIFE compatibility

### Test Data

Both benchmarks use identical test data:

- 1,000 varied Patient resources
- Realistic FHIR Patient structure with:
  - Names, birth dates, gender
  - Telecom information (phone, email)
  - Addresses with full details
  - Unique patient identifiers

## 📈 Understanding the Results

### Performance Metrics

- **Throughput**: Higher values indicate better performance
- **Schema Performance**: Lower times indicate better initialization
- **Memory Usage**: Lower values indicate better efficiency
- **Success Rate**: Indicates validation strictness and data compatibility

### Bundle Size Impact

- **Bundle Size**: Critical for client-side applications and mobile apps
- **Gzipped Size**: Real-world network transfer size
- **Tree Shaking**: Ability to eliminate unused code in production builds

## 🏆 Latest Benchmark Results

Based on comprehensive testing, here are the current performance characteristics:

```
🏆 FHIR LIBRARY COMPARISON RESULTS
==================================

📊 SCHEMA/INITIALIZATION PERFORMANCE
🥇 Winner: @ahryman40k/ts-fhir-types
   @solarahealth/fhir-r4: 1.038ms (schema creation)
   @ahryman40k/ts-fhir-types: 0.003ms (schema access)
   Difference: 34,533% faster

🚀 PARSING PERFORMANCE
🥇 Winner: @ahryman40k/ts-fhir-types
   @ahryman40k/ts-fhir-types: 59,282 patients/second
   @solarahealth/fhir-r4: 42,649 patients/second
   Difference: 39.0% faster

💾 MEMORY USAGE
🤝 Tie: Both libraries
   @solarahealth/fhir-r4: 390 bytes per patient
   @ahryman40k/ts-fhir-types: 390 bytes per patient
   Difference: Identical efficiency

📦 BUNDLE SIZE
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 235.70 KB (46.28 KB gzipped)
   @ahryman40k/ts-fhir-types: 1,304.67 KB (201.95 KB gzipped)
   Difference: 77.7% smaller bundles
```

## 🔧 Technical Details

### @solarahealth/fhir-r4

- **Validation**: Zod-based schema validation
- **Approach**: Dynamic schema creation with `createPatientSchema()`
- **Strengths**: Excellent performance, **77.7% smaller bundles**, memory efficient
- **Use case**: Client-side applications, mobile apps, web deployments
- **Performance**: 42,649 patients/second - excellent for most use cases

### @ahryman40k/ts-fhir-types

- **Validation**: io-ts runtime type checking with fp-ts Either types
- **Approach**: Pre-built RTTI (Runtime Type Information) objects
- **Strengths**: **Maximum runtime performance**, instant schema access, functional programming patterns
- **Use case**: Server-side processing, maximum-throughput scenarios
- **Performance**: 59,282 patients/second - peak performance for high-volume processing

## 🎯 Decision Framework

### Choose @solarahealth/fhir-r4 when:

- **Bundle size is critical** (client-side applications, mobile apps)
- **Network performance matters** (77.7% smaller downloads)
- You prefer Zod's API and ecosystem
- Dynamic schema creation flexibility is needed
- Integration with existing Zod-based systems
- **Strong performance is sufficient** (42,649 patients/sec is excellent for most use cases)

### Choose @ahryman40k/ts-fhir-types when:

- **Maximum throughput is critical** (server-side processing, 59,282 patients/sec)
- **Runtime performance is the absolute priority** (39% faster parsing)
- You prefer functional programming patterns (fp-ts, io-ts)
- Detailed error reporting is important
- Bundle size is not a constraint (server-side only applications)
- You need comprehensive FHIR type coverage

### Hybrid Approach:

- **Client-side**: Use @solarahealth/fhir-r4 for smaller bundles
- **Server-side**: Use @ahryman40k/ts-fhir-types for maximum performance
- **Development**: Consider @ahryman40k/ts-fhir-types for detailed type checking
- **Production**: Evaluate based on deployment target (web vs server)

## 📝 Customizing Benchmarks

### Modifying Test Data

Edit the `samplePatientData` object in either benchmark file to test different FHIR structures.

### Changing Test Scale

Modify the patient generation loop to test with different numbers of patients:

```typescript
// Change from 1,000 to desired number
const patientDataArray = Array.from({ length: 5000 }, (_, i) => generatePatientData(i));
```

### Adding New Metrics

Extend the `BenchmarkResults` interface to include additional performance metrics.

## 🐛 Troubleshooting

### Common Issues

1. **Missing dependencies**: Run `npm install` in each subdirectory
2. **TypeScript errors**: Ensure TypeScript 5.4.5+ is installed
3. **Memory issues**: Reduce test data size for resource-constrained environments
4. **Build failures**: Check Node.js version compatibility (16+ recommended)

### Performance Variations

- Results may vary between runs due to:
  - System load
  - Node.js garbage collection
  - CPU thermal throttling
- Run multiple times for consistent results
- Tree shaking results depend on bundler configuration

## 📊 Output Files

### Performance Results

- `benchmark-results.json`: Individual library performance results
- `library-comparison-results.json`: Side-by-side performance comparison

### Tree Shaking Results

- `tree-shaking-results.json`: Bundle size and tree shaking analysis
- `dist/tree-shaking/`: Generated bundle artifacts for analysis

### Reports

- Console output: Human-readable summaries and recommendations
- Detailed metrics: JSON files for programmatic analysis

## 🤝 Contributing

To add benchmarks for additional FHIR libraries:

1. Create a new subdirectory following the existing pattern
2. Implement the same benchmark interface
3. Update the comparison scripts to include the new library
4. Add documentation for the new library's approach
5. Ensure both performance and tree shaking benchmarks are included

## 📚 References

- [FHIR R4 Specification](https://hl7.org/fhir/R4/)
- [@solarahealth/fhir-r4 Documentation](https://www.npmjs.com/package/@solarahealth/fhir-r4)
- [@ahryman40k/ts-fhir-types Documentation](https://github.com/Ahryman40k/typescript-fhir-types)
- [Zod Documentation](https://zod.dev/)
- [io-ts Documentation](https://github.com/gcanti/io-ts)
- [Tree Shaking Guide](https://webpack.js.org/guides/tree-shaking/)

## 🎉 Key Insights

**Both libraries now offer excellent performance** with different optimization focuses:

- **@ahryman40k/ts-fhir-types**: 🚀 **Maximum runtime performance** but 📦 **5.5x larger bundles**
- **@solarahealth/fhir-r4**: ⚡ **Strong performance** with 🎯 **77.7% smaller bundles**

This enables teams to make decisions primarily based on **bundle size requirements and deployment constraints** rather than performance limitations, as both libraries provide excellent validation performance for FHIR R4 resources.
