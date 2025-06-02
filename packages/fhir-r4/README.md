# 🏥 FHIR R4 TypeScript Library

> **Making healthcare data interoperability simple and type-safe** ✨

Welcome to the most comprehensive TypeScript library for working with HL7 FHIR R4 resources! Whether you're building healthcare applications, integrating with EHR systems, or working with medical data, this package provides everything you need with bulletproof type safety and runtime validation.

## 🎯 What Makes This Special?

- **🔒 Type Safety First**: Complete TypeScript definitions for all FHIR R4 resources
- **✅ Runtime Validation**: Zod-powered schemas catch errors before they cause problems
- **🚀 Developer Friendly**: Intuitive APIs that make complex healthcare data simple
- **📚 Comprehensive**: Support for all 150+ FHIR R4 resource types
- **🌳 Tree Shakeable**: Only bundle what you use
- **⚡ Auto-Generated**: Always up-to-date with official FHIR specifications

## 📊 Performance Benchmarks

Our comprehensive testing shows excellent performance characteristics:

| Metric                     | @solarahealth/fhir-r4 | vs @ahryman40k/ts-fhir-types |
| -------------------------- | --------------------- | ---------------------------- |
| **Parsing Throughput**     | 46,445 patients/sec   | 33% faster alternative       |
| **Bundle Size (Minified)** | 235.81 KB             | **81.9% smaller**            |
| **Bundle Size (Gzipped)**  | 46.63 KB              | **77.1% smaller**            |
| **Cold-Start Time**        | 286.05ms              | **12.3% faster**             |
| **Memory Usage**           | 390 bytes/patient     | Same efficiency              |
| **Validation Success**     | 100%                  | Same reliability             |

**Perfect for client-side applications and serverless deployments**: Excellent performance with significantly smaller bundle sizes and faster cold-starts, while maintaining strong server-side performance for most use cases.

