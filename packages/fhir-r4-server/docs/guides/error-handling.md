# Error Handling Guide

This guide covers how to handle errors in a FHIR-compliant way, providing meaningful error responses and maintaining good user experience.

## FHIR Error Model

FHIR uses `OperationOutcome` resources to communicate errors, warnings, and information to clients. This package automatically converts thrown errors into appropriate FHIR responses through built-in error middleware.

## Automatic Error Handling

The package includes automatic error middleware that converts errors into FHIR-compliant responses:

- **ZOD validation errors** are automatically converted to `OperationOutcome` with detailed field validation information
- **Built-in error classes** are mapped to appropriate HTTP status codes
- **Unknown errors** are safely handled as 500 Internal Server Error responses

## ZOD Validation Errors

When using ZOD schemas for validation, any `ZodError` thrown in your handlers is automatically converted to a FHIR `OperationOutcome`:

```typescript
import { z } from 'zod';

const patientSearchSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  active: z.boolean().optional(),
});

.searchWith(async (params, context) => {
  // ZOD validation - errors automatically converted to OperationOutcome
  const validatedParams = patientSearchSchema.parse(params);

  // Continue with validated parameters...
})
```

**Automatic ZOD Error Response:**

```json
HTTP 400 Bad Request
{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "value",
      "details": {
        "text": "Name must be at least 2 characters"
      },
      "diagnostics": "schema validation",
      "expression": ["name"]
    },
    {
      "severity": "error",
      "code": "value",
      "details": {
        "text": "Date must be in YYYY-MM-DD format"
      },
      "diagnostics": "schema validation",
      "expression": ["birthdate"]
    }
  ]
}
```

The ZOD error conversion includes:

- **Field paths** in the `expression` field
- **Specific validation messages** in the `details.text`
- **Mapped FHIR codes** based on ZOD error types
- **Diagnostic context** indicating schema validation

## Built-in Error Classes

The package provides FHIR-compliant error classes that map to appropriate HTTP status codes:

```typescript
import * as errors from '@solarahealth/fhir-r4-server/errors';

// 400 Bad Request
throw new errors.BadRequest('Invalid parameter value');

// 404 Not Found
throw new errors.NotFound('Resource not found');
throw new errors.ResourceNotFound('Patient', '123');

// 405 Method Not Allowed
throw new errors.ResourceMethodNotAllowed('delete', 'Patient', '123');

// 400 Bad Request - Type/Format errors
throw new errors.ResourceTypeNotSupported('InvalidResource');
throw new errors.ResourceFormatNotSupported('Patient', 'invalid-format');

// 400 Bad Request - Validation
throw new errors.ResourceInvalid('Patient', 'Missing required field: name');

// 410 Gone
throw new errors.ResourceGone('Patient', '123');

// 500 Internal Server Error
throw new errors.InternalServerError('Database connection failed');
```

## Error Response Format

All errors are automatically converted to FHIR `OperationOutcome` responses by the error middleware:

```json
{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "not-found",
      "diagnostics": "Patient with ID '123' not found"
    }
  ]
}
```

## Error Middleware Mapping

The built-in error middleware automatically maps error types to HTTP status codes:

| Error Class                  | HTTP Status | FHIR Code           | Use Case                    |
| ---------------------------- | ----------- | ------------------- | --------------------------- |
| `BadRequest`                 | 400         | `invalid`           | Invalid request parameters  |
| `ResourceTypeNotSupported`   | 400         | `not-supported`     | Unsupported resource type   |
| `ResourceFormatNotSupported` | 400         | `not-supported`     | Unsupported format          |
| `ResourceInvalid`            | 400         | `invalid`           | Resource validation failed  |
| `NotFound`                   | 404         | `not-found`         | Generic not found           |
| `ResourceNotFound`           | 404         | `not-found`         | Specific resource not found |
| `ResourceMethodNotAllowed`   | 405         | `not-supported`     | Method not allowed          |
| `ResourceGone`               | 410         | `deleted`           | Resource deleted            |
| `InternalServerError`        | 500         | `exception`         | Server errors               |
| `ZodError`                   | 400         | `structure`/`value` | Validation errors           |

