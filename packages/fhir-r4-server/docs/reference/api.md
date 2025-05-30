# API Reference

Complete API reference for `@solarahealth/fhir-r4-server`.

## RestServer

The main class for creating and configuring FHIR servers.

### `RestServer.init<C>(options)`

Creates a new FHIR server instance.

**Type Parameters:**

- `C` - The type of your application context

**Parameters:**

- `options: RestServerOptions<C>` - Configuration options for the server

**Returns:** `RestServerInstance<C>`

**Example:**

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
        resource: [patientResource],
      },
    ],
  },
});
```

#### RestServerOptions<C>

```typescript
interface RestServerOptions<C> {
  capabilities: CapabilityStatement;
}
```

### `RestServer.expressMiddleware(server, options)`

Creates Express middleware for the FHIR server.

**Parameters:**

- `server: RestServerInstance<C>` - FHIR server instance
- `options: MiddlewareOptions<C>` - Middleware configuration

**Returns:** `RequestHandler` - Express middleware function

**Example:**

```typescript
app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: createContext,
  }),
);
```

#### MiddlewareOptions<C>

```typescript
interface MiddlewareOptions<C> {
  context: ContextFactory<C>;
}

type ContextFactory<C> = (params: ContextParams) => Promise<C> | C;

interface ContextParams {
  req: Request;
  res: Response;
}
```

## Builder API

The fluent API for defining FHIR resources and their capabilities.

### `builder.defineResource(resourceType)`

Starts building a resource definition.

**Parameters:**

- `resourceType: ResourceType` - FHIR resource type (e.g., 'Patient', 'Observation')

**Returns:** `ResourceBuilder<ResourceType>`

**Example:**

```typescript
import { builder } from '@solarahealth/fhir-r4-server';
// or: import { defineResource } from '@solarahealth/fhir-r4-server/builder';

const patientResource = builder.defineResource('Patient').read(/* handler */).build();
```

### ResourceBuilder Methods

#### `.read(handler)`

Adds read capability to the resource.

**Parameters:**

- `handler: (builder: ReadBuilder) => ReadBuilder` - Read operation handler

**Returns:** `ResourceBuilder` (for chaining)

**Example:**

```typescript
.read((builder) =>
  builder
    .id(z.string())
    .retrieveWith(async (id, context) => {
      // Implementation
    })
)
```

#### `.search(builder)`

Defines a search operation for the resource.

**Parameters:**

- `builder: (SearchBuilder) => SearchBuilder` - Function to configure the search operation

**Returns:** `ResourceBuilder` (for chaining)

**Example:**

```typescript
.search((builder) =>
  builder.params(patientSearchSchema).list(async (params, context, req) => {
    // Implementation
  })
)
```

#### `.conditionalRead(enabled)`

Enables or disables conditional read support.

**Parameters:**

- `enabled: boolean` - Whether to enable conditional read

**Returns:** `ResourceBuilder` (for chaining)

#### `.searchParams(params)`

Defines supported search parameters using the proper search parameter definition pattern.

**Parameters:**

- `params: ReadonlyArray<CapabilityStatementSearchParam>` - Array of search parameter definitions

**Returns:** `ResourceBuilder` (for chaining)

**Example:**

```typescript
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

