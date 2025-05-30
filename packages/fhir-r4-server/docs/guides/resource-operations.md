# Resource Operations Guide

This guide covers how to implement different FHIR resource operations using the builder API. Each operation follows FHIR R4 specifications and provides type-safe implementations.

## Operation Types

FHIR defines several types of operations. Here's what's currently supported and what's planned:

### Instance Level Operations

- ✅ **read**: Retrieve a resource by ID
- ⏳ **vread**: Retrieve a specific version of a resource (planned)
- ⏳ **update**: Update a resource (planned)
- ⏳ **patch**: Partial update of a resource (planned)
- ⏳ **delete**: Delete a resource (planned)
- ⏳ **history**: Retrieve change history for a resource (planned)

### Type Level Operations

- ⏳ **create**: Create new resources (planned)
- ✅ **search**: Search for resources with parameters
- ⏳ **history**: Retrieve change history for a resource type (planned)

## Read Operation

The read operation retrieves a single resource by its logical ID.

### Basic Implementation

```typescript
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      const patient = await context.database.patients.findById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .build();
```

### URL Pattern

```
GET [base]/Patient/123
```

### Advanced Read Implementation

```typescript
.read((builder) =>
  builder
    .id(z.string().uuid('Invalid patient ID format'))
    .retrieveWith(async (id, context) => {
      // Log the read operation
      context.logger.info(`Reading patient ${id}`);

      try {
        // Check permissions first
        await context.security.checkPermission('read', 'Patient', id);

        // Retrieve the resource
        const patient = await context.database.patients.findById(id);

        if (!patient) {
          throw new errors.ResourceNotFound('Patient', id);
        }

        // Apply business rules or transformations
        return await context.transformer.toFhir(patient);

      } catch (error) {
        if (error instanceof PermissionError) {
          throw new errors.Forbidden('Insufficient permissions to read patient');
        }
        if (error instanceof DatabaseError) {
          context.logger.error(`Database error reading patient ${id}:`, error);
          throw new errors.InternalServerError('Unable to retrieve patient');
        }
        throw error;
      }
    })
)
```

### Conditional Read

Enable conditional read with ETags for caching:

```typescript
const resource = builder
  .defineResource('Patient')
  .conditionalRead(true)
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      const patient = await context.database.patients.findById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }

      // Add meta information for versioning
      patient.meta = {
        versionId: patient.version.toString(),
        lastUpdated: patient.updatedAt.toISOString(),
      };

      return patient;
    }),
  )
  .build();
```

## Search Operation

Search operations allow clients to find resources using various parameters.

### Search Parameter Definitions

First, define your search parameters following the [Search Parameters](./search-parameters.md) guide:

```typescript
// patient-search-params.ts
import * as rest from '@solarahealth/fhir-r4-server';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

export const patientSearchParams = [
  {
    name: 'identifier',
    documentation: 'A patient identifier',
    type: 'token',
  },
  {
    name: 'name',
    documentation: 'A server defined search that matches name fields',
    type: 'string',
  },
  {
    name: 'family',
    documentation: 'A portion of the family name of the patient',
    type: 'string',
  },
  {
    name: 'given',
    documentation: 'A portion of the given name of the patient',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: "The patient's date of birth",
    type: 'date',
  },
  {
    name: 'gender',
    documentation: 'Gender of the patient',
    type: 'token',
  },
  {
    name: 'active',
    documentation: 'Whether the patient record is active',
    type: 'token',
  },
  {
    name: '_count',
    documentation: 'Number of results to return',
    type: 'number',
  },
  {
    name: '_sort',
    documentation: 'Sort order for results',
    type: 'string',
  },
  {
    name: '_include',
    documentation: 'Include related resources',
    type: 'special',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);
export type PatientSearchParams = rest.codecs.ParamsToShape<typeof patientSearchParams>;
```

### Basic Search Implementation

```typescript
import { patientSearchParams, patientSearchSchema } from './patient-search-params';

const patientResource = builder
  .defineResource('Patient')
  .searchParams(patientSearchParams)
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (context, params) => {
      const results = await context.database.patients.search(params);

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.total,
        entry: results.patients.map((patient) => ({
          resource: patient,
          search: { mode: 'match' },
        })),
      };
    }),
  )
  .build();
```

### URL Pattern

```
GET [base]/Patient?name=John&active=true
```

### Advanced Search with Proper Parameter Handling

