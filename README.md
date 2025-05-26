# HL7 FHIR Tools

A comprehensive TypeScript library for working with HL7 FHIR R4 resources, providing type-safe interfaces and runtime validation using Zod schemas.

## 🚀 Features

- **Complete FHIR R4 Support**: Full TypeScript type definitions for all FHIR R4 resources
- **Runtime Validation**: Zod-based schemas for robust data validation
- **Type Safety**: Leverage TypeScript's type system for compile-time safety
- **Monorepo Architecture**: Organized using Lerna for scalable package management
- **Auto-Generated**: Types and schemas generated directly from official FHIR specifications

## 📦 Packages

### `@solarahealth/fhir-r4`

The main package providing TypeScript types and Zod schemas for FHIR R4 resources.

**Installation:**

```bash
npm install @solarahealth/fhir-r4
```

**Key Features:**

- TypeScript type definitions for all FHIR R4 resources
- Zod schemas for runtime validation
- Support for both CommonJS and ES modules
- Tree-shakeable exports

## 🏁 Quick Start

### Basic Usage

```typescript
import {
  createPatientSchema,
  createObservationSchema,
  type Patient,
  type Observation,
} from '@solarahealth/fhir-r4';

// Create a patient resource with type safety
const patient: Patient = {
  resourceType: 'Patient',
  id: 'patient-123',
  active: true,
  name: [
    {
      family: 'Doe',
      given: ['John'],
    },
  ],
  gender: 'male',
  birthDate: '1990-01-01',
};

// Validate the patient resource
const patientSchema = createPatientSchema();
const result = patientSchema.safeParse(patient);

if (result.success) {
  console.log('Valid patient resource:', result.data);
} else {
  console.error('Validation errors:', result.error.issues);
}
```

### Working with Observations

```typescript
import { createObservationSchema, type Observation } from '@solarahealth/fhir-r4';

const observation: Observation = {
  resourceType: 'Observation',
  id: 'obs-123',
  status: 'final',
  code: {
    coding: [
      {
        system: 'http://loinc.org',
        code: '29463-7',
        display: 'Body Weight',
      },
    ],
  },
  subject: {
    reference: 'Patient/patient-123',
  },
  valueQuantity: {
    value: 70,
    unit: 'kg',
    system: 'http://unitsofmeasure.org',
    code: 'kg',
  },
};

// Validate the observation
const observationSchema = createObservationSchema();
const validationResult = observationSchema.safeParse(observation);
```

### Bundle Resources

```typescript
import { createBundleSchema, type Bundle } from '@solarahealth/fhir-r4';

const bundle: Bundle = {
  resourceType: 'Bundle',
  id: 'bundle-123',
  type: 'collection',
  entry: [
    {
      resource: patient,
    },
    {
      resource: observation,
    },
  ],
};

const bundleSchema = createBundleSchema();
const bundleResult = bundleSchema.safeParse(bundle);
```

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd fhir
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build all packages:**
   ```bash
   npm run build
   ```

### Working with the FHIR R4 Package

Navigate to the FHIR R4 package:

```bash
cd packages/fhir-r4
```

#### Regenerating Types and Schemas

The types and schemas are auto-generated from the official FHIR specifications:

1. **Download FHIR specifications:**

   ```bash
   npm run generate
   ```

   This will:

   - Download the latest FHIR R4 specifications
   - Generate TypeScript types and Zod schemas
   - Update all resource definitions

2. **Run tests:**

   ```bash
   npm run test
   ```

3. **Type checking:**

   ```bash
   npm run typecheck
   ```

4. **Linting:**

   ```bash
   npm run lint
   ```

5. **Full CI pipeline:**
   ```bash
   npm run ci
   ```

### Available Scripts

#### Root Level

- `npm run build` - Build all packages
- `npm run test` - Run tests for all packages
- `npm run clean` - Clean build artifacts
- `npm run publish` - Publish packages (requires proper permissions)

#### Package Level (fhir-r4)

- `npm run build` - Build the package (both CJS and ESM)
- `npm run build:cjs` - Build CommonJS version
- `npm run build:esm` - Build ES modules version
- `npm run test` - Run Jest tests
- `npm run typecheck` - TypeScript type checking
- `npm run lint` - ESLint code linting
- `npm run generate` - Download specs and regenerate types
- `npm run generate:r4` - Generate R4 types only
- `npm run clean` - Remove build artifacts

## 📚 API Reference

### Available Resources

The library provides complete support for all FHIR R4 resources, including:

- **Administrative**: Patient, Practitioner, Organization, Location, etc.
- **Clinical**: Observation, Condition, Procedure, DiagnosticReport, etc.
- **Financial**: Claim, Coverage, ExplanationOfBenefit, etc.
- **Workflow**: Task, Appointment, Schedule, etc.
- **Infrastructure**: Bundle, CapabilityStatement, OperationDefinition, etc.

### Schema Creation

Each FHIR resource has a corresponding schema creation function:

```typescript
import {
  createPatientSchema,
  createObservationSchema,
  createBundleSchema,
  // ... and many more
} from '@solarahealth/fhir-r4';
```

### Type Definitions

All FHIR resources are available as TypeScript types:

```typescript
import type {
  Patient,
  Observation,
  Bundle,
  // ... and many more
} from '@solarahealth/fhir-r4';
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm run ci`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Code Generation

The types and schemas are automatically generated from the official FHIR specifications. If you need to modify the generation process, edit the files in `packages/fhir-r4/scripts/generate/R4/`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Links

- [HL7 FHIR R4 Specification](https://hl7.org/fhir/R4/)
- [Zod Documentation](https://zod.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [existing issues](../../issues)
2. Create a new issue with a detailed description
3. Include code examples and error messages when applicable

---

**Built with ❤️ by Solara Health Pty Ltd in Melbourne, Australia**
