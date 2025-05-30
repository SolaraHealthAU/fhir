# HL7 FHIR Tools

A comprehensive TypeScript ecosystem for working with HL7 FHIR R4 resources. Whether you're building healthcare applications, integrating with EHR systems, or creating FHIR-compliant APIs, this monorepo provides everything you need with bulletproof type safety and runtime validation.

## 🚀 What This Project Offers

This project provides two complementary packages that work together to make FHIR development simple and type-safe:

### 🏗️ **For Application Developers** - `@solarahealth/fhir-r4`

Use FHIR types and validation in your own applications, whether you're building client apps, custom servers, or data processing pipelines.

### 🌐 **For API Developers** - `@solarahealth/fhir-r4-server`

Quickly build FHIR-compliant REST APIs with Express.js middleware that handles routing, validation, and capability statements automatically.

## 🎯 Key Features

- **🔒 Complete Type Safety**: Full TypeScript definitions for all FHIR R4 resources
- **✅ Runtime Validation**: Zod-powered schemas catch errors before they cause problems
- **🚀 Express Integration**: Ready-to-use middleware for building FHIR servers
- **📚 Comprehensive Coverage**: Support for all 150+ FHIR R4 resource types
- **🌳 Tree Shakeable**: Only bundle what you use
- **⚡ Auto-Generated**: Always up-to-date with official FHIR specifications
- **🏗️ Builder Pattern**: Intuitive APIs for defining FHIR capabilities
- **☁️ Modern Deployment**: Built for serverless environments (AWS Lambda, Vercel) and traditional servers

## 📊 Performance at a Glance

Our comprehensive benchmarking shows excellent performance characteristics:

| Metric                     | @solarahealth/fhir-r4 | vs @ahryman40k/ts-fhir-types |
| -------------------------- | --------------------- | ---------------------------- |
| **Parsing Throughput**     | 46,445 patients/sec   | 33% faster alternative       |
| **Bundle Size (Minified)** | 235.81 KB             | **81.9% smaller**            |
| **Bundle Size (Gzipped)**  | 46.63 KB              | **77.1% smaller**            |
| **Cold-Start Time**        | 286.05ms              | **12.3% faster**             |
| **Memory Usage**           | 390 bytes/patient     | Same efficiency              |
| **Validation Success**     | 100%                  | Same reliability             |

**Key Takeaway**: Excellent performance with significantly smaller bundle sizes and faster cold-starts - ideal for both client-side applications and serverless deployments while maintaining strong server-side performance.

> 📈 **Full benchmarking details**: See [benchmarking/fhir-r4/BENCHMARKING_SUMMARY.md](benchmarking/fhir-r4/BENCHMARKING_SUMMARY.md) for comprehensive performance analysis and recommendations.

## 📦 Packages

### `@solarahealth/fhir-r4`

**Core FHIR R4 types and validation schemas**

Perfect for developers who want to work with FHIR data in their applications, validate resources, or build custom FHIR solutions.

```bash
npm install @solarahealth/fhir-r4
```

**Use Cases:**

- Validating FHIR resources in your application
- Type-safe FHIR data manipulation
- Building custom FHIR clients or processors
- Integrating with existing FHIR systems

**Key Features:**

- TypeScript type definitions for all FHIR R4 resources
- Zod schemas for runtime validation
- Support for both CommonJS and ES modules
- Tree-shakeable exports

📚 **[View detailed documentation →](packages/fhir-r4/README.md)**

### `@solarahealth/fhir-r4-server`

**Express.js middleware for building FHIR REST APIs**

Perfect for developers who want to quickly expose their healthcare data through a FHIR-compliant REST API with modern deployment capabilities.

```bash
npm install @solarahealth/fhir-r4-server @solarahealth/fhir-r4 express
```

**Use Cases:**

- Building FHIR-compliant REST APIs
- Exposing existing healthcare data via FHIR
- Creating FHIR facades for legacy systems
- Rapid prototyping of FHIR servers
- Serverless FHIR API deployment

**Key Features:**

- Express middleware with builder pattern
- Auto-generated capability statements
- Built-in request/response validation
- Flexible data access layer (bring your own database)
- FHIR R4 REST API compliance
- Modern deployment support (AWS Lambda, Vercel, etc.)

📚 **[View detailed documentation →](packages/fhir-r4-server/README.md)**

## 🏁 Quick Start Examples

### Using FHIR Types and Validation (`@solarahealth/fhir-r4`)

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
  name: [{ family: 'Doe', given: ['John'] }],
  gender: 'male',
  birthDate: '1990-01-01',
};

// Validate the patient resource
const patientSchema = createPatientSchema();
const result = patientSchema.safeParse(patient);

