# Memory & Cold-Start Benchmarking for FHIR Libraries

This document describes the enhanced benchmarking capabilities that measure memory footprint and cold-start performance - critical metrics for AWS Lambda and serverless deployments.

## 🧠 What's New

The benchmarking suite now includes comprehensive memory and cold-start analysis:

- **Actual Memory Usage**: Real heap usage measurements using `process.memoryUsage()`
- **Cold-Start Time**: Total time from process start to first successful operation
- **Module Load Time**: Time to require/import the libraries
- **Peak Memory Usage**: Maximum memory consumption during batch operations
- **AWS Lambda Recommendations**: Deployment guidance based on performance characteristics

## 🚀 Quick Start

### Run Enhanced Comparison (Recommended)

This runs all benchmarks (performance + memory + cold-start) and provides comprehensive AWS deployment recommendations:

```bash
npm run benchmark:all-enhanced
```

### Run Memory & Cold-Start Only

```bash
npm run benchmark:memory-esr
```

### Run Individual Components

```bash
# Performance benchmarks only
npm run benchmark:performance

# Tree shaking analysis only
npm run benchmark:tree-shaking

# Memory and cold-start only
npm run benchmark:memory-esr
```

## 📊 What Gets Measured

### Memory Metrics

- **RSS (Resident Set Size)**: Total memory allocated to the process
- **Heap Total**: Total heap allocated by V8
- **Heap Used**: Actual heap memory in use
- **External**: Memory used by C++ objects bound to JavaScript objects
- **Array Buffers**: Memory allocated for ArrayBuffers and SharedArrayBuffers
- **Peak Memory**: Maximum heap usage during batch operations

### Cold-Start Metrics

- **Module Load Time**: Time to `require()` or `import` the library
- **First Operation Time**: Time to create schema and parse first patient
- **Total Cold-Start Time**: Complete time from process start to operation completion
- **Process Overhead**: Time spent in process initialization

### AWS Lambda Implications

- **Cold-start latency**: Directly impacts response time for first request
- **Memory pricing**: AWS charges per GB-second of memory allocation
- **Minimum memory**: Peak usage determines minimum Lambda memory setting
- **Bundle size**: Affects deployment package size and cold-start time

## 🎯 Understanding the Results

### Memory Footprint Comparison

```
💾 ACTUAL MEMORY FOOTPRINT
--------------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 2.15 MB
   @ahryman40k/ts-fhir-types: 3.42 MB
   Difference: 37.2% less memory
```

**What this means:**

- Lower memory usage reduces AWS Lambda costs
- Smaller footprint allows for lower memory allocation settings
- Better performance in memory-constrained environments

### Cold-Start Performance

```
❄️  COLD-START PERFORMANCE
---------------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 45.23ms
   @ahryman40k/ts-fhir-types: 67.89ms
   Difference: 33.4% faster
```

**What this means:**

- Faster cold-starts improve user experience
- Reduces latency for first Lambda invocation
- Critical for infrequently called functions

### Module Load Time

```
📦 MODULE LOAD TIME
-------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 12.45ms
   @ahryman40k/ts-fhir-types: 23.67ms
   Difference: 47.4% faster
```

**What this means:**

- Faster module loading contributes to better cold-start performance
- Indicates more efficient library initialization
- Important for Lambda functions with many dependencies

## 🏗️ Technical Implementation

### Isolated Process Benchmarking

Each library is benchmarked in a completely isolated Node.js process to ensure:

- **Clean Memory State**: No interference from previous operations
- **Accurate Cold-Start Measurement**: True process initialization time
- **Realistic AWS Lambda Simulation**: Mimics serverless environment

### Memory Measurement Approach

```typescript
// Before operations
const memoryBefore = process.memoryUsage();

// Perform operations
const schema = createPatientSchema();
const result = schema.parse(patient);

// After operations
const memoryAfter = process.memoryUsage();

// Calculate delta
const memoryDelta = {
  heapUsed: memoryAfter.heapUsed - memoryBefore.heapUsed,
  // ... other metrics
};
```

### Peak Memory Tracking

```typescript
let peakMemory = initialMemory;
for (const patient of patients) {
  schema.parse(patient);
  const currentMemory = process.memoryUsage();
  if (currentMemory.heapUsed > peakMemory.heapUsed) {
    peakMemory = currentMemory;
  }
}
```

