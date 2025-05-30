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
    const patient = await context.database.patients.findById(id);

    if (!patient) {
      throw new errors.ResourceNotFound('Patient', id);
    }

    // Check permissions using context
    if (context.user && !await context.user.canReadResource('Patient', id)) {
      throw new errors.Forbidden('Insufficient permissions');
    }

    return patient;
  } catch (error) {
    // Log error with context information
    context.logger?.error('Failed to retrieve patient', {
      id,
      userId: context.user?.id,
      requestId: context.requestId,
      error: error.message,
    });

    if (error instanceof DatabaseError) {
      throw new errors.InternalServerError('Database temporarily unavailable');
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
      const count = params._count || 20;

      const { patients, total } = await context.database.patients.search({
        ...params,
        limit: count,
      });

      // Build URL for self link (if needed for your API)
      const baseUrl = context.request?.baseUrl;
      const selfUrl = baseUrl ? new URL(`${baseUrl}/Patient`) : null;

      // Convert params back to URL query format
      const nameQuery = getFirstValue(params.name);
      if (nameQuery && selfUrl) {
        let searchValue = nameQuery.value;
        if (nameQuery.op !== 'startsWith') {
          searchValue = `:${nameQuery.op}=${searchValue}`;
        }
        selfUrl.searchParams.set('name', searchValue);
      }

      if (params._count && selfUrl) {
        selfUrl.searchParams.set('_count', params._count.toString());
      }

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total,
        link: selfUrl
          ? [
              {
                relation: 'self',
                url: selfUrl.toString(),
              },
              // Add next/previous links as needed
            ]
          : undefined,
        entry: patients.map((resource) => ({ resource })),
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
```

For the handler implementation, see the complete example in the Basic Search Handler section above.

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

### Context-Based Resource Pattern

Leverage the context system for clean resource implementations:

```typescript
interface AppContext extends Context {
  database: {
    patients: PatientRepository;
    practitioners: PractitionerRepository;
  };
  user?: AuthenticatedUser;
  requestId: string;
}

const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string().uuid()).retrieveWith(async (id, context) => {
      const patient = await context.database.patients.findById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (context, params) => {
      const results = await context.database.patients.search(params);
      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.total,
        entry: results.patients.map((resource) => ({ resource })),
      };
    }),
  )
  .build();
```

### Authorization Middleware Pattern

Use context for consistent authorization across resources:

```typescript
interface AuthenticatedContext extends Context {
  user: AuthenticatedUser; // Non-optional when using this pattern
  database: DatabaseConnection;
}

// Helper function to ensure authentication
function requireAuth<T extends any[], R>(
  handler: (...args: [...T, AuthenticatedContext]) => Promise<R>,
): (...args: [...T, Context]) => Promise<R> {
  return async (...args) => {
    const context = args[args.length - 1] as Context;

    if (!context.user) {
      throw new errors.Unauthorized('Authentication required');
    }

    const authenticatedContext: AuthenticatedContext = {
      ...context,
      user: context.user,
    };

    return handler(...(args.slice(0, -1) as T), authenticatedContext);
  };
}

// Usage
const securePatientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(
      requireAuth(async (id, context) => {
        // context.user is guaranteed to exist
        const canRead = await context.user.canReadPatient(id);
        if (!canRead) {
          throw new errors.Forbidden('Insufficient permissions');
        }

        return await context.database.patients.findById(id);
      }),
    ),
  )
  .build();
```

### Repository Pattern with Context

Structure your data access layer to work seamlessly with context:

```typescript
// repositories/patient-repository.ts
export class PatientRepository {
  constructor(private db: DatabaseConnection) {}

  async findById(id: string, userContext?: { userId: string }): Promise<Patient | null> {
    let query = this.db.patients.where({ id });

    // Apply user-specific filtering if context provided
    if (userContext?.userId) {
      query = query.where({ accessibleBy: userContext.userId });
    }

    return await query.first();
  }

  async search(params: PatientSearchParams, userContext?: { userId: string }) {
    // Implementation with user context consideration
  }
}