const patientSearchParams = [
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

.searchParams(patientSearchParams)
```

#### `.build()`

Builds the final resource definition.

**Returns:** `ResourceDefinition`

## Read Operation Builder

### ReadBuilder

#### `.id(schema)`

Defines ID parameter validation.

**Parameters:**

- `schema: ZodSchema` - Zod schema for ID validation

**Returns:** `ReadBuilder`

**Example:**

```typescript
.id(z.string().uuid('ID must be a valid UUID'))
```

#### `.retrieveWith(handler)`

Defines the read operation implementation.

**Parameters:**

- `handler: ReadHandler<C>` - Function to retrieve the resource

**Returns:** `ReadBuilder`

```typescript
type ReadHandler<C> = (id: string, context: C) => Promise<Resource>;
```

**Example:**

```typescript
.retrieveWith(async (id, context) => {
  const resource = await context.database.findById(id);
  if (!resource) {
    throw new errors.ResourceNotFound('Patient', id);
  }
  return resource;
})
```

## Search Operation Builder

### SearchBuilder

#### `.params(schema)`

Defines search parameter validation schema using the generated schema from search parameter definitions.

**Parameters:**

- `schema: ZodSchema` - Generated Zod schema from search parameter definitions

**Returns:** `SearchBuilder`

**Example:**

```typescript
// First define search parameters
const patientSearchParams = [
  {
    name: 'name',
    documentation: 'Patient name',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: 'Patient birth date',
    type: 'date',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Generate schema
const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);

// Use in builder
.params(patientSearchSchema)
```

#### `.list(handler)`

Defines the search operation implementation.

**Parameters:**

- `handler: SearchHandler<C>` - Function to perform the search

**Returns:** `SearchBuilder`

```typescript
type SearchHandler<C> = (
  params: ParamsOut,
  context: C,
  req: { query: Record<string, string | string[]> },
) => Promise<Bundle>;
```

**Example:**

```typescript
.list(async (params, context, req) => {
  // Helper functions for parameter handling
  const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
    return param?.[0]?.[0];
  };

  const results = await context.database.search(params);
  return {
    resourceType: 'Bundle',
    type: 'searchset',
    entry: results.map(resource => ({ resource })),
  };
})
```

## Error Classes

FHIR-compliant error classes for handling different error scenarios.

### `errors.ResourceNotFound(resourceType, id, outcome?)`

Represents a 404 Not Found error.

**Parameters:**

- `resourceType: string` - Type of resource that was not found
- `id: string` - ID of the resource that was not found
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

**Example:**

```typescript
throw new errors.ResourceNotFound('Patient', '123');
```

### `errors.BadRequest(message, outcome?)`

Represents a 400 Bad Request error.

**Parameters:**

- `message: string` - Error message
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

**Example:**

```typescript
throw new errors.BadRequest('Invalid parameter format');
```

### `errors.Unauthorized(message, outcome?)`

Represents a 401 Unauthorized error.

**Parameters:**

- `message: string` - Error message
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

### `errors.Forbidden(message, outcome?)`

Represents a 403 Forbidden error.

**Parameters:**

- `message: string` - Error message
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

### `errors.Conflict(message, outcome?)`

Represents a 409 Conflict error.

**Parameters:**

- `message: string` - Error message
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

### `errors.UnprocessableEntity(message, outcome?)`

Represents a 422 Unprocessable Entity error.

**Parameters:**

- `message: string` - Error message
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

### `errors.InternalServerError(message, outcome?)`

Represents a 500 Internal Server Error.

**Parameters:**

- `message: string` - Error message
- `outcome?: OperationOutcome` - Optional custom OperationOutcome

## Type Definitions

### Resource Types

The package supports all FHIR R4 resource types:

```typescript
type ResourceType =
  | 'Patient'
  | 'Observation'
  | 'Procedure'
  | 'DiagnosticReport'
  | 'Medication'
  | 'MedicationRequest'
  | 'Condition'
  | 'Encounter'
  | 'Practitioner'
  | 'Organization';
// ... and many more
```

### Bundle

FHIR Bundle resource for search results:

```typescript
interface Bundle {
  resourceType: 'Bundle';
  type: 'searchset' | 'collection' | 'transaction' | 'batch';
  total?: number;
  link?: BundleLink[];
  entry?: BundleEntry[];
}

interface BundleLink {
  relation: string;
  url: string;
}

interface BundleEntry {
  resource?: Resource;
  search?: {
    mode: 'match' | 'include';
  };
  fullUrl?: string;
}
```

### OperationOutcome

FHIR OperationOutcome for error responses:

```typescript
interface OperationOutcome {
  resourceType: 'OperationOutcome';
  issue: OperationOutcomeIssue[];
}

interface OperationOutcomeIssue {
  severity: 'error' | 'warning' | 'information';
  code: string;
  details?: {
    text?: string;
    coding?: Coding[];
  };
  location?: string[];
  expression?: string[];
}
```

### CapabilityStatement

FHIR CapabilityStatement describing server capabilities:

```typescript
interface CapabilityStatement {
  resourceType: 'CapabilityStatement';
  status: 'active' | 'draft' | 'retired';
  date: string;
  kind: 'instance' | 'capability' | 'requirements';
  fhirVersion: string;
  format: string[];
  rest?: CapabilityStatementRest[];
}

interface CapabilityStatementRest {
  mode: 'client' | 'server';
  resource?: CapabilityStatementResource[];
}

interface CapabilityStatementResource {
  type: string;
  interaction?: CapabilityStatementInteraction[];
  searchParam?: CapabilityStatementSearchParam[];
  conditionalRead?: 'not-supported' | 'modified-since' | 'not-match' | 'full-support';
}
```

## Advanced Usage

### Custom Context Types

Define your application context interface:

```typescript
interface AppContext {
  database: DatabaseConnection;
  user?: User;
  logger: Logger;
  requestId: string;
}

const createContext = async ({ req, res }): Promise<AppContext> => {
  return {
    database: await getDatabaseConnection(),
    user: await getAuthenticatedUser(req),
    logger: createLogger(),
    requestId: generateRequestId(),
  };
};
```

### Resource Validation

Use Zod for comprehensive parameter validation:

```typescript
import { z } from 'zod';

const searchParamsSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .optional(),

  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .optional(),

  gender: z.enum(['male', 'female', 'other', 'unknown']).optional(),

  active: z.preprocess((val) => val === 'true' || val === true, z.boolean()).optional(),

  _count: z
    .number()
    .min(1, 'Count must be at least 1')
    .max(100, 'Count must not exceed 100')
    .default(20)
    .optional(),

  _offset: z.number().min(0, 'Offset must be non-negative').default(0).optional(),
});
```

### Custom Error Handling

Create custom error types extending the base FHIR errors:

```typescript
import { OperationOutcome } from '@solarahealth/fhir-r4';
import { errors } from '@solarahealth/fhir-r4-server';