## Common Error Patterns

### Resource Not Found

When a requested resource doesn't exist:

```typescript
.retrieveWith(async (id, context) => {
  const patient = await context.database.patients.findById(id);

  if (!patient) {
    throw new errors.ResourceNotFound('Patient', id);
  }

  return patient;
})
```

**Response:**

```
HTTP 404 Not Found
{
  "resourceType": "OperationOutcome",
  "issue": [{
    "severity": "error",
    "code": "not-found",
    "diagnostics": "Resource 'Patient/ 123' not found"
  }]
}
```

### Input Validation with ZOD

Combine ZOD validation with custom business logic:

```typescript
import { z } from 'zod';

const createPatientSchema = z.object({
  name: z.array(z.object({
    family: z.string().min(1, 'Family name is required'),
    given: z.array(z.string()).min(1, 'At least one given name is required'),
  })).min(1, 'At least one name is required'),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Birth date must be YYYY-MM-DD'),
  gender: z.enum(['male', 'female', 'other', 'unknown']),
});

.createWith(async (resource, context) => {
  // Automatic ZOD validation
  const validatedPatient = createPatientSchema.parse(resource);

  // Additional business validation
  if (await context.database.patients.existsByName(validatedPatient.name)) {
    throw new errors.ResourceInvalid('Patient', 'Patient with this name already exists');
  }

  return await context.database.patients.create(validatedPatient);
})
```

### Method Not Allowed

When an operation is not supported for a resource:

```typescript
.deleteWith(async (id, context) => {
  // Check if deletion is allowed for this resource type
  if (!context.capabilities.supportsDelete('Patient')) {
    throw new errors.ResourceMethodNotAllowed('delete', 'Patient', id);
  }

  // Implementation continues...
})
```

### Database and External Service Errors

Handle infrastructure failures gracefully:

```typescript
.retrieveWith(async (id, context) => {
  try {
    const patient = await context.database.patients.findById(id);

    if (!patient) {
      throw new errors.ResourceNotFound('Patient', id);
    }

    return patient;
  } catch (error) {
    if (error instanceof DatabaseConnectionError) {
      context.logger.error('Database connection failed:', error);
      throw new errors.InternalServerError('Database temporarily unavailable');
    }

    if (error instanceof QueryTimeoutError) {
      context.logger.warn('Database query timeout:', error);
      throw new errors.InternalServerError('Request timeout - please try again');
    }

    throw error; // Re-throw unknown errors
  }
})
```

## Advanced Error Handling

### Custom OperationOutcome

For complex validation scenarios, you can throw custom `OperationOutcome` responses:

```typescript
import { OperationOutcome } from '@solarahealth/fhir-r4';

.createWith(async (resource, context) => {
  const issues: string[] = [];

  // Custom validation logic
  if (!resource.name?.length) {
    issues.push('Patient must have at least one name');
  }

  if (resource.birthDate && new Date(resource.birthDate) > new Date()) {
    issues.push('Birth date cannot be in the future');
  }

  if (issues.length > 0) {
    const outcome: OperationOutcome = {
      resourceType: 'OperationOutcome',
      issue: issues.map(issue => ({
        severity: 'error',
        code: 'invalid',
        details: { text: issue },
      })),
    };

    // Throw BadRequest with custom outcome
    const error = new errors.BadRequest('Validation failed');
    (error as any).operationOutcome = outcome;
    throw error;
  }

  // Continue with creation...
})
```

### Structured Error Details

Provide more detailed error information:

```typescript
.retrieveWith(async (id, context) => {
  const patient = await context.database.patients.findById(id);

  if (!patient) {
    // Enhanced error with location and expression
    const outcome: OperationOutcome = {
      resourceType: 'OperationOutcome',
      issue: [{
        severity: 'error',
        code: 'not-found',
        details: {
          text: `Patient with ID '${id}' was not found`,
          coding: [{
            system: 'http://example.com/error-codes',
            code: 'PATIENT_NOT_FOUND',
            display: 'Patient Not Found'
          }]
        },
        location: [`Patient.id`],
        expression: [`Patient.where(id='${id}')`]
      }]
    };

    const error = new errors.ResourceNotFound('Patient', id);
    (error as any).operationOutcome = outcome;
    throw error;
  }

  return patient;
})
```

