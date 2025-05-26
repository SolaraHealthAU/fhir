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