> 📈 **Detailed analysis**: See [benchmarking/fhir-r4/BENCHMARKING_SUMMARY.md](https://github.com/SolaraHealthAU/fhir/blob/main/benchmarking/fhir-r4/BENCHMARKING_SUMMARY.md) for comprehensive performance analysis and recommendations.

## 📦 Installation

Getting started is as easy as:

```bash
npm install @solarahealth/fhir-r4
```

## 🚀 Quick Start

Let's create your first FHIR resource! Here's how simple it is:

```typescript
import { createPatientSchema, type Patient } from '@solarahealth/fhir-r4';

// Create a patient with full type safety
const patient: Patient = {
  resourceType: 'Patient',
  id: 'john-doe-123',
  active: true,
  name: [
    {
      family: 'Doe',
      given: ['John', 'William'],
    },
  ],
  gender: 'male',
  birthDate: '1985-03-15',
};

// Validate your data (because healthcare data matters!)
const patientSchema = createPatientSchema();
const result = patientSchema.safeParse(patient);

if (result.success) {
  console.log('✅ Perfect! Your patient data is valid');
  // Use result.data with confidence
} else {
  console.log("❌ Oops! Let's fix these issues:", result.error.issues);
}
```

## 💡 Common Use Cases

### Working with Observations (Lab Results, Vitals, etc.)

```typescript
import { createObservationSchema, type Observation } from '@solarahealth/fhir-r4';

const bloodPressure: Observation = {
  resourceType: 'Observation',
  id: 'bp-reading-456',
  status: 'final',
  code: {
    coding: [
      {
        system: 'http://loinc.org',
        code: '85354-9',
        display: 'Blood pressure panel',
      },
    ],
  },
  subject: { reference: 'Patient/john-doe-123' },
  component: [
    {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '8480-6',
            display: 'Systolic blood pressure',
          },
        ],
      },
      valueQuantity: {
        value: 120,
        unit: 'mmHg',
        system: 'http://unitsofmeasure.org',
        code: 'mm[Hg]',
      },
    },
  ],
};
```

### Bundling Resources Together

```typescript
import { createBundleSchema, type Bundle } from '@solarahealth/fhir-r4';

const patientBundle: Bundle = {
  resourceType: 'Bundle',
  id: 'patient-data-bundle',
  type: 'collection',
  entry: [{ resource: patient }, { resource: bloodPressure }],
};

// Validate the entire bundle
const bundleSchema = createBundleSchema();
const bundleResult = bundleSchema.safeParse(patientBundle);
```

## 🎯 Advanced Usage & Type Safety

### Working with All FHIR Resources

When you need to handle any FHIR resource type (useful for generic processors, middleware, or testing), you can import from the `/all` export:

```typescript
import { createResourceListSchema, type ResourceList } from '@solarahealth/fhir-r4/all';

// This schema accepts any valid FHIR R4 resource
const anyResourceSchema = createResourceListSchema();

// Validate any FHIR resource
const unknownData = getSomeResourceFromAPI();
const result = anyResourceSchema.safeParse(unknownData);

if (result.success) {
  // TypeScript knows this is any FHIR resource
  const resource: ResourceList = result.data;
  console.log(`Processing ${resource.resourceType}`);
}
```

> **⚠️ Bundle Size Note**: The `/all` export includes schemas for all 150+ FHIR resource types. While excellent for flexibility, it significantly increases your bundle size. Use it only when you truly need to handle arbitrary FHIR resources.

### When to Use Different Approaches

| Approach               | Best For                                    | Bundle Impact |
| ---------------------- | ------------------------------------------- | ------------- |
| **Individual imports** | Production apps with known resource types   | ✅ Minimal    |
| **Selective unions**   | Apps with predictable resource combinations | ✅ Small      |
| **`/all` export**      | Generic processors, testing, middleware     | ⚠️ Large      |

```typescript
// ✅ Minimal bundle size - specific resources only
import { createPatientSchema, createObservationSchema } from '@solarahealth/fhir-r4';

// ✅ Small bundle size - controlled union
import { makeContainedUnion } from '@solarahealth/fhir-r4';
const specificResources = makeContainedUnion(createPatientSchema(), createObservationSchema());

// ⚠️ Large bundle size - all resources included
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';
```

## 📚 In-Depth Guides

For complex scenarios involving contained resources and bundles, we've prepared detailed guides:

### [📖 Working with Contained Resources](./docs/contained-resources.md)

**Read this when you encounter:**

- Resources with nested/embedded resources in the `contained` array
- Type safety challenges with `contained: unknown[]`
- Bundle size concerns when working with contained resources
- Questions about tree-shaking and performance optimization

**Covers:**

- Understanding FHIR contained resources and their typing challenges
- Three strategies for handling contained resources (none, specific, or all)
- Application patterns for configuring contained resource types
- Tree-shaking optimization and bundle size management

### [📖 Working with Bundle Resources](./docs/working-with-bundle.md)

**Read this when you're working with:**

- FHIR Bundle resources containing multiple resource types
- Transaction bundles with response outcomes
- Type-safe bundle entry processing
- Complex bundle scenarios with nested contained resources

**Covers:**

- Understanding FHIR Bundle resources and entry typing
- Configuring bundle resource and outcome types
- Application patterns for different bundle types (document, transaction, searchset)
- Combining bundle resources with contained resource strategies

These guides provide production-ready patterns and help you choose the right approach for your application's performance and type safety requirements.

## 🛠️ Development & Contributing

Want to contribute or customize the generation? We'd love your help!

### Setting Up Your Development Environment

```bash
# Clone and navigate to the package
cd packages/fhir-r4

# Install dependencies
npm install

# Run the full test suite
npm run ci
```

### Regenerating from FHIR Specifications

Our types and schemas are automatically generated from the official FHIR specs:

```bash
# Download latest FHIR R4 specifications and regenerate everything
npm run generate

# Run tests to make sure everything works
npm test

# Build the package
npm run build
```

### Available Scripts

- `npm run generate` - Download specs and regenerate all types/schemas
- `npm run test` - Run the test suite
- `npm run typecheck` - Verify TypeScript types
- `npm run lint` - Check code style
- `npm run ci` - Run the full CI pipeline
- `npm run build` - Build the package for distribution

## 📖 Need More Help?

- 📚 **Full Documentation**: Check out our [main repository](https://github.com/SolaraHealthAU/fhir) for comprehensive guides
- 🐛 **Found a Bug?**: [Open an issue](https://github.com/SolaraHealthAU/fhir/issues) - we're here to help!
- 💬 **Questions?**: Start a [discussion](https://github.com/SolaraHealthAU/fhir/discussions) with the community

## 📄 License

MIT © [Solara Health Pty Ltd](https://github.com/SolaraHealthAU)

---

_Built with ❤️ for the healthcare developer community_
