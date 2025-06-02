# FHIR Bundle Resources Guide

> A comprehensive guide to understanding and working with FHIR bundle resources in Zod schemas

---

## What are Bundle Resources?

In FHIR, `Bundle` resources contain collections of other FHIR resources within their `entry` array. Each bundle entry can contain:

- **`entry[].resource`**: The main resource being bundled
- **`entry[].response.outcome`**: An outcome resource (typically `OperationOutcome`) for transaction responses

```fhir
Bundle.entry.resource : 0..1 Resource
Bundle.entry.response.outcome : 0..1 Resource
```

This allows bundles to transport any combination of FHIR resources:

```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "example-patient"
      },
      "response": {
        "status": "201 Created",
        "outcome": {
          "resourceType": "OperationOutcome",
          "issue": []
        }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "example-obs"
      }
    }
  ]
}
```

## The Type Safety Challenge

Since _any_ FHIR resource can appear in bundle entries, this creates similar typing challenges as contained resources:

- **Too permissive**: `resource: any` loses all type safety
- **Too restrictive**: `resource: Patient` breaks when other resources appear
- **Just right**: `resource: Patient | Observation | Organization` but requires knowing which resources you actually use

**Additional complexity**: Bundle resources might themselves contain `contained` resources, creating a nested typing challenge.

## Specifying Bundle Resource Types

The `createBundleSchema()` function accepts two optional parameters to control the types of resources that can appear in bundles:

```ts
createBundleSchema({
  resource?: ZodSchema,  // For bundle.entry[].resource
  outcome?: ZodSchema,   // For bundle.entry[].response.outcome
})
```

### `resource` Parameter

Controls the type of `bundle.entry[].resource` - the main resources in bundle entries:

```ts
import {
  createBundleSchema,
  makeBundleResourceUnion,
  createPatientSchema,
  createObservationSchema,
} from '@solarahealth/fhir-r4';

// Specific resource types only
const Bundle = createBundleSchema({
  resource: makeBundleResourceUnion(createPatientSchema(), createObservationSchema()),
});

// Now bundle.entry[].resource is typed as Patient | Observation
```

### `outcome` Parameter

Controls the type of `bundle.entry[].response.outcome` - resources that appear in transaction response outcomes:

```ts
import { createOperationOutcomeSchema } from '@solarahealth/fhir-r4';

const Bundle = createBundleSchema({
  resource: makeBundleResourceUnion(createPatientSchema(), createObservationSchema()),
  outcome: makeBundleResourceUnion(createOperationOutcomeSchema()),
});

// Now bundle.entry[].response.outcome is typed as OperationOutcome
```

### Both Parameters Together

Most transaction bundles need both:

```ts
const TransactionBundle = createBundleSchema({
  resource: makeBundleResourceUnion(
    createPatientSchema(),
    createObservationSchema(),
    createOrganizationSchema(),
  ),
  outcome: makeBundleResourceUnion(createOperationOutcomeSchema()),
});

// Type-safe access to both resources and outcomes
const result = TransactionBundle.parse(bundleData);
result.entry?.forEach((entry) => {
  if (entry.resource) {
    // Typed as Patient | Observation | Organization
    console.log(entry.resource.resourceType);
  }

  if (entry.response?.outcome) {
    // Typed as OperationOutcome
    console.log(entry.response.outcome.issue);
  }
});
```

## Default Behavior: Why `unknown`?

This library defaults to `entry[].resource: unknown` and `entry[].response.outcome: unknown` for the same reasons as contained resources:

### 1. **Tree-shaking preservation**

```ts
import { createBundleSchema } from '@solarahealth/fhir-r4';

const Bundle = createBundleSchema();
// Only imports Bundle schema, not every FHIR resource
```

### 2. **Explicit opt-in to complexity**

You only pay the bundle size cost for resources you actually use:

```ts
// Small bundle - only Patient + Observation in entries
const bundleResources = makeBundleResourceUnion(createPatientSchema(), createObservationSchema());
```

### 3. **Flexibility for different use cases**

- Some apps work with specific bundle types (e.g., document bundles with known resources)
- Others need to handle transaction responses with any resource type
- A few need to process arbitrary bundles from external systems

---

## API Design Patterns

### Pattern 1: Simple Resource Union

**Best for**: Bundles with a known, limited set of resource types

```ts
import {
  makeBundleResourceUnion,
  createBundleSchema,
  createPatientSchema,
  createObservationSchema,
  createOrganizationSchema,
} from '@solarahealth/fhir-r4';

// Define which resources can appear in bundle entries
const AppBundleResources = makeBundleResourceUnion(
  createPatientSchema(),
  createObservationSchema(),
  createOrganizationSchema(),
);

// Create bundle with typed resources
const Bundle = createBundleSchema({
  resource: AppBundleResources,
});

// Type-safe parsing
const result = Bundle.parse(bundleData);
result.entry?.forEach((entry) => {
  if (entry.resource) {
    // TypeScript knows: Patient | Observation | Organization
    switch (entry.resource.resourceType) {
      case 'Patient':
        console.log(entry.resource.name); // ✅ Type-safe
        break;
      case 'Observation':
        console.log(entry.resource.value); // ✅ Type-safe
        break;
    }
  }
});
```

