# @ahryman40k/ts-fhir-types Benchmark

This directory contains performance benchmarks for the `@ahryman40k/ts-fhir-types` library, which provides io-ts based FHIR R4 type definitions and runtime validation.

## Library Overview

- **Package**: [@ahryman40k/ts-fhir-types](https://www.npmjs.com/package/@ahryman40k/ts-fhir-types)
- **Validation**: io-ts runtime type checking
- **Approach**: Pre-built RTTI (Runtime Type Information) objects
- **Dependencies**: fp-ts for Either types and functional programming patterns

## Key Features Tested

### Schema Access

- Tests access time to `R4.RTTI_Patient` object
- Pre-built schemas mean instant access (no creation overhead)

### Validation

- Uses `RTTI_Patient.decode()` method
- Returns `Either<Errors, Patient>` for functional error handling
- Comprehensive FHIR R4 compliance checking

### Error Handling

- Detailed validation errors through io-ts
- Functional programming patterns with fp-ts Either types
- Left side contains validation errors, Right side contains valid data

## Running Benchmarks

```bash
# Install dependencies
npm install

# Run interactive benchmark
npm run benchmark

# Generate JSON results
npm run benchmark:results

# Run tree shaking benchmark to measure bundle sizes
npm run benchmark:tree-shaking

# Run all benchmarks (performance + tree shaking)
npm run benchmark:all
```

## Sample Usage

```typescript
import { R4 } from '@ahryman40k/ts-fhir-types';
import { either as E } from 'fp-ts';

const patientData = {
  resourceType: 'Patient',
  name: [{ given: ['John'], family: 'Doe' }],
  // ... other patient data
};

const validationResult = R4.RTTI_Patient.decode(patientData);

if (E.isLeft(validationResult)) {
  console.log('Validation errors:', validationResult.left);
} else {
  console.log('Valid patient:', validationResult.right);
}
```

## Performance Characteristics

- **Schema Access**: Extremely fast (pre-built objects)
- **Validation**: Comprehensive but slower than simpler validators
- **Memory**: Higher memory usage due to detailed type information
- **Error Reporting**: Excellent detailed error messages

## Tree Shaking Analysis

The tree shaking benchmark reveals important bundle size characteristics:

- **Best Bundle Size**: ~1,305 KB (minified with tree shaking)
- **Tree Shaking Effectiveness**: 15.0% reduction (230 KB saved)
- **Gzipped Size**: ~202 KB (production-ready)
- **Library Size Impact**: Significantly larger than schema-based alternatives

### Bundle Size Comparison

| Configuration            | Bundle Size | Gzipped | Tree Shaking Benefit |
| ------------------------ | ----------- | ------- | -------------------- |
| With Tree Shaking        | 1,305 KB    | 202 KB  | ✅ 15% smaller       |
| Without Tree Shaking     | 1,535 KB    | 261 KB  | ❌ Baseline          |
| Development (unminified) | 2,579 KB    | 172 KB  | N/A                  |

**Key Insights:**

- Tree shaking provides meaningful 15% bundle size reduction
- Large bundle size due to comprehensive FHIR type definitions
- Gzipped size is reasonable for production use
- Consider bundle size impact for client-side applications

## Use Cases

Best suited for:

- Applications requiring detailed validation error reporting
- Functional programming environments
- Scenarios where comprehensive FHIR compliance is critical
- Development environments where detailed type checking is valuable