if (result.success) {
  console.log('✅ Valid patient resource:', result.data);
} else {
  console.error('❌ Validation errors:', result.error.issues);
}
```

### Building a FHIR Server (`@solarahealth/fhir-r4-server`)

```typescript
import express from 'express';
import type { Patient } from '@solarahealth/fhir-r4';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import { z } from 'zod';

const app = express();
app.use(express.json());

// Your data store (could be any database)
const patients: Record<string, Patient> = {
  '123': {
    resourceType: 'Patient',
    id: '123',
    name: [{ given: ['John'], family: 'Doe' }],
  },
};

// Define Patient resource with read capability
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id) => {
      const patient = patients[id];
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .build();

// Initialize FHIR server
const fhirServer = RestServer.init({
  capabilities: {
    resourceType: 'CapabilityStatement',
    status: 'active',
    date: new Date().toISOString(),
    kind: 'instance',
    fhirVersion: '4.0.1',
    format: ['json'],
    rest: [{ mode: 'server', resource: [patientResource] }],
  },
});

// Mount FHIR middleware
app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: async () => ({}),
  }),
);

app.listen(3000, () => {
  console.log('🏥 FHIR server running on http://localhost:3000/fhir');
});
```

## 🎯 Choose Your Path

### 🏥 I want to work with FHIR data in my application

**Scenario**: You're building a healthcare app, need to validate FHIR resources, or want to work with FHIR data in your existing application.

→ **Start with** [`@solarahealth/fhir-r4`](packages/fhir-r4/README.md) for types and validation

**Examples**: Client applications, data processors, FHIR validators, integration utilities

### 🌐 I want to build a FHIR REST API server

**Scenario**: You need to expose healthcare data through a FHIR-compliant REST API, either from scratch or as a facade over existing systems.

→ **Use both packages**: [`@solarahealth/fhir-r4-server`](packages/fhir-r4-server/README.md) + [`@solarahealth/fhir-r4`](packages/fhir-r4/README.md)

**Examples**: FHIR servers, API gateways, healthcare data APIs, legacy system facades

### 🔗 I want to integrate with existing FHIR systems

**Scenario**: You need to consume data from FHIR APIs, validate incoming FHIR resources, or build FHIR-compatible clients.

→ **Start with** [`@solarahealth/fhir-r4`](packages/fhir-r4/README.md) for client-side validation and types

**Examples**: EHR integrations, FHIR clients, data synchronization tools

### 🔧 I want to modernize legacy healthcare data systems

**Scenario**: You have existing healthcare data in non-FHIR formats and want to expose it through a modern FHIR REST API.

→ **Use** [`@solarahealth/fhir-r4-server`](packages/fhir-r4-server/README.md) to create a FHIR facade with your data mapping logic

**Examples**: Legacy database APIs, HL7 v2 to FHIR converters, proprietary format bridges

## 💡 More Examples

### Working with Observations and Bundles

```typescript
import {
  createObservationSchema,
  createBundleSchema,
  type Observation,
  type Bundle,
} from '@solarahealth/fhir-r4';

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
  subject: { reference: 'Patient/patient-123' },
  valueQuantity: {
    value: 70,
    unit: 'kg',
    system: 'http://unitsofmeasure.org',
    code: 'kg',
  },
};

// Bundle multiple resources
const bundle: Bundle = {
  resourceType: 'Bundle',
  id: 'bundle-123',
  type: 'collection',
  entry: [{ resource: patient }, { resource: observation }],
};
```

### Advanced FHIR Server with Search

```typescript
import { builder } from '@solarahealth/fhir-r4-server';
import { z } from 'zod';

const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      return await context.database.findPatient(id);
    }),
  )
  .searchParams([
    {
      name: 'name',
      type: 'string',
    },
  ])
  .search((builder) =>
    builder
      .params(
        z.object({
          name: z.string().optional(),
        }),
      )
      .list(async (params, context, req) => {
        const results = await context.database.searchPatients(params);
        return {
          resourceType: 'Bundle',
          type: 'searchset',
          entry: results.map((resource) => ({ resource })),
        };
      }),
  )
  .build();
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

### Working with Individual Packages

#### FHIR R4 Package (`packages/fhir-r4`)

```bash
cd packages/fhir-r4
npm run ci  # Run full CI pipeline
```

**Regenerating Types and Schemas:**

The types and schemas are auto-generated from the official FHIR specifications:

```bash
npm run generate  # Download specs and regenerate everything
npm run test      # Verify everything works
```

#### FHIR R4 Server Package (`packages/fhir-r4-server`)

```bash
cd packages/fhir-r4-server
npm run ci  # Run full CI pipeline
```

