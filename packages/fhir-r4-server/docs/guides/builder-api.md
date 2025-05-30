# Builder API Guide

The builder API is the core interface for defining FHIR resources and their capabilities. This guide covers everything you need to know about using the builder effectively.

## Overview

The builder provides a fluent, type-safe API for defining FHIR resources:

```typescript
import { builder } from '@solarahealth/fhir-r4-server';

const resource = builder
  .defineResource('Patient')
  .read(/* handler */)
  .search(/* handler */)
  .build();
```

## Defining Resources

### Basic Resource Definition

Start by defining the resource type:

```typescript
const patientBuilder = builder.defineResource('Patient');
```

The resource type must be a valid FHIR R4 resource type. TypeScript will provide auto-completion for available types.

### Supported Resource Types

The builder supports all FHIR R4 resource types, including:

- **Patient**: Patient demographics and information
- **Observation**: Measurements and simple assertions
- **Procedure**: Actions performed on patients
- **DiagnosticReport**: Clinical reports and findings
- **Medication**: Medication definitions
- **And many more...**

## Read Operations

The read operation retrieves a single resource by its ID.

### Basic Read Handler

```typescript
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      const patient = await context.database.findPatientById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .build();
```

### ID Validation

You can customize ID validation using Zod schemas:

```typescript
.read((builder) =>
  builder
    .id(z.string().uuid('ID must be a valid UUID'))
    .retrieveWith(async (id, context) => {
      // id is guaranteed to be a valid UUID
    })
)

// Or for numeric IDs
.read((builder) =>
  builder
    .id(z.string().regex(/^\d+$/, 'ID must be numeric'))
    .retrieveWith(async (id, context) => {
      // id is guaranteed to be numeric
    })
)
```

### Error Handling in Read

Always handle the case where a resource doesn't exist:

```typescript
.retrieveWith(async (id, context) => {
  try {
    const resource = await context.database.findById(id);

    if (!resource) {
      throw new errors.ResourceNotFound('Patient', id);
    }

    // Check permissions
    if (!context.user.canRead(resource)) {
      throw new errors.Forbidden('Insufficient permissions');
    }

    return resource;
  } catch (error) {
    if (error instanceof DatabaseError) {
      throw new errors.InternalServerError('Database error');
    }
    throw error; // Re-throw FHIR errors
  }
})
```

## Search Operations

Search operations allow querying for multiple resources with parameters.

### Basic Search Handler

```typescript
const patientResource = builder
  .defineResource('Patient')
  .search((builder) =>
    builder
      .parameters(
        z.object({
          name: z.string().optional(),
          birthdate: z.string().optional(),
          active: z.boolean().optional(),
        }),
      )
      .searchWith(async (params, context) => {
        const results = await context.database.searchPatients(params);

        return {
          resourceType: 'Bundle',
          type: 'searchset',
          total: results.length,
          entry: results.map((resource) => ({
            resource,
            search: { mode: 'match' },
          })),
        };
      }),
  )
  .build();
```

### Advanced Parameter Validation

Use Zod's powerful validation for complex search parameters:

```typescript
.parameters(z.object({
  // Text search with minimum length
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),

  // Date validation
  birthdate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .optional(),

  // Enum values
  gender: z.enum(['male', 'female', 'other', 'unknown']).optional(),

  // Boolean conversion
  active: z.preprocess(
    (val) => val === 'true' || val === true,
    z.boolean()
  ).optional(),

  // Array of values
  identifier: z.array(z.string()).optional(),
}))
```

### Pagination Support

Implement pagination in your search results:

```typescript
.parameters(z.object({
  name: z.string().optional(),
  _count: z.number().min(1).max(100).default(20).optional(),
  _offset: z.number().min(0).default(0).optional(),
}))
.searchWith(async (params, context) => {
  const { _count = 20, _offset = 0, ...searchParams } = params;

  const { results, total } = await context.database.searchPatients({
    ...searchParams,
    limit: _count,
    offset: _offset,
  });

  return {
    resourceType: 'Bundle',
    type: 'searchset',
    total,
    link: [
      {
        relation: 'self',
        url: `${context.baseUrl}/Patient?${new URLSearchParams(params)}`
      },
      // Add next/previous links as needed
    ],
    entry: results.map(resource => ({ resource })),
  };
})
```

### Complex Search Logic

Handle complex search scenarios:

```typescript
.searchWith(async (params, context) => {
  let query = context.database.patients.createQuery();

  // Text search across multiple fields
  if (params.name) {
    query = query.where(
      'given_name', 'ILIKE', `%${params.name}%`
    ).orWhere(
      'family_name', 'ILIKE', `%${params.name}%`
    );
  }

  // Date range search
  if (params.birthdate) {
    const date = new Date(params.birthdate);
    const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    query = query.whereBetween('birth_date', [date, nextDay]);
  }

  // Boolean filter
  if (params.active !== undefined) {
    query = query.where('active', params.active);
  }

  const results = await query.execute();

  return {
    resourceType: 'Bundle',
    type: 'searchset',
    entry: results.map(resource => ({ resource })),
  };
})
```