```typescript
.search((builder) =>
  builder.params(patientSearchSchema).handler(async (context, params) => {
    // Helper functions for working with double-array search parameters
    const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
      return param?.[0]?.[0];
    };

    const getAllValues = <T>(param: T[][] | undefined): T[] => {
      return param?.flat() || [];
    };

    // Build query
    let query = context.database.patients.createQuery();

    // Handle string parameters
    const nameQuery = getFirstValue(params.name);
    if (nameQuery) {
      const searchTerm = nameQuery.value;
      if (nameQuery.op === 'exact') {
        query = query.whereRaw(
          "CONCAT(given_name, ' ', family_name) = ?",
          [searchTerm]
        );
      } else {
        const pattern = nameQuery.op === 'contains' ? `%${searchTerm}%` : `${searchTerm}%`;
        query = query.whereRaw(
          "CONCAT(given_name, ' ', family_name) ILIKE ?",
          [pattern]
        );
      }
    }

    const familyQuery = getFirstValue(params.family);
    if (familyQuery) {
      const pattern = familyQuery.op === 'exact' ? familyQuery.value :
                     familyQuery.op === 'contains' ? `%${familyQuery.value}%` : `${familyQuery.value}%`;
      const operator = familyQuery.op === 'exact' ? '=' : 'ILIKE';
      query = query.where('family_name', operator, pattern);
    }

    const givenQuery = getFirstValue(params.given);
    if (givenQuery) {
      const pattern = givenQuery.op === 'exact' ? givenQuery.value :
                     givenQuery.op === 'contains' ? `%${givenQuery.value}%` : `${givenQuery.value}%`;
      const operator = givenQuery.op === 'exact' ? '=' : 'ILIKE';
      query = query.where('given_name', operator, pattern);
    }

    // Handle date parameters
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
        case 'le':
          query = query.where('birth_date', '<=', date);
          break;
        case 'gt':
          query = query.where('birth_date', '>', date);
          break;
        case 'ge':
          query = query.where('birth_date', '>=', date);
          break;
        case 'ne':
          query = query.where('birth_date', '!=', date);
          break;
      }
    }

    // Handle token parameters
    const genderQuery = getFirstValue(params.gender);
    if (genderQuery?.codingCodeOrIdentifierValue) {
      query = query.where('gender', genderQuery.codingCodeOrIdentifierValue);
    }

    const activeQuery = getFirstValue(params.active);
    if (activeQuery?.codingCodeOrIdentifierValue) {
      query = query.where('active', activeQuery.codingCodeOrIdentifierValue === 'true');
    }

    // Handle multiple identifiers (OR logic)
    const allIdentifiers = getAllValues(params.identifier);
    if (allIdentifiers.length > 0) {
      query = query.where(function () {
        allIdentifiers.forEach((id) => {
          this.orWhere('identifier', id.codingCodeOrIdentifierValue);
        });
      });
    }

    // Apply sorting
    if (params._sort) {
      params._sort.forEach((sort) => {
        query = query.orderBy(sort.field, sort.direction);
      });
    } else {
      query = query.orderBy('updated_at', 'desc');
    }

    // Get total count (before pagination)
    const totalQuery = query.clone();
    const total = await totalQuery.count('* as count').first();

    // Apply pagination
    const count = params._count || 20;
    query = query.limit(count);

    // Execute query
    const patients = await query;

    // Build response bundle
    const baseUrl = context.request.baseUrl;
    const searchUrl = new URL(`${baseUrl}/Patient`);

    // Convert search parameters back to URL format for links
    const urlParams = new URLSearchParams();

    if (nameQuery) {
      let value = nameQuery.value;
      if (nameQuery.op !== 'startsWith') {
        value = `:${nameQuery.op}=${value}`;
      }
      urlParams.append('name', value);
    }

    if (familyQuery) {
      let value = familyQuery.value;
      if (familyQuery.op !== 'startsWith') {
        value = `:${familyQuery.op}=${value}`;
      }
      urlParams.append('family', value);
    }

    if (params._count) {
      urlParams.append('_count', params._count.toString());
    }

    const bundle: Bundle = {
      resourceType: 'Bundle',
      type: 'searchset',
      total: total.count,
      link: [
        {
          relation: 'self',
          url: `${searchUrl}?${urlParams}`,
        },
      ],
      entry: patients.map(patient => ({
        resource: await context.transformer.toFhir(patient),
        search: { mode: 'match' },
        fullUrl: `${baseUrl}/Patient/${patient.id}`,
      })),
    };

    return bundle;
  })
)
```

### Search with Includes

Support `_include` parameters for related resources:

```typescript
.handler(async (context, params) => {
  // Helper function for working with double-array search parameters
  const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
    return param?.[0]?.[0];
  };

  const results = await context.database.patients.search(params);
  const entries = [];

  // Add matched patients
  for (const patient of results.patients) {
    entries.push({
      resource: patient,
      search: { mode: 'match' },
    });

    // Handle _include
    const includeQuery = getFirstValue(params._include);
    if (includeQuery && includeQuery === 'Patient:organization') {
      if (patient.managingOrganization?.reference) {
        const orgId = patient.managingOrganization.reference.split('/')[1];
        const organization = await context.database.organizations.findById(orgId);
        if (organization) {
          entries.push({
            resource: organization,
            search: { mode: 'include' },
          });
        }
      }
    }
  }

  return {
    resourceType: 'Bundle',
    type: 'searchset',
    total: results.total,
    entry: entries,
  };
})
```

## Search Parameters Configuration

Define supported search parameters for your resource using the proper search parameter patterns:

```typescript
import * as rest from '@solarahealth/fhir-r4-server';

// Define search parameters as constants
export const patientSearchParams = [
  {
    name: 'name',
    documentation: 'Combined name search',
    type: 'string',
  },
  {
    name: 'family',
    documentation: 'Family name',
    type: 'string',
  },
  {
    name: 'given',
    documentation: 'Given name',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: 'Birth date',
    type: 'date',
  },
  {
    name: 'gender',
    documentation: 'Gender',
    type: 'token',
  },
  {
    name: 'active',
    documentation: 'Active status',
    type: 'token',
  },
  {
    name: 'identifier',
    documentation: 'Business identifier',
    type: 'token',
  },
  {
    name: 'organization',
    documentation: 'Managing organization',
    type: 'reference',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Generate schema
export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);

// Use in resource
const resource = rest
  .resource('Patient')
  .searchParams(patientSearchParams)
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (context, params) => {
      // Implementation with proper parameter handling
    }),
  );
```

## Error Handling Patterns

### Common Error Scenarios

```typescript
.retrieveWith(async (id, context) => {
  try {
    // Validate ID format
    if (!isValidId(id)) {
      throw new errors.BadRequest(`Invalid ID format: ${id}`);
    }

    // Check permissions
    if (!await context.security.canRead('Patient', id)) {
      throw new errors.Forbidden('Insufficient permissions');
    }

    // Attempt to retrieve
    const patient = await context.database.patients.findById(id);

    if (!patient) {
      throw new errors.ResourceNotFound('Patient', id);
    }

    return patient;

  } catch (error) {
    // Handle specific error types
    if (error instanceof ValidationError) {
      throw new errors.BadRequest(`Validation failed: ${error.message}`);
    }

    if (error instanceof DatabaseTimeout) {
      throw new errors.InternalServerError('Database timeout');
    }

    if (error instanceof NetworkError) {
      throw new errors.InternalServerError('External service unavailable');
    }

    // Re-throw FHIR errors
    if (error instanceof errors.FhirError) {
      throw error;
    }

    // Log unexpected errors
    context.logger.error('Unexpected error in patient read:', error);
    throw new errors.InternalServerError('An unexpected error occurred');
  }
})
```

## Performance Considerations

### Database Optimization

```typescript
.searchWith(async (params, context) => {
  // Use database indexes effectively
  let query = context.database.patients
    .select('id', 'given_name', 'family_name', 'birth_date', 'gender', 'active')
    .where('tenant_id', context.tenantId); // Always filter by tenant

  // Add indexes for common search patterns
  if (params.name) {
    // Ensure there's an index on (tenant_id, given_name, family_name)
    query = query.whereRaw(
      "to_tsvector('english', given_name || ' ' || family_name) @@ plainto_tsquery(?)",
      [params.name]
    );
  }

  // Use efficient date queries
  if (params.birthdate) {
    // Ensure there's an index on (tenant_id, birth_date)
    query = query.where('birth_date', params.birthdate);
  }

  return query;
})
```

### Caching Strategies

```typescript
.retrieveWith(async (id, context) => {
  // Check cache first
  const cacheKey = `patient:${id}`;
  const cached = await context.cache.get(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  // Retrieve from database
  const patient = await context.database.patients.findById(id);

  if (!patient) {
    throw new errors.ResourceNotFound('Patient', id);
  }

  // Cache for 5 minutes
  await context.cache.set(cacheKey, JSON.stringify(patient), 300);

  return patient;
})
```

## Testing Operations

### Unit Testing Read Operations

```typescript
describe('Patient Read Operation', () => {
  it('should return patient when found', async () => {
    const mockContext = {
      database: {
        patients: {
          findById: jest.fn().mockResolvedValue(mockPatient),
        },
      },
    };

    const result = await patientReadHandler('123', mockContext);

    expect(result).toEqual(mockPatient);
    expect(mockContext.database.patients.findById).toHaveBeenCalledWith('123');
  });

  it('should throw ResourceNotFound when patient not found', async () => {
    const mockContext = {
      database: {
        patients: {
          findById: jest.fn().mockResolvedValue(null),
        },
      },
    };

    await expect(patientReadHandler('999', mockContext)).rejects.toThrow(errors.ResourceNotFound);
  });
});
```

### Integration Testing

```typescript
describe('Patient API Integration', () => {
  it('should handle patient search with pagination', async () => {
    const response = await request(app)
      .get('/fhir/Patient?name=John&_count=10&_offset=20')
      .expect(200);

    expect(response.body.resourceType).toBe('Bundle');
    expect(response.body.type).toBe('searchset');
    expect(response.body.entry).toHaveLength(10);
    expect(response.body.link).toContainEqual({
      relation: 'next',
      url: expect.stringContaining('_offset=30'),
    });
  });
});
```

## Next Steps

- Learn about [Database Integration](./database-integration.md) patterns
- Explore [Error Handling](./error-handling.md) strategies
- Check out [Deployment](./deployment.md) best practices
- See [Context Management](./context.md) for request handling