### Available Scripts

#### Root Level

- `npm run build` - Build all packages
- `npm run test` - Run tests for all packages
- `npm run clean` - Clean build artifacts
- `npm run publish` - Publish packages (requires proper permissions)

#### FHIR R4 Package (`packages/fhir-r4`)

- `npm run build` - Build the package (both CJS and ESM)
- `npm run test` - Run Jest tests
- `npm run typecheck` - TypeScript type checking
- `npm run lint` - ESLint code linting
- `npm run generate` - Download specs and regenerate types
- `npm run ci` - Run full CI pipeline
- `npm run clean` - Remove build artifacts

#### FHIR R4 Server Package (`packages/fhir-r4-server`)

- `npm run build` - Build the package
- `npm run test` - Run Jest tests
- `npm run typecheck` - TypeScript type checking
- `npm run lint` - ESLint code linting
- `npm run ci` - Run full CI pipeline
- `npm run clean` - Remove build artifacts

## 📚 API Reference

### `@solarahealth/fhir-r4`

#### Available Resources

Complete support for all FHIR R4 resources, including:

- **Administrative**: Patient, Practitioner, Organization, Location, etc.
- **Clinical**: Observation, Condition, Procedure, DiagnosticReport, etc.
- **Financial**: Claim, Coverage, ExplanationOfBenefit, etc.
- **Workflow**: Task, Appointment, Schedule, etc.
- **Infrastructure**: Bundle, CapabilityStatement, OperationDefinition, etc.

#### Schema Creation

Each FHIR resource has a corresponding schema creation function:

```typescript
import {
  createPatientSchema,
  createObservationSchema,
  createBundleSchema,
  // ... and many more
} from '@solarahealth/fhir-r4';
```

#### Type Definitions

All FHIR resources are available as TypeScript types:

```typescript
import type {
  Patient,
  Observation,
  Bundle,
  // ... and many more
} from '@solarahealth/fhir-r4';
```

### `@solarahealth/fhir-r4-server`

#### Core Components

- **`RestServer`**: Main server class for initializing FHIR servers
- **`builder`**: Fluent API for defining resource capabilities
- **`errors`**: FHIR-compliant error classes

#### Builder Pattern

```typescript
import { builder } from '@solarahealth/fhir-r4-server';

const resource = builder
  .defineResource('Patient')
  .read(/* read handler */)
  .search(/* search handler */)
  .build();
```

#### Error Handling

```typescript
import { errors } from '@solarahealth/fhir-r4-server';

throw new errors.ResourceNotFound('Patient', '123');
throw new errors.BadRequest('Invalid parameter');
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

- **[HL7 FHIR R4 Specification](https://hl7.org/fhir/R4/)** - Official FHIR R4 documentation
- **[FHIR R4 Resource Index](https://hl7.org/fhir/R4/resourcelist.html)** - Complete list of FHIR R4 resources
- **[US Core Implementation Guide](https://hl7.org/fhir/us/core/)** - US-specific FHIR profiles
- **[Zod Documentation](https://zod.dev/)** - Runtime validation library used in our packages
- **[TypeScript Documentation](https://www.typescriptlang.org/)** - TypeScript language reference
- **[Express.js Documentation](https://expressjs.com/)** - Express web framework for Node.js

## 🆘 Support

If you encounter any issues or have questions:

### 📋 General Support

1. Check the [existing issues](../../issues)
2. Search the package-specific documentation for your use case
3. Create a new issue with a detailed description
4. Include code examples and error messages when applicable

### 📚 Package-Specific Help

**For `@solarahealth/fhir-r4` (types and validation)**:

- 📖 [Complete documentation](packages/fhir-r4/README.md)
- Common issues: Schema validation, TypeScript compilation, import/export problems

**For `@solarahealth/fhir-r4-server` (REST API middleware)**:

- 📖 [Complete documentation](packages/fhir-r4-server/README.md)
- Common issues: Express integration, resource handlers, deployment configurations

### 💬 Getting Help

When reporting issues, please specify:

- Which package you're using (`@solarahealth/fhir-r4` or `@solarahealth/fhir-r4-server`)
- Your Node.js and TypeScript versions
- Minimal code example that reproduces the issue
- Expected vs actual behavior

### Package-Specific Documentation

- **`@solarahealth/fhir-r4`**: See [packages/fhir-r4/README.md](packages/fhir-r4/README.md)
- **`@solarahealth/fhir-r4-server`**: See [packages/fhir-r4-server/README.md](packages/fhir-r4-server/README.md)

---

**Built with ❤️ by Solara Health Pty Ltd in Melbourne, Australia**