## Combining Operations

You can add multiple operations to a single resource:

```typescript
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      // Read implementation
    }),
  )
  .search((builder) =>
    builder
      .parameters(
        z.object({
          name: z.string().optional(),
        }),
      )
      .searchWith(async (params, context) => {
        // Search implementation
      }),
  )
  .build();
```

## Resource Configuration

### Conditional Read Support

Enable conditional read operations:

```typescript
const resource = builder
  .defineResource('Patient')
  .conditionalRead(true)
  .read(/* handler */)
  .build();
```

### Search Parameters Configuration

Define which search parameters your resource supports:

```typescript
const resource = builder
  .defineResource('Patient')
  .searchParams(['name', 'birthdate', 'gender', 'active', 'identifier'])
  .search(/* handler */)
  .build();
```

## Advanced Patterns

### Resource Factory Pattern

Create reusable resource builders:

```typescript
function createPatientResource(database: DatabaseConnection) {
  return builder
    .defineResource('Patient')
    .read((builder) =>
      builder.id(z.string()).retrieveWith(async (id) => {
        return await database.patients.findById(id);
      }),
    )
    .search((builder) =>
      builder
        .parameters(
          z.object({
            name: z.string().optional(),
          }),
        )
        .searchWith(async (params) => {
          const results = await database.patients.search(params);
          return {
            resourceType: 'Bundle',
            type: 'searchset',
            entry: results.map((resource) => ({ resource })),
          };
        }),
    )
    .build();
}
```

### Generic Resource Builder

Create generic builders for common patterns:

```typescript
function createBasicResource<T extends Resource>(
  resourceType: string,
  dataAccess: ResourceDataAccess<T>,
) {
  return builder
    .defineResource(resourceType)
    .read((builder) =>
      builder.id(z.string()).retrieveWith(async (id, context) => {
        const resource = await dataAccess.findById(id, context);
        if (!resource) {
          throw new errors.ResourceNotFound(resourceType, id);
        }
        return resource;
      }),
    )
    .build();
}
```

### Middleware Pattern

Add common logic to all handlers:

```typescript
function withAuth<T>(
  handler: (params: T, context: AuthenticatedContext) => Promise<any>
) {
  return async (params: T, context: AppContext) => {
    if (!context.user) {
      throw new errors.Unauthorized('Authentication required');
    }

    const authenticatedContext: AuthenticatedContext = {
      ...context,
      user: context.user,
    };

    return handler(params, authenticatedContext);
  };
}

// Usage
.retrieveWith(withAuth(async (id, context) => {
  // context.user is guaranteed to exist
  return await context.database.findById(id);
}))
```

## Best Practices

### 1. Use Strong Typing

Always define proper TypeScript interfaces:

```typescript
interface AppContext {
  database: DatabaseConnection;
  user?: User;
  requestId: string;
}

const resource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder
      .id(z.string())
      .retrieveWith(async (id: string, context: AppContext): Promise<Patient> => {
        // Implementation
      }),
  )
  .build();
```

### 2. Validate Early

Use Zod's validation features to catch errors early:

```typescript
.parameters(z.object({
  name: z.string().min(1).max(100),
  birthdate: z.string().datetime().optional(),
}).refine(data => {
  // Custom validation logic
  return data.name || data.birthdate;
}, {
  message: "Either name or birthdate must be provided"
}))
```

### 3. Handle Errors Gracefully

Always provide meaningful error messages:

```typescript
.retrieveWith(async (id, context) => {
  try {
    const resource = await context.database.findById(id);
    if (!resource) {
      throw new errors.ResourceNotFound('Patient', id);
    }
    return resource;
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new errors.BadRequest(`Invalid data: ${error.message}`);
    }
    if (error instanceof DatabaseError) {
      throw new errors.InternalServerError('Database temporarily unavailable');
    }
    throw error;
  }
})
```

### 4. Use Consistent Patterns

Establish consistent patterns across your resources:

```typescript
// Create a base class or utility functions
class ResourceBuilder {
  static standardRead<T>(dataAccess: DataAccess<T>) {
    return (builder: any) =>
      builder.id(z.string().uuid()).retrieveWith(async (id: string, context: AppContext) => {
        const resource = await dataAccess.findById(id, context);
        if (!resource) {
          throw new errors.ResourceNotFound(dataAccess.resourceType, id);
        }
        return resource;
      });
  }
}
```

## Next Steps

- Learn about [Resource Operations](./resource-operations.md) in detail
- Explore [Database Integration](./database-integration.md) patterns
- Check out [Error Handling](./error-handling.md) strategies
- See [Context Management](./context.md) best practices