class ValidationError extends errors.BadRequest {
  constructor(issues: string[]) {
    const outcome: OperationOutcome = {
      resourceType: 'OperationOutcome',
      issue: issues.map((issue) => ({
        severity: 'error',
        code: 'invalid',
        details: { text: issue },
      })),
    };

    super('Validation failed', outcome);
  }
}

// Usage
if (validationErrors.length > 0) {
  throw new ValidationError(validationErrors);
}
```

### Response Transformation

Transform resources before returning them:

```typescript
.retrieveWith(async (id, context) => {
  const resource = await context.database.findById(id);

  if (!resource) {
    throw new errors.ResourceNotFound('Patient', id);
  }

  // Transform for specific user context
  return await context.transformer.transform(resource, {
    includeFields: context.user.permissions,
    redactSensitive: !context.user.isAdmin,
  });
})
```

## Utility Functions

### Type Guards

```typescript
import { Resource } from '@solarahealth/fhir-r4';

function isPatient(resource: Resource): resource is Patient {
  return resource.resourceType === 'Patient';
}

function isBundle(resource: Resource): resource is Bundle {
  return resource.resourceType === 'Bundle';
}
```

### Response Builders

```typescript
function createSearchBundle(
  resources: Resource[],
  total: number,
  baseUrl: string,
  params: any,
): Bundle {
  return {
    resourceType: 'Bundle',
    type: 'searchset',
    total,
    link: [
      {
        relation: 'self',
        url: `${baseUrl}?${new URLSearchParams(params)}`,
      },
    ],
    entry: resources.map((resource) => ({
      resource,
      search: { mode: 'match' },
    })),
  };
}
```

## Migration Guide

### From Other FHIR Libraries

If migrating from other FHIR server libraries:

1. **Replace server setup** with `RestServer.init()`
2. **Convert resource handlers** to use the builder pattern
3. **Update error handling** to use the provided error classes
4. **Migrate context** to the new context system

### Breaking Changes

When upgrading between versions, check for:

- Changes to the builder API
- New required parameters
- Deprecated methods
- Type definition updates

## Performance Tips

### Database Optimization

- Use proper indexes for search parameters
- Implement connection pooling
- Cache frequently accessed resources
- Use pagination for large result sets

### Memory Management

- Avoid loading large datasets into memory
- Use streaming for large responses
- Implement proper garbage collection

### Network Optimization

- Enable compression
- Use HTTP/2 when possible
- Implement proper caching headers
- Minimize response payload size

## Debugging

### Enable Debug Logging

```typescript
import debug from 'debug';

const debugFhir = debug('fhir:server');

// In your handlers
debugFhir('Processing read request for Patient %s', id);
```

### Error Tracking

```typescript
.retrieveWith(async (id, context) => {
  try {
    return await context.database.findById(id);
  } catch (error) {
    context.logger.error('Database error', {
      operation: 'patient-read',
      patientId: id,
      error: error.message,
      stack: error.stack,
    });
    throw new errors.InternalServerError('Unable to retrieve patient');
  }
})
```

## Examples

See the [examples directory](../../examples/) for complete working examples:

- Basic Patient API
- Advanced search with filters
- Multi-resource FHIR server
- External API integration
- Custom authentication
- Performance optimization

## Support

For questions and support:

- 📖 [Documentation](../index.md)
- 🐛 [Issue Tracker](https://github.com/SolaraHealthAU/fhir/issues)
- 💬 [Discussions](https://github.com/SolaraHealthAU/fhir/discussions)
