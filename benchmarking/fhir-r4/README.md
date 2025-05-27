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
├── compare-libraries.ts              # Comparison script
├── library-comparison-results.json   # Generated comparison results
├── package.json                      # Comparison script dependencies
└── README.md                         # This file
```

## 🚀 Quick Start

### Run Complete Comparison

To run benchmarks for both libraries and generate a comparison report:

```bash
# From the benchmarking/fhir-r4 directory
npm install
npm run compare
```

### Run Individual Benchmarks

To run benchmarks for individual libraries:

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
npm run benchmark

# @ahryman40k/ts-fhir-types
cd ahryman40k-ts-fhir-types
npm install
npm run benchmark
```

## 📊 What Gets Benchmarked

### Schema Performance

- **@solarahealth/fhir-r4**: Schema creation time using `createPatientSchema()`
- **@ahryman40k/ts-fhir-types**: Schema access time for `R4.RTTI_Patient`

### Parsing Performance

- **Individual parsing**: Time to validate single Patient resources (first 10 patients)
- **Batch parsing**: Time to validate 1,000 Patient resources
- **Throughput**: Patients processed per second
- **Success rate**: Percentage of successful validations

### Memory Usage

- **Per-patient memory**: Estimated bytes per validated Patient resource
- **Total memory**: Total memory usage for 1,000 patients

### Test Data

Both benchmarks use identical test data:

- 1,000 varied Patient resources
- Realistic FHIR Patient structure with:
  - Names, birth dates, gender
  - Telecom information (phone, email)
  - Addresses
  - Unique patient IDs

## 📈 Understanding the Results

### Schema Performance

- **@solarahealth/fhir-r4**: Measures dynamic schema creation overhead
- **@ahryman40k/ts-fhir-types**: Measures pre-built schema access time
- Lower times indicate better performance

### Parsing Performance

- **Throughput**: Higher values indicate better performance
- **Individual vs Batch**: Shows scalability characteristics
- **Success Rate**: Indicates validation strictness and data compatibility

### Memory Usage

- **Lower values**: More memory-efficient
- **Important for**: Large-scale processing scenarios

## 🏆 Sample Results Interpretation

```
🏆 FHIR LIBRARY COMPARISON RESULTS
==================================

📊 SCHEMA/INITIALIZATION PERFORMANCE
🥇 Winner: @ahryman40k/ts-fhir-types
   @solarahealth/fhir-r4: 0.303ms (schema creation)
   @ahryman40k/ts-fhir-types: 0.001ms (schema access)
   Difference: 99.7% faster

🚀 PARSING PERFORMANCE
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 7886 patients/second
   @ahryman40k/ts-fhir-types: 1250 patients/second
   Difference: 530.9% faster

💾 MEMORY USAGE
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 390 bytes per patient
   @ahryman40k/ts-fhir-types: 520 bytes per patient
   Difference: 25.0% less memory
```

## 🔧 Technical Details

### @solarahealth/fhir-r4

- **Validation**: Zod-based schema validation
- **Approach**: Dynamic schema creation with `createPatientSchema()`
- **Strengths**: Fast parsing, memory efficient
- **Use case**: High-throughput validation scenarios

### @ahryman40k/ts-fhir-types

- **Validation**: io-ts runtime type checking with fp-ts Either types
- **Approach**: Pre-built RTTI (Runtime Type Information) objects
- **Strengths**: Instant schema access, functional programming patterns
- **Use case**: Applications requiring detailed validation error handling

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

### Performance Variations

- Results may vary between runs due to:
  - System load
  - Node.js garbage collection
  - CPU thermal throttling
- Run multiple times for consistent results

## 📊 Output Files

- `benchmark-results.json`: Individual library results
- `library-comparison-results.json`: Side-by-side comparison
- Console output: Human-readable summary and recommendations

## 🤝 Contributing

To add benchmarks for additional FHIR libraries:

1. Create a new subdirectory following the existing pattern
2. Implement the same benchmark interface
3. Update the comparison script to include the new library
4. Add documentation for the new library's approach

## 📚 References

- [FHIR R4 Specification](https://hl7.org/fhir/R4/)
- [@solarahealth/fhir-r4 Documentation](https://www.npmjs.com/package/@solarahealth/fhir-r4)
- [@ahryman40k/ts-fhir-types Documentation](https://github.com/Ahryman40k/typescript-fhir-types)
- [Zod Documentation](https://zod.dev/)
- [io-ts Documentation](https://github.com/gcanti/io-ts)