## Error Context and Logging

### Structured Logging

Always log errors with appropriate context:

```typescript
.retrieveWith(async (id, context) => {
  try {
    // Implementation...
  } catch (error) {
    const errorContext = {
      operation: 'patient-read',
      patientId: id,
      userId: context.user?.id,
      requestId: context.requestId,
      timestamp: new Date().toISOString(),
    };

    if (error instanceof DatabaseError) {
      context.logger.error('Database error during patient read', {
        ...errorContext,
        error: {
          message: error.message,
          code: error.code,
          stack: error.stack,
        }
      });

      throw new errors.InternalServerError('Unable to retrieve patient data');
    }

    // Log unexpected errors
    context.logger.error('Unexpected error during patient read', {
      ...errorContext,
      error: {
        message: error.message,
        stack: error.stack,
      }
    });

    throw new errors.InternalServerError('An unexpected error occurred');
  }
})
```

### Error Correlation

Use correlation IDs to track errors across services:

```typescript
interface AppContext {
  requestId: string;
  correlationId: string;
  // ... other context
}

.retrieveWith(async (id, context) => {
  try {
    // Implementation...
  } catch (error) {
    // Include correlation ID in error response
    const outcome: OperationOutcome = {
      resourceType: 'OperationOutcome',
      issue: [{
        severity: 'error',
        code: 'exception',
        details: {
          text: 'An internal error occurred. Please contact support with this correlation ID.',
          coding: [{
            system: 'http://example.com/correlation',
            code: context.correlationId,
            display: 'Correlation ID'
          }]
        }
      }]
    };

    const error = new errors.InternalServerError('Internal error');
    (error as any).operationOutcome = outcome;
    throw error;
  }
})
```

## Error Recovery and Retry

### Transient Error Handling

For operations that might succeed on retry:

```typescript
async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      // Don't retry on client errors
      if (error instanceof errors.BadRequest ||
          error instanceof errors.ResourceNotFound) {
        throw error;
      }

      // Don't retry on last attempt
      if (attempt === maxRetries) {
        break;
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError;
}

// Usage
.retrieveWith(async (id, context) => {
  return withRetry(async () => {
    const patient = await context.database.patients.findById(id);
    if (!patient) {
      throw new errors.ResourceNotFound('Patient', id);
    }
    return patient;
  });
})
```

### Circuit Breaker Pattern

Prevent cascading failures:

```typescript
class CircuitBreaker {
  private failures = 0;
  private lastFailTime = 0;
  private state: 'closed' | 'open' | 'half-open' = 'closed';

  constructor(
    private threshold: number = 5,
    private timeout: number = 60000
  ) {}

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      if (Date.now() - this.lastFailTime > this.timeout) {
        this.state = 'half-open';
      } else {
        throw new errors.InternalServerError('Service temporarily unavailable');
      }
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = 'closed';
  }

  private onFailure() {
    this.failures++;
    this.lastFailTime = Date.now();

    if (this.failures >= this.threshold) {
      this.state = 'open';
    }
  }
}

// Usage in context
interface AppContext {
  circuitBreaker: CircuitBreaker;
  // ... other context
}

.retrieveWith(async (id, context) => {
  return context.circuitBreaker.execute(async () => {
    const patient = await context.database.patients.findById(id);
    if (!patient) {
      throw new errors.ResourceNotFound('Patient', id);
    }
    return patient;
  });
})
```

## Testing Error Scenarios

### Unit Testing

Test all error paths in your handlers:

```typescript
describe('Patient Read Error Handling', () => {
  it('should throw ResourceNotFound when patient does not exist', async () => {
    const mockContext = {
      database: {
        patients: {
          findById: jest.fn().mockResolvedValue(null),
        },
      },
    };

    await expect(patientReadHandler('999', mockContext)).rejects.toThrow(errors.ResourceNotFound);
  });

  it('should throw InternalServerError on database failure', async () => {
    const mockContext = {
      database: {
        patients: {
          findById: jest.fn().mockRejectedValue(new DatabaseError('Connection lost')),
        },
      },
      logger: {
        error: jest.fn(),
      },
    };

    await expect(patientReadHandler('123', mockContext)).rejects.toThrow(
      errors.InternalServerError,
    );

    expect(mockContext.logger.error).toHaveBeenCalled();
  });

  it('should convert ZOD errors to OperationOutcome', async () => {
    const zodError = new z.ZodError([
      {
        code: 'too_small',
        minimum: 2,
        type: 'string',
        inclusive: true,
        message: 'Name must be at least 2 characters',
        path: ['name'],
      },
    ]);

    const result = convertZodErrorToFhirOperationOutcome(zodError);

    expect(result.resourceType).toBe('OperationOutcome');
    expect(result.issue[0]).toEqual({
      severity: 'error',
      code: 'value',
      details: { text: 'Name must be at least 2 characters' },
      diagnostics: 'schema validation',
      expression: ['name'],
    });
  });
});
```

### Integration Testing

Test error responses at the HTTP level:

```typitten
describe('Error Response Format', () => {
  it('should return proper OperationOutcome for not found', async () => {
    const response = await request(app).get('/fhir/Patient/999').expect(404);

    expect(response.body).toEqual({
      resourceType: 'OperationOutcome',
      issue: [
        {
          severity: 'error',
          code: 'not-found',
          diagnostics: "Resource 'Patient/ 999' not found",
        },
      ],
    });
  });

  it('should return ZOD validation errors for bad parameters', async () => {
    const response = await request(app)
      .post('/fhir/Patient')
      .send({ name: 'x' }) // Too short
      .expect(400);

    expect(response.body.resourceType).toBe('OperationOutcome');
    expect(response.body.issue[0].severity).toBe('error');
    expect(response.body.issue[0].code).toBe('value');
    expect(response.body.issue[0].expression).toEqual(['name']);
  });
});
```

## Best Practices

### 1. Leverage ZOD for Input Validation

Use ZOD schemas for automatic validation with detailed error messages:

```typescript
const searchParamsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date format must be YYYY-MM-DD'),
  active: z.boolean().optional(),
});

.searchWith(async (params, context) => {
  // Automatic validation with detailed error paths
  const validatedParams = searchParamsSchema.parse(params);
  // Continue with validated parameters...
})
```

### 2. Use Appropriate Error Types

Choose the most specific error type:

```typescript
// ✅ Good - specific error
throw new errors.ResourceNotFound('Patient', id);

// ❌ Avoid - generic error
throw new errors.InternalServerError('Patient not found');
```

### 3. Don't Leak Internal Details

Never expose internal implementation details:

```typescript
// ❌ Bad - exposes internal details
throw new errors.InternalServerError(`Database query failed: ${dbError.message}`);

// ✅ Good - generic user-friendly message with proper logging
context.logger.error('Database error:', dbError);
throw new errors.InternalServerError('Unable to process request');
```

### 4. Provide Actionable Messages

Give users clear guidance on how to fix errors:

```typescript
// ✅ Good - actionable message
throw new errors.BadRequest('Name parameter must be at least 2 characters long');

// ❌ Bad - unclear message
throw new errors.BadRequest('Invalid name');
```

### 5. Trust the Error Middleware

Let the built-in middleware handle error conversion - don't manually create OperationOutcome responses unless you need custom formatting:

```typescript
// ✅ Good - let middleware handle conversion
throw new errors.ResourceNotFound('Patient', id);

// ❌ Unnecessary - unless you need custom formatting
const outcome = { resourceType: 'OperationOutcome', ... };
res.status(404).json(outcome);
```

## Next Steps

- Learn about [Database Integration](./database-integration.md) patterns
- Explore [Context Management](./context.md) for request handling
- Check out [Deployment](./deployment.md) strategies
- See [Builder API](./builder-api.md) for more patterns
