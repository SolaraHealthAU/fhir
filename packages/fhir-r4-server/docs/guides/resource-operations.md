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

### Basic Search Implementation

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

### Advanced Search with Pagination

```typescript
.search((builder) =>
  builder
    .parameters(z.object({
      // Standard search parameters
      name: z.string().min(1).optional(),
      family: z.string().min(1).optional(),
      given: z.string().min(1).optional(),
      birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
      gender: z.enum(['male', 'female', 'other', 'unknown']).optional(),
      active: z.boolean().optional(),

      // Pagination parameters
      _count: z.number().min(1).max(100).default(20).optional(),
      _offset: z.number().min(0).default(0).optional(),

      // Sorting
      _sort: z.string().optional(),
    }))
    .searchWith(async (params, context) => {
      const { _count = 20, _offset = 0, _sort, ...searchParams } = params;

      // Build query
      let query = context.database.patients.createQuery();

      // Apply search filters
      if (searchParams.name) {
        query = query.whereRaw(
          "CONCAT(given_name, ' ', family_name) ILIKE ?",
          [`%${searchParams.name}%`]
        );
      }

      if (searchParams.family) {
        query = query.where('family_name', 'ILIKE', `%${searchParams.family}%`);
      }

      if (searchParams.given) {
        query = query.where('given_name', 'ILIKE', `%${searchParams.given}%`);
      }

      if (searchParams.birthdate) {
        const date = new Date(searchParams.birthdate);
        const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
        query = query.whereBetween('birth_date', [date, nextDay]);
      }

      if (searchParams.gender) {
        query = query.where('gender', searchParams.gender);
      }

      if (searchParams.active !== undefined) {
        query = query.where('active', searchParams.active);
      }

      // Apply sorting
      if (_sort) {
        const [field, direction = 'asc'] = _sort.split(':');
        query = query.orderBy(field, direction);
      } else {
        query = query.orderBy('updated_at', 'desc');
      }

      // Get total count (before pagination)
      const totalQuery = query.clone();
      const total = await totalQuery.count('* as count').first();

      // Apply pagination
      query = query.limit(_count).offset(_offset);

      // Execute query
      const patients = await query;

      // Build response bundle
      const baseUrl = context.request.baseUrl;
      const searchUrl = new URL(`${baseUrl}/Patient`);
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchUrl.searchParams.set(key, value.toString());
        }
      });

      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        total: total.count,
        link: [
          {
            relation: 'self',
            url: searchUrl.toString(),
          },
        ],
        entry: patients.map(patient => ({
          resource: await context.transformer.toFhir(patient),
          search: { mode: 'match' },
          fullUrl: `${baseUrl}/Patient/${patient.id}`,
        })),
      };

      // Add pagination links
      if (_offset + _count < total.count) {
        const nextUrl = new URL(searchUrl);
        nextUrl.searchParams.set('_offset', (_offset + _count).toString());
        bundle.link.push({
          relation: 'next',
          url: nextUrl.toString(),
        });
      }

      if (_offset > 0) {
        const prevUrl = new URL(searchUrl);
        const prevOffset = Math.max(0, _offset - _count);
        prevUrl.searchParams.set('_offset', prevOffset.toString());
        bundle.link.push({
          relation: 'previous',
          url: prevUrl.toString(),
        });
      }

      return bundle;
    })
)
```

### Search with Includes

Support `_include` parameters for related resources:

```typescript
.parameters(z.object({
  name: z.string().optional(),
  _include: z.string().optional(),
}))
.searchWith(async (params, context) => {
  const results = await context.database.patients.search(params);
  const entries = [];

  // Add matched patients
  for (const patient of results.patients) {
    entries.push({
      resource: patient,
      search: { mode: 'match' },
    });

    // Handle _include
    if (params._include === 'Patient:organization') {
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

Define supported search parameters for your resource:

```typescript
const resource = builder
  .defineResource('Patient')
  .searchParams([
    'name', // Combined name search
    'family', // Family name
    'given', // Given name
    'birthdate', // Birth date
    'gender', // Gender
    'active', // Active status
    'identifier', // Business identifier
    'organization', // Managing organization
  ])
  .search(/* implementation */)
  .build();
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
