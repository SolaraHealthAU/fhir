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

### Search Parameter Setup

First, define your search parameters following the [Search Parameters](./search-parameters.md) guide:

```typescript
// patient-search-params.ts
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
  {
    name: 'active',
    documentation: 'Whether the patient is active',
    type: 'token',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);
export type PatientSearchParams = rest.codecs.ParamsToShape<typeof patientSearchParams>;
```

### Basic Search Handler

```typescript
import { patientSearchParams, patientSearchSchema } from './patient-search-params';

const patientResource = builder
  .defineResource('Patient')
  .searchParams(patientSearchParams)
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (context, params) => {
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

### Advanced Parameter Handling

Handle the double-array structure and parameter types correctly:

```typescript
.handler(async (context, params) => {
  // Helper functions for working with double-array search parameters
  const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
    return param?.[0]?.[0];
  };

  const getAllValues = <T>(param: T[][] | undefined): T[] => {
    return param?.flat() || [];
  };

  // Handle string parameters
  const nameQuery = getFirstValue(params.name);
  if (nameQuery) {
    console.log(`Searching for names that ${nameQuery.op} "${nameQuery.value}"`);
    // nameQuery.op could be 'startsWith', 'contains', or 'exact'
  }

  // Handle date parameters
  const birthdateQuery = getFirstValue(params.birthdate);
  if (birthdateQuery) {
    console.log(`Birthdate ${birthdateQuery.prefix} ${birthdateQuery.date.toISOString()}`);
    // birthdateQuery.prefix could be 'eq', 'lt', 'gt', etc.
  }

  // Handle token parameters
  const activeQuery = getFirstValue(params.active);
  if (activeQuery?.codingCodeOrIdentifierValue) {
    const isActive = activeQuery.codingCodeOrIdentifierValue === 'true';
    console.log(`Active status: ${isActive}`);
  }

  // Your search implementation here...
})
```

### Pagination Support

Implement pagination in your search results:

```typescript
// Add pagination parameters to your search params
export const patientSearchParams = [
  // ... other parameters
  {
    name: '_count',
    documentation: 'Number of results to return',
    type: 'number',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// In your search handler
.handler(async (context, params) => {
  const count = params._count || 20;

  const { results, total } = await context.database.searchPatients({
    ...params,
    limit: count,
  });

  // Build URL for self link
  const baseUrl = context.request.baseUrl;
  const selfUrl = new URL(`${baseUrl}/Patient`);

  // Convert params back to URL query format
  const nameQuery = getFirstValue(params.name);
  if (nameQuery) {
    let searchValue = nameQuery.value;
    if (nameQuery.op !== 'startsWith') {
      searchValue = `:${nameQuery.op}=${searchValue}`;
    }
    selfUrl.searchParams.set('name', searchValue);
  }

  if (params._count) {
    selfUrl.searchParams.set('_count', params._count.toString());
  }

  return {
    resourceType: 'Bundle',
    type: 'searchset',
    total,
    link: [
      {
        relation: 'self',
        url: selfUrl.toString(),
      },
      // Add next/previous links as needed
    ],
    entry: results.map(resource => ({ resource })),
  };
})
```

### Complex Search Logic

Handle complex search scenarios with proper parameter types:

```typescript
.handler(async (context, params) => {
  // Helper functions
  const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
    return param?.[0]?.[0];
  };

  let query = context.database.patients.createQuery();

  // Text search across multiple fields
  const nameQuery = getFirstValue(params.name);
  if (nameQuery) {
    const searchTerm = nameQuery.value;
    if (nameQuery.op === 'exact') {
      query = query.where('given_name', '=', searchTerm)
                   .orWhere('family_name', '=', searchTerm);
    } else {
      const pattern = nameQuery.op === 'contains' ? `%${searchTerm}%` : `${searchTerm}%`;
      query = query.where('given_name', 'ILIKE', pattern)
                   .orWhere('family_name', 'ILIKE', pattern);
    }
  }

  // Date range search
  const birthdateQuery = getFirstValue(params.birthdate);
  if (birthdateQuery) {
    const date = birthdateQuery.date;
    switch (birthdateQuery.prefix) {
      case 'eq':
        const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
        query = query.whereBetween('birth_date', [date, nextDay]);
        break;
      case 'lt':
        query = query.where('birth_date', '<', date);
        break;
      case 'gt':
        query = query.where('birth_date', '>', date);
        break;
      // ... other prefixes
    }
  }

  // Boolean filter
  const activeQuery = getFirstValue(params.active);
  if (activeQuery?.codingCodeOrIdentifierValue !== undefined) {
    const isActive = activeQuery.codingCodeOrIdentifierValue === 'true';
    query = query.where('active', isActive);
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
  .searchParams(patientSearchParams)
  .read((builder) =>
    builder.id(z.string()).handler(async (id, context) => {
      // Read implementation
    }),
  )
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (context, params) => {
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
  .searchParams(patientSearchParams)
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