## 🎯 AWS Deployment Recommendations

The enhanced benchmarking provides specific recommendations for different deployment scenarios:

### ☁️ AWS Lambda / Serverless

**Recommended**: Based on cold-start time and memory usage

- Prioritizes fast cold-start performance
- Considers memory efficiency for cost optimization
- Factors in module load time

### 🚀 High-Throughput Processing

**Recommended**: Based on parsing performance

- Prioritizes maximum throughput
- Considers sustained performance under load
- Factors in schema initialization efficiency

### 🌐 Client-Side Applications

**Recommended**: Based on bundle size and performance

- Prioritizes smaller bundle sizes
- Considers browser performance characteristics
- Factors in network transfer efficiency

## 📈 Sample Output

```
🧠 MEMORY & COLD-START COMPARISON RESULTS
==========================================

❄️  COLD-START PERFORMANCE
---------------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 45.23ms
   @ahryman40k/ts-fhir-types: 67.89ms
   Difference: 33.4% faster

📦 MODULE LOAD TIME
-------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 12.45ms
   @ahryman40k/ts-fhir-types: 23.67ms
   Difference: 47.4% faster

💾 ACTUAL MEMORY FOOTPRINT
--------------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 2.15 MB
   @ahryman40k/ts-fhir-types: 3.42 MB
   Difference: 37.2% less memory

📈 PEAK MEMORY USAGE
--------------------
🥇 Winner: @solarahealth/fhir-r4
   @solarahealth/fhir-r4: 4.23 MB
   @ahryman40k/ts-fhir-types: 6.78 MB
   Difference: 37.6% lower peak

🎯 DEPLOYMENT RECOMMENDATIONS
=============================

☁️  AWS LAMBDA / SERVERLESS
---------------------------
🏆 Recommended: @solarahealth/fhir-r4
   • Faster cold-start time
   • Lower memory footprint
   • Faster module loading

💡 KEY INSIGHTS FOR AWS DEPLOYMENTS
===================================
• Cold-start time directly impacts Lambda response latency
• Memory usage affects Lambda pricing (billed per GB-second)
• Module load time contributes to cold-start overhead
• Peak memory usage determines minimum Lambda memory allocation
• Consider bundle size for Lambda deployment packages
```

## 🔧 Customization

### Adjusting Test Parameters

You can modify the benchmark parameters in `memory-coldstart-benchmark.ts`:

```typescript
// Number of patients for peak memory testing
const patients = Array.from({ length: 100 }, (_, i) => ({
  ...samplePatient,
  id: `patient-${i}`,
}));
```

### Adding Custom Metrics

Extend the `ColdStartResults` interface to include additional metrics:

```typescript
interface ColdStartResults {
  // ... existing fields
  customMetric?: number;
}
```

### Environment Variables

Set environment variables to control benchmarking:

```bash
# Enable garbage collection for more accurate memory measurements
NODE_ENV=production node --expose-gc memory-coldstart-benchmark.ts

# Set specific Node.js flags
NODE_OPTIONS="--max-old-space-size=4096" npm run benchmark:memory-esr
```

## 📄 Output Files

The benchmarking generates several output files:

- `memory-coldstart-results.json`: Raw memory and cold-start data
- `enhanced-comparison-results.json`: Complete comparison with recommendations
- `benchmark-results.json`: Performance benchmark data (in subdirectories)

## 🚨 Important Notes

### Garbage Collection

For accurate memory measurements, the benchmarks use `--expose-gc` flag to force garbage collection between tests. This ensures clean memory state but may not reflect real-world usage patterns.

### Process Isolation

Each library is tested in a separate Node.js process to ensure:

- No memory leaks between tests
- Accurate cold-start measurements
- Realistic serverless environment simulation

### Measurement Accuracy

Memory measurements are taken at specific points and may not capture all memory usage patterns. Peak memory tracking provides a better indication of maximum resource requirements.

## 🤝 Contributing

To add new memory or cold-start metrics:

1. Extend the relevant interfaces in `memory-coldstart-benchmark.ts`
2. Add measurement logic to the benchmark scripts
3. Update the display functions to show new metrics
4. Add documentation for the new metrics

## 📚 Further Reading

- [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing/)
- [Node.js Memory Management](https://nodejs.org/en/docs/guides/simple-profiling/)
- [V8 Memory Usage](https://v8.dev/blog/memory)
- [Serverless Performance Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