### Pattern 2: Separate Resource and Outcome Types

**Best for**: Transaction bundles where responses have different resource types than requests

```ts
import {
  makeBundleResourceUnion,
  createBundleSchema,
  createPatientSchema,
  createObservationSchema,
  createOperationOutcomeSchema,
} from '@solarahealth/fhir-r4';

// Resources that go in bundle entries
const BundleResources = makeBundleResourceUnion(createPatientSchema(), createObservationSchema());

// Resources that go in response outcomes (usually just OperationOutcome)
const BundleOutcomes = makeBundleResourceUnion(createOperationOutcomeSchema());

const Bundle = createBundleSchema({
  resource: BundleResources,
  outcome: BundleOutcomes,
});
```

### Pattern 3: Resources with Nested Contained Resources

**Best for**: Complex bundles where resources themselves have contained resources

```ts
import {
  makeBundleResourceUnion,
  makeContainedUnion,
  createBundleSchema,
  createPatientSchema,
  createObservationSchema,
  createOrganizationSchema,
  createPractitionerSchema,
} from '@solarahealth/fhir-r4';

// Define contained resources for bundle resources
const ContainedResources = makeContainedUnion(
  createOrganizationSchema(),
  createPractitionerSchema(),
);

// Create bundle resources WITH contained resource support
const BundleResources = makeBundleResourceUnion(
  createPatientSchema({ contained: ContainedResources }),
  createObservationSchema({ contained: ContainedResources }),
);

const Bundle = createBundleSchema({
  resource: BundleResources,
});

// Now resources in bundles can have type-safe contained resources
const result = Bundle.parse(bundleData);
result.entry?.[0]?.resource?.contained?.[0]; // Typed as Organization | Practitioner
```

---

## Parsing Strategies & Best Practices

### Strategy 1: "I work with specific bundle types"

**Best for**: Document bundles, message bundles, application-specific workflows

```ts
// documentBundle.ts - for clinical document bundles
import {
  makeBundleResourceUnion,
  createBundleSchema,
  createCompositionSchema,
  createPatientSchema,
  createPractitionerSchema,
  createOrganizationSchema,
} from '@solarahealth/fhir-r4';

export const DocumentBundleResources = makeBundleResourceUnion(
  createCompositionSchema(),
  createPatientSchema(),
  createPractitionerSchema(),
  createOrganizationSchema(),
);

export const DocumentBundle = createBundleSchema({
  resource: DocumentBundleResources,
  // Document bundles typically don't have response outcomes
});

// Usage with specific bundle type validation
const result = DocumentBundle.parse(documentData);
if (result.type !== 'document') {
  throw new Error('Expected document bundle');
}
```

### Strategy 2: "I handle transaction responses"

**Best for**: FHIR servers, transaction processors

```ts
// transactionBundle.ts
import {
  makeBundleResourceUnion,
  createBundleSchema,
  createOperationOutcomeSchema,
} from '@solarahealth/fhir-r4';
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';

// Transaction requests can contain any resource
const TransactionBundle = createBundleSchema({
  resource: createResourceListSchema(), // Any FHIR resource
  outcome: makeBundleResourceUnion(createOperationOutcomeSchema()),
});

// Type-safe transaction processing
const result = TransactionBundle.parse(transactionData);
result.entry?.forEach((entry) => {
  if (entry.response?.outcome) {
    // TypeScript knows this is OperationOutcome
    console.log(entry.response.outcome.issue);
  }
});
```

### Strategy 3: "I need maximum flexibility"

**Best for**: Generic FHIR processors, middleware, testing tools

```ts
import { createBundleSchema } from '@solarahealth/fhir-r4';
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';

const Bundle = createBundleSchema({
  resource: createResourceListSchema(),
  outcome: createResourceListSchema(),
});

// Can handle any bundle with any resources
```

---

## Application Configuration Patterns

### Pattern A: Centralized Bundle Resource Registry

```ts
// src/fhir/bundleRegistry.ts
import {
  makeBundleResourceUnion,
  makeContainedUnion,
  createPatientSchema,
  createObservationSchema,
  createOrganizationSchema,
  createPractitionerSchema,
  createOperationOutcomeSchema,
} from '@solarahealth/fhir-r4';

// Contained resources used within bundle resources
export const AppContained = makeContainedUnion(
  createOrganizationSchema(),
  createPractitionerSchema(),
);

// Main resources that appear in bundle entries
export const AppBundleResources = makeBundleResourceUnion(
  createPatientSchema({ contained: AppContained }),
  createObservationSchema({ contained: AppContained }),
);

// Resources that appear in response outcomes
export const AppBundleOutcomes = makeBundleResourceUnion(
  createOperationOutcomeSchema({ contained: AppContained }),
);

// Export types for application use
export type AppBundleResource = z.infer<typeof AppBundleResources>;
export type AppBundleOutcome = z.infer<typeof AppBundleOutcomes>;
```

