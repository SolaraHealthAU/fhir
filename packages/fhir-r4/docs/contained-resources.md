# FHIR Contained Resources Guide

> A comprehensive guide to understanding and working with FHIR contained resources in Zod schemas

---

## What are Contained Resources?

In FHIR, any `DomainResource` can include a `contained` array that holds other FHIR resources:

```fhir
DomainResource.contained : 0..* Resource
```

This allows you to embed related resources directly within a parent resource instead of referencing them externally. For example, a `Patient` might contain an `Organization` resource representing their healthcare provider:

```json
{
  "resourceType": "Patient",
  "id": "example-patient",
  "contained": [
    {
      "resourceType": "Organization",
      "id": "provider-org",
      "name": "Acme Healthcare"
    }
  ],
  "managingOrganization": {
    "reference": "#provider-org"
  }
}
```

## The Type Safety Challenge

Since _any_ FHIR resource can appear in the `contained` array, this creates a typing challenge:

- **Too permissive**: `contained: any[]` loses all type safety
- **Too restrictive**: `contained: Patient[]` breaks when other resources appear
- **Just right**: `contained: (Patient | Organization | Observation)[]` but this requires knowing which resources you actually use

## Default Behavior: Why `unknown[]`?

This library defaults to `contained: unknown[]` for several important reasons:

### 1. **Tree-shaking preservation**

```ts
import { createPatientSchema } from '@solarahealth/fhir-r4';

const Patient = createPatientSchema();
// Only imports Patient schema, not every FHIR resource
```

### 2. **Explicit opt-in to complexity**

You only pay the bundle size cost for resources you actually need:

```ts
// Small bundle - only Patient + Observation
const union = makeContainedUnion(createPatientSchema(), createObservationSchema());
```

### 3. **Flexibility for different use cases**

- Some apps never use contained resources
- Others use a small, predictable subset
- A few need to handle any possible resource

---

## Parsing Strategies & Best Practices

### Strategy 1: "I don't use contained resources"

**Best for**: Simple applications, external references only

```ts
import { createPatientSchema } from '@solarahealth/fhir-r4';

const Patient = createPatientSchema({ allowNested: false });
// contained field is disabled entirely
```

**Benefits**: Smallest bundle, clearest intent

---

### Strategy 2: "I use a specific set of contained resources"

**Best for**: Most production applications

```ts
// containedTypes.ts - centralize your contained resource types
import {
  makeContainedUnion,
  createOrganizationSchema,
  createPractitionerSchema,
  createObservationSchema,
} from '@solarahealth/fhir-r4';

export const AppContained = makeContainedUnion(
  createOrganizationSchema(),
  createPractitionerSchema(),
  createObservationSchema(),
);

// Now use it in your schemas
import { createPatientSchema } from '@solarahealth/fhir-r4';
import { AppContained } from './containedTypes';

const Patient = createPatientSchema({ contained: AppContained });

// Type-safe parsing with known resources
const result = Patient.parse(patientData);
if (result.contained) {
  result.contained.forEach((resource) => {
    // TypeScript knows this is Organization | Practitioner | Observation
    switch (resource.resourceType) {
      case 'Organization':
        console.log(resource.name); // ✅ Type-safe
        break;
      case 'Practitioner':
        console.log(resource.name?.[0]?.family); // ✅ Type-safe
        break;
    }
  });
}
```

**Benefits**: Type safety + tree-shaking + predictable bundle size

---

### Strategy 3: "I need to handle any FHIR resource"

**Best for**: Generic FHIR processors, middleware, testing tools

```ts
import { createPatientSchema } from '@solarahealth/fhir-r4';
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';

const Patient = createPatientSchema({ contained: createResourceListSchema() });
// contained: ResourceList[] (union of every FHIR resource)
```

**Benefits**: Maximum flexibility
**Tradeoffs**: Largest bundle size (includes every FHIR resource schema)

---

## Application Configuration Patterns

### Pattern A: Project-wide contained registry

Create a single source of truth for your contained resources:

```ts
// src/fhir/containedRegistry.ts
import {
  makeContainedUnion,
  createOrganizationSchema,
  createPractitionerSchema,
  createLocationSchema,
  createObservationSchema,
} from '@solarahealth/fhir-r4';

// Define exactly which resources your app uses in contained arrays
export const AppContained = makeContainedUnion(
  createOrganizationSchema(),
  createPractitionerSchema(),
  createLocationSchema(),
  createObservationSchema(),
);

// Export type for use in your application types
export type AppContainedResource = z.infer<typeof AppContained>;
```

```ts
// src/fhir/schemas.ts
import { AppContained } from './containedRegistry';
import {
  createPatientSchema,
  createEncounterSchema,
  createCarePlanSchema,
} from '@solarahealth/fhir-r4';

// All your schemas use the same contained configuration
export const Patient = createPatientSchema({ contained: AppContained });
export const Encounter = createEncounterSchema({ contained: AppContained });
export const CarePlan = createCarePlanSchema({ contained: AppContained });
```

### Pattern B: Factory function for consistency

Automate the repetitive configuration:

```ts
// src/fhir/withContained.ts
import { AppContained } from './containedRegistry';
import type { z } from 'zod';

export function withAppContained<C extends z.ZodTypeAny>(contained: C) {
  return {
    createPatientSchema: () => createPatientSchema({ contained }),
    createEncounterSchema: () => createEncounterSchema({ contained }),
    createCarePlanSchema: () => createCarePlanSchema({ contained }),
    // Add other schemas as needed
  };
}

// Usage
import { withAppContained } from './withContained';
import { AppContained } from './containedRegistry';

const Schemas = withAppContained(AppContained);
export const Patient = Schemas.createPatientSchema();
export const Encounter = Schemas.createEncounterSchema();
```

### Pattern C: Environment-based configuration

Different contained resources for different environments:

```ts
// src/fhir/environmentContained.ts
import { makeContainedUnion } from '@solarahealth/fhir-r4';
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';

const productionContained = makeContainedUnion(
  createOrganizationSchema(),
  createPractitionerSchema(),
);

const testingContained = createResourceListSchema(); // More permissive for testing

export const AppContained =
  process.env.NODE_ENV === 'test' ? testingContained : productionContained;
```

---

## Working with Parsed Contained Resources

### Type-safe resource extraction

```ts
import { Patient } from './fhir/schemas';

function extractOrganizations(patient: z.infer<typeof Patient>) {
  return (
    patient.contained?.filter(
      (resource): resource is Organization => resource.resourceType === 'Organization',
    ) ?? []
  );
}

function findContainedById(patient: z.infer<typeof Patient>, id: string) {
  return patient.contained?.find((resource) => resource.id === id);
}
```

### Validation with helpful error messages

```ts
const result = Patient.safeParse(unknownData);

if (!result.success) {
  // Zod provides detailed errors about which contained resources failed
  console.error('Validation failed:', result.error.format());
} else {
  // Fully type-safe patient with known contained resource types
  const patient = result.data;
}
```

---

## API Reference

| Function                                 | Purpose                                         | Tree-shaking                      |
| ---------------------------------------- | ----------------------------------------------- | --------------------------------- |
| `makeContainedUnion(...schemas)`         | Build discriminated union of specific resources | ✅ Only imports specified schemas |
| `createXSchema({ contained })`           | Override default `unknown[]` contained type     | ✅ Only imports what you specify  |
| `createResourceListSchema` (from `/all`) | Build a union of every FHIR resource            | ❌ Imports all resource schemas   |
| `createXSchema({ allowNested: false })`  | Disable contained resources entirely            | ✅ Minimal bundle size            |

---

## Recommended Decision Tree

1. **Do you use contained resources at all?**

   - No → Use `{ allowNested: false }`
   - Sometimes → Continue to #2

2. **Do you know which resource types appear in contained?**

   - Yes → Use `makeContainedUnion()` with specific schemas
   - No → Use `createResourceListSchema` from `/all`

3. **Is this a production application?**

   - Yes → Set up project-wide contained registry (Pattern A)
   - No/Prototype → Use inline contained configuration

4. **Do you need different contained resources in different environments?**
   - Yes → Use environment-based configuration (Pattern C)
   - No → Stick with Pattern A or B

This approach ensures you get the right balance of type safety, bundle size, and maintainability for your specific use case.