// context.ts
export const createContext = async ({ req }): Promise<AppContext> => {
  return {
    database: {
      patients: new PatientRepository(getDatabaseConnection()),
      practitioners: new PractitionerRepository(getDatabaseConnection()),
    },
    user: await authenticateUser(req.headers.authorization),
    requestId: generateRequestId(),
  };
};
```

## Best Practices

### 1. Use Strong Typing with Context

Always define proper TypeScript interfaces for your context:

```typescript
interface AppContext extends Context {
  database: {
    patients: PatientRepository;
    observations: ObservationRepository;
  };
  user?: AuthenticatedUser;
  requestId: string;
  logger: Logger;
}

const resource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder
      .id(z.string().uuid())
      .retrieveWith(async (id: string, context: AppContext): Promise<Patient> => {
        context.logger.info(`Reading patient ${id}`, { requestId: context.requestId });
        const patient = await context.database.patients.findById(id);

        if (!patient) {
          throw new errors.ResourceNotFound('Patient', id);
        }

        return patient;
      }),
  )
  .build();
```

### 2. Leverage Context for Shared Resources

Use context to manage database connections, caching, and other shared resources:

```typescript
// context.ts
export const createContext = async ({ req }): Promise<AppContext> => {
  const requestId = req.headers['x-request-id'] || generateId();

  return {
    database: {
      patients: new PatientRepository(getDbConnection()),
      observations: new ObservationRepository(getDbConnection()),
    },
    user: await authenticateUser(req.headers.authorization),
    requestId,
    logger: createLogger({ requestId }),
    cache: getCacheService(),
  };
};

// Usage in handlers
.retrieveWith(async (id, context) => {
  // Check cache first
  const cached = await context.cache.get(`patient:${id}`);
  if (cached) return cached;

  // Fetch from database
  const patient = await context.database.patients.findById(id);

  // Cache result
  if (patient) {
    await context.cache.set(`patient:${id}`, patient, 300);
  }

  return patient;
})
```

### 3. Validate Early with Zod

Use Zod's validation features to catch errors early:

```typescript
.id(z.string().uuid('ID must be a valid UUID'))
.params(z.object({
  name: z.string().min(1).max(100),
  birthdate: z.string().datetime().optional(),
}).refine(data => {
  // Custom validation logic
  return data.name || data.birthdate;
}, {
  message: "Either name or birthdate must be provided"
}))
```

### 4. Handle Errors Gracefully

Always provide meaningful error messages and use context for logging:

```typescript
.retrieveWith(async (id, context) => {
  try {
    const patient = await context.database.patients.findById(id);
    if (!patient) {
      throw new errors.ResourceNotFound('Patient', id);
    }
    return patient;
  } catch (error) {
    context.logger.error('Failed to retrieve patient', {
      id,
      error: error.message,
      requestId: context.requestId
    });

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

### 5. Use Consistent Context Patterns

Establish consistent patterns for context usage across your application:

```typescript
// Base context interface
interface BaseContext extends Context {
  requestId: string;
  logger: Logger;
  user?: AuthenticatedUser;
}

// Resource-specific context extensions
interface DatabaseContext extends BaseContext {
  database: DatabaseConnection;
}

interface CachedContext extends BaseContext {
  cache: CacheService;
  database: DatabaseConnection;
}

// Consistent error handling
function handleDatabaseError(error: unknown, context: BaseContext): never {
  context.logger.error('Database operation failed', {
    error: error instanceof Error ? error.message : 'Unknown error',
    requestId: context.requestId,
  });

  if (error instanceof DatabaseConnectionError) {
    throw new errors.ServiceUnavailable('Database temporarily unavailable');
  }

  throw new errors.InternalServerError('An unexpected error occurred');
}
```

## Next Steps

- Learn about [Resource Operations](./resource-operations.md) in detail
- Explore [Database Integration](./database-integration.md) patterns
- Check out [Error Handling](./error-handling.md) strategies
- See [Context Management](./context.md) best practices
