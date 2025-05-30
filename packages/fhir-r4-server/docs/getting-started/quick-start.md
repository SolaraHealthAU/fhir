# Quick Start

This guide will get you up and running with a basic FHIR server in just a few minutes.

## Minimal Example

Here's a complete, minimal FHIR server that supports reading Patient resources:

```typescript
import express from 'express';
import type { Patient } from '@solarahealth/fhir-r4';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import { z } from 'zod';

const app = express();
app.use(express.json());

// Define your context type
interface AppContext {
  userId?: string;
}

// Create context factory
const createContext = async ({ req }) => ({
  userId: req.headers['x-user-id'] as string,
});

// Sample data store
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
const fhirServer = RestServer.init<AppContext>({
  capabilities: {
    resourceType: 'CapabilityStatement',
    status: 'active',
    date: new Date().toISOString(),
    kind: 'instance',
    fhirVersion: '4.0.1',
    format: ['json'],
    rest: [
      {
        mode: 'server',
        resource: [patientResource],
      },
    ],
  },
});

// Mount FHIR middleware
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

app.listen(3000, () => {
  console.log('FHIR server running on http://localhost:3000');
});
```

## Running the Example

1. **Save the code** above to a file called `server.ts`

2. **Run the server**:

   ```bash
   npx ts-node server.ts
   ```

3. **Test the endpoints**:

   **Get capability statement:**

   ```bash
   curl http://localhost:3000/fhir/metadata
   ```

   **Read a patient:**

   ```bash
   curl http://localhost:3000/fhir/Patient/123
   ```

   **Test error handling:**

   ```bash
   curl http://localhost:3000/fhir/Patient/999
   ```

## Understanding the Code

Let's break down what's happening in this example:

### 1. Context Definition

```typescript
interface AppContext {
  userId?: string;
}

const createContext = async ({ req }) => ({
  userId: req.headers['x-user-id'] as string,
});
```

The context provides request-scoped data to your resource handlers. This is where you can add database connections, user authentication, or any other request-specific data.

### 2. Resource Definition

```typescript
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
```

The builder pattern makes it easy to define FHIR resources and their capabilities. Here we're:

- Defining a Patient resource
- Adding read capability with ID validation
- Implementing the retrieval logic

### 3. Server Initialization

```typescript
const fhirServer = RestServer.init<AppContext>({
  capabilities: {
    // FHIR capability statement configuration
  },
});
```

This creates a FHIR server instance with your capability statement configuration.

### 4. Express Integration

```typescript
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));
```

The middleware integrates seamlessly with your existing Express application.

## Adding Search Capability

Let's extend our Patient resource to support search using the proper search parameter patterns:

```typescript
// First, define search parameters
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

const patientSearchParams = [
  {
    name: 'name',
    documentation: 'Patient name search',
    type: 'string',
  },
  {
    name: 'family',
    documentation: 'Family name search',
    type: 'string',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Generate search schema
const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);

const patientResource = builder
  .defineResource('Patient')
  .searchParams(patientSearchParams)
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id) => {
      const patient = patients[id];
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .search((builder) =>
    builder.params(patientSearchSchema).list(async (params, context, req) => {
      // Helper functions for working with double-array search parameters
      const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
        return param?.[0]?.[0];
      };

      // Filter patients based on search parameters
      const results = Object.values(patients).filter((patient) => {
        const nameQuery = getFirstValue(params.name);
        if (nameQuery && !patient.name?.[0]?.given?.[0]?.includes(nameQuery.value)) {
          return false;
        }

        const familyQuery = getFirstValue(params.family);
        if (familyQuery && patient.name?.[0]?.family !== familyQuery.value) {
          return false;
        }

        return true;
      });

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.length,
        entry: results.map((resource) => ({ resource })),
      };
    }),
  )
  .build();
```

Now you can search for patients:

```bash
# Search by first name
curl "http://localhost:3000/fhir/Patient?name=John"

# Search by family name
curl "http://localhost:3000/fhir/Patient?family=Doe"
```

## Next Steps

Now that you have a basic FHIR server running, explore these topics:

- [Core Concepts](./core-concepts.md) - Understand the fundamental concepts
- [Builder API](../guides/builder-api.md) - Learn more about the resource builder
- [Resource Operations](../guides/resource-operations.md) - Implement more FHIR operations
- [Database Integration](../guides/database-integration.md) - Connect to your database
- [Deployment](../guides/deployment.md) - Deploy your FHIR server
