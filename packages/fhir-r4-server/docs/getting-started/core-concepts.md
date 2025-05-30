# Core Concepts

Understanding these core concepts will help you build effective FHIR servers with this package.

## 1. Resource Builder Pattern

The builder pattern is the primary way to define FHIR resources and their capabilities. It provides a fluent, type-safe API for configuring resources.

```typescript
import { builder } from '@solarahealth/fhir-r4-server';

const resource = builder
  .defineResource('Patient') // Define resource type
  .read(/* read handler */) // Add read capability
  .search(/* search handler */) // Add search capability
  .build(); // Build the resource definition
```

### Why the Builder Pattern?

- **Type Safety**: Each step in the builder provides appropriate TypeScript types
- **Discoverability**: IDE auto-completion guides you through available options
- **Flexibility**: Only define the capabilities your resource actually supports
- **Composability**: Easy to combine multiple capabilities

## 2. Context System

Context provides request-scoped data to your resource handlers. This is where you pass database connections, user authentication, configuration, and any other data that varies per request.

```typescript
interface AppContext {
  userId?: string;
  database: DatabaseConnection;
  requestId: string;
}

const createContext = async ({ req, res }) => {
  return {
    userId: extractUserId(req),
    database: await getDatabaseConnection(),
    requestId: generateRequestId(),
  };
};
```

### Context Best Practices

- **Keep it request-specific**: Only include data that varies per request
- **Use TypeScript**: Define your context interface for type safety
- **Handle async operations**: Context creation supports async operations
- **Error handling**: Context creation errors are automatically handled

## 3. Resource Handlers

Resource handlers implement the actual business logic for FHIR operations. Each handler type has a specific signature and purpose.

### Read Handler

Retrieves a single resource by ID:

```typescript
.read((builder) =>
  builder
    .id(z.string())  // Validate ID parameter
    .retrieveWith(async (id, context) => {
      const resource = await context.database.findById(id);
      if (!resource) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return resource;
    })
)
```

### Search Handler

Handles search requests with parameters:

```typescript
// First, define search parameters properly
import * as rest from '@solarahealth/fhir-r4-server';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

export const patientSearchParams = [
  {
    name: 'name',
    documentation: 'Patient name search',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: 'Patient birth date',
    type: 'date',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);

// Use in resource definition
.search((builder) =>
  builder.params(patientSearchSchema).list(async (params, context, req) => {
    const results = await context.database.searchPatients(params);
    return createSearchBundle(results);
  })
)
```

### Example Parameter Validation

```typescript
// For search parameters, use the proper search parameter definition pattern
export const patientSearchParams = [
  {
    name: 'name',
    documentation: 'Name cannot be empty',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: 'Birth date in YYYY-MM-DD format',
    type: 'date',
  },
  {
    name: 'active',
    documentation: 'Whether the patient is active',
    type: 'token',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);
```

## 4. Validation with Zod

This package uses [Zod](https://zod.dev/) for runtime validation. Zod provides:

- **Runtime type checking**: Validates data at runtime, not just compile time
- **Automatic error messages**: Clear error messages for validation failures
- **TypeScript integration**: Infers TypeScript types from schemas
- **Composability**: Easy to build complex validation schemas

```typescript
import { z } from 'zod';

// ID validation
.id(z.string())

// For search parameters, use the proper search parameter definition pattern
// (See examples above - don't use manual Zod schemas for search parameters)

// For resource validation (create/update operations), you can still use Zod:
const patientCreateSchema = z.object({
  name: z.array(z.object({
    family: z.string().min(1, 'Family name is required'),
    given: z.array(z.string()).min(1, 'At least one given name required'),
  })).min(1, 'At least one name is required'),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format').optional(),
  active: z.boolean().optional(),
});
```

## 5. Error Handling

FHIR-compliant error handling is built into the package:

```typescript
import { errors } from '@solarahealth/fhir-r4-server';

// Resource not found (404)
throw new errors.ResourceNotFound('Patient', '123');

// Bad request (400)
throw new errors.BadRequest('Invalid search parameter');

// Internal server error (500)
throw new errors.InternalServerError('Database connection failed');
```

Errors are automatically converted to FHIR OperationOutcome responses.

## 6. Capability Statement

The capability statement describes what your FHIR server can do. It's automatically generated based on the resources you define:

```typescript
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
        resource: [patientResource, observationResource],
      },
    ],
  },
});
```

The server automatically:

- Validates the capability statement
- Serves it at the `/metadata` endpoint
- Updates it based on your resource definitions

## 7. Express Integration

The package integrates seamlessly with Express.js as middleware:

```typescript
import express from 'express';

const app = express();
app.use(express.json()); // Required for JSON parsing

// Your existing routes
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// FHIR server middleware
app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: createContext,
  }),
);

// More routes...
app.listen(3000);
```

### Middleware Benefits

- **Non-invasive**: Works alongside your existing Express routes
- **Flexible mounting**: Mount at any path (e.g., `/fhir`, `/api/fhir`)
- **Standard Express**: Uses standard Express request/response patterns
- **Error handling**: Integrates with Express error handling

## 8. Type Safety

TypeScript is a first-class citizen in this package:

```typescript
// Resource types from @solarahealth/fhir-r4
import type { Patient, Observation } from '@solarahealth/fhir-r4';

// Your context is strongly typed
interface AppContext {
  database: DatabaseConnection;
  user: User;
}

// Handlers are type-safe
.retrieveWith(async (id: string, context: AppContext): Promise<Patient> => {
  // TypeScript ensures you return the correct resource type
  return await context.database.patients.findById(id);
})
```

## 9. Data Layer Agnostic

This package doesn't dictate how you store or retrieve data. You can use:

- **SQL databases** (PostgreSQL, MySQL, SQLite)
- **NoSQL databases** (MongoDB, DynamoDB)
- **ORMs** (Prisma, TypeORM, Sequelize)
- **External APIs** (REST, GraphQL)
- **In-memory storage** (for testing)

```typescript
// Your data access layer
interface DatabaseConnection {
  patients: {
    findById(id: string): Promise<Patient | null>;
    search(params: SearchParams): Promise<Patient[]>;
  };
}

// Use it in your handlers
.retrieveWith(async (id, context) => {
  return await context.database.patients.findById(id);
})
```

## Next Steps

Now that you understand the core concepts:

- Learn about the [Builder API](../guides/builder-api.md) in detail
- Explore [Resource Operations](../guides/resource-operations.md)
- See [Database Integration](../guides/database-integration.md) patterns
- Check out [Error Handling](../guides/error-handling.md) strategies