```ts
// src/fhir/schemas.ts
import { AppBundleResources, AppBundleOutcomes } from './bundleRegistry';
import { createBundleSchema } from '@solarahealth/fhir-r4';

export const Bundle = createBundleSchema({
  resource: AppBundleResources,
  outcome: AppBundleOutcomes,
});
```

### Pattern B: Bundle Type Factories

```ts
// src/fhir/bundleTypes.ts
import {
  makeBundleResourceUnion,
  createBundleSchema,
  createCompositionSchema,
  createPatientSchema,
  createObservationSchema,
  createOperationOutcomeSchema,
} from '@solarahealth/fhir-r4';
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';

export const bundleSchemas = {
  // Document bundles
  document: createBundleSchema({
    resource: makeBundleResourceUnion(
      createCompositionSchema(),
      createPatientSchema(),
      createObservationSchema(),
    ),
  }),

  // Search result bundles
  searchset: createBundleSchema({
    resource: makeBundleResourceUnion(createPatientSchema(), createObservationSchema()),
    outcome: makeBundleResourceUnion(createOperationOutcomeSchema()),
  }),

  // Transaction bundles
  transaction: createBundleSchema({
    resource: createResourceListSchema(), // Accept any resource
    outcome: makeBundleResourceUnion(createOperationOutcomeSchema()),
  }),
};

// Usage
const documentBundle = bundleSchemas.document.parse(data);
```

### Pattern C: Environment-Based Bundle Configuration

```ts
// src/fhir/environmentBundles.ts
import { makeBundleResourceUnion } from '@solarahealth/fhir-r4';
import { createResourceListSchema } from '@solarahealth/fhir-r4/all';

const productionBundleResources = makeBundleResourceUnion(
  createPatientSchema(),
  createObservationSchema(),
  createOrganizationSchema(),
);

const testingBundleResources = createResourceListSchema(); // More permissive for testing

export const AppBundleResources =
  process.env.NODE_ENV === 'test' ? testingBundleResources : productionBundleResources;
```

---

## Working with Parsed Bundle Resources

### Type-safe Resource Extraction

```ts
import { Bundle } from './fhir/schemas';

function extractPatients(bundle: z.infer<typeof Bundle>) {
  return (
    bundle.entry
      ?.map((entry) => entry.resource)
      .filter((resource): resource is Patient => resource?.resourceType === 'Patient') ?? []
  );
}

function findResourceById<T extends { resourceType: string }>(
  bundle: z.infer<typeof Bundle>,
  resourceType: T['resourceType'],
  id: string,
): T | undefined {
  return bundle.entry
    ?.map((entry) => entry.resource)
    .find(
      (resource): resource is T => resource?.resourceType === resourceType && resource.id === id,
    ) as T | undefined;
}
```

### Bundle Type-Specific Processing

```ts
function processBundleByType(bundle: z.infer<typeof Bundle>) {
  switch (bundle.type) {
    case 'document':
      // Type-safe document processing
      const composition = bundle.entry?.find((e) => e.resource?.resourceType === 'Composition')
        ?.resource as Composition;
      break;

    case 'transaction-response':
      // Process transaction responses with outcomes
      bundle.entry?.forEach((entry) => {
        if (entry.response?.outcome) {
          // Handle operation outcome
          console.log(entry.response.outcome.issue);
        }
      });
      break;

    case 'searchset':
      // Process search results
      const matches = bundle.entry?.filter((e) => e.search?.mode === 'match');
      break;
  }
}
```

---

## API Reference

| Function                                    | Purpose                                       | Tree-shaking                      |
| ------------------------------------------- | --------------------------------------------- | --------------------------------- |
| `makeBundleResourceUnion(...schemas)`       | Build discriminated union of bundle resources | ✅ Only imports specified schemas |
| `createBundleSchema({ resource })`          | Bundle with typed resources only              | ✅ Only imports what you specify  |
| `createBundleSchema({ resource, outcome })` | Bundle with typed resources and outcomes      | ✅ Only imports what you specify  |
| `createResourceListSchema()` (from `/all`)  | Pre-built union of every FHIR resource        | ❌ Imports all resource schemas   |
| `createBundleSchema()` (no options)         | Default bundle with `unknown` resource types  | ✅ Minimal bundle size            |

---

## Recommended Decision Tree

1. **Do you know which resource types appear in your bundles?**

   - Yes → Use `makeBundleResourceUnion()` with specific schemas
   - No → Use `createResourceListSchema()` from `/all`

2. **Do you work with specific bundle types?**

   - Yes → Create type-specific bundle schemas (Pattern B)
   - No → Use general-purpose bundle configuration

3. **Do your bundle resources have contained resources?**

   - Yes → Configure contained resources first, then use in bundle resources
   - No → Use resources without contained configuration

4. **Do you handle transaction responses with outcomes?**

   - Yes → Configure separate `resource` and `outcome` unions
   - No → Only configure `resource` union

5. **Is this a production application?**
   - Yes → Set up centralized bundle registry (Pattern A)
   - No/Prototype → Use inline bundle configuration

This approach ensures you get the right balance of type safety, bundle size, and maintainability for your bundle processing needs, while handling the additional complexity of potential contained resources within bundle resources.
