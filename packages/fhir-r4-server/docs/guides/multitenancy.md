# Multi-Tenancy Guide for FHIR R4 Server

This guide provides comprehensive strategies and implementation patterns for adding multi-tenancy support to your FHIR R4 server. Multi-tenancy allows a single FHIR server instance to serve multiple organizations or tenants while maintaining complete data isolation.

## Table of Contents

1. [Overview](#overview)
2. [Multi-Tenancy Strategies](#multi-tenancy-strategies)
3. [Implementation Approaches](#implementation-approaches)
4. [URL-Based Tenant Routing](#url-based-tenant-routing)
5. [Context-Based Tenant Isolation](#context-based-tenant-isolation)
6. [Database Strategies](#database-strategies)
7. [Security Considerations](#security-considerations)
8. [Complete Implementation Example](#complete-implementation-example)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

## Overview

Multi-tenancy in FHIR servers enables multiple healthcare organizations, departments, or applications to share the same server infrastructure while maintaining complete data isolation. Each tenant operates as if they have their own dedicated FHIR server.

### Benefits of Multi-Tenancy

- **Cost Efficiency**: Share infrastructure across multiple tenants
- **Simplified Management**: Single deployment for multiple organizations
- **Scalability**: Add new tenants without new deployments
- **Compliance**: Maintain data isolation for regulatory requirements

### Key Requirements

- **Data Isolation**: Complete separation of tenant data
- **Security**: Prevent cross-tenant data access
- **Performance**: Tenant operations don't affect others
- **Configuration**: Per-tenant customization capabilities

## Multi-Tenancy Strategies

### 1. URL-Based Tenant Identification

Route requests based on URL patterns to identify tenants:

```
/fhir/:tenant/Patient/123    # Tenant in URL path
/fhir/Patient/123            # Tenant in subdomain: tenant.example.com
```

### 2. Header-Based Tenant Identification

Use HTTP headers to specify the tenant:

```
X-Tenant-ID: hospital-a
Authorization: Bearer <tenant-specific-token>
```

### 3. Token-Based Tenant Identification

Extract tenant information from authentication tokens (JWT, OAuth).

## Implementation Approaches

### URL-Based Tenant Routing

This approach uses URL path parameters to identify tenants, providing clear tenant separation in the API design.

#### Step 1: Custom Express Router Setup

```typescript
// src/multi-tenant-server.ts
import express, { Router } from 'express';
import { RestServer, builder } from '@solarahealth/fhir-r4-server';
import type { Patient } from '@solarahealth/fhir-r4';

export interface MultiTenantContext {
  tenantId: string;
  database: TenantDatabase;
  user?: AuthenticatedUser;
}

// Create tenant-aware context factory
export const createMultiTenantContext = async (args: {
  req: express.Request;
  res: express.Response;
}): Promise<MultiTenantContext> => {
  const tenantId = args.req.params.tenant;

  if (!tenantId) {
    throw new errors.BadRequest('Tenant ID is required');
  }

  // Validate tenant exists and user has access
  const tenant = await validateTenant(tenantId);
  const user = await authenticateUser(args.req, tenantId);

  return {
    tenantId,
    database: getTenantDatabase(tenantId),
    user,
  };
};

// Setup multi-tenant routing
export function setupMultiTenantFhirServer() {
  const app = express();
  app.use(express.json());

  // Create FHIR server with multi-tenant context
  const fhirServer = RestServer.init<MultiTenantContext>({
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
          resource: [patientResource], // Your tenant-aware resources
        },
      ],
    },
  });

  // Mount FHIR server with tenant parameter
  app.use(
    '/fhir/:tenant',
    RestServer.expressMiddleware(fhirServer, {
      context: createMultiTenantContext,
    }),
  );

  return app;
}
```

#### Step 2: Tenant-Aware Resource Handlers

```typescript
// src/resources/patient.ts
import { builder, errors } from '@solarahealth/fhir-r4-server';
import type { Patient } from '@solarahealth/fhir-r4';
import { z } from 'zod';
import type { MultiTenantContext } from '../multi-tenant-server';

export const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context: MultiTenantContext) => {
      // Ensure tenant isolation
      const patient = await context.database.patients.findUnique({
        where: {
          id,
          tenantId: context.tenantId, // Critical: Always filter by tenant
        },
      });

      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }

      return patient;
    }),
  )
  .search((builder) =>
    builder.retrieveWith(async (params, context: MultiTenantContext) => {
      // All searches are tenant-scoped
      const patients = await context.database.patients.findMany({
        where: {
          tenantId: context.tenantId,
          // Add search parameter filtering here
          ...buildSearchFilters(params),
        },
      });

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: patients.map((patient) => ({
          resource: patient,
          search: { mode: 'match' },
        })),
      };
    }),
  )
  .create((builder) =>
    builder.retrieveWith(async (body, context: MultiTenantContext) => {
      // Automatically set tenant ID on creation
      const patient = await context.database.patients.create({
        data: {
          ...body,
          tenantId: context.tenantId,
        },
      });

      return patient;
    }),
  )
  .build();
```

### Context-Based Tenant Isolation

For scenarios where URL-based routing isn't preferred, use context to manage tenant isolation:

```typescript
// src/header-based-context.ts
import type { ExpressContextFunction } from '@solarahealth/fhir-r4-server';

export interface HeaderBasedContext {
  tenantId: string;
  database: TenantDatabase;
  permissions: TenantPermissions;
}

export const createHeaderBasedContext: ExpressContextFunction<HeaderBasedContext> = async (
  args,
) => {
  // Extract tenant from headers
  const tenantId = args.req.headers['x-tenant-id'] as string;
  const authToken = args.req.headers.authorization;

  if (!tenantId) {
    throw new errors.BadRequest('X-Tenant-ID header is required');
  }

  // Validate token has access to tenant
  const permissions = await validateTenantAccess(authToken, tenantId);

  return {
    tenantId,
    database: getTenantDatabase(tenantId),
    permissions,
  };
};

// Use with standard FHIR server setup
app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: createHeaderBasedContext,
  }),
);
```

## Database Strategies

### 1. Schema-Per-Tenant (PostgreSQL)

Each tenant gets its own database schema:

```typescript
// src/database/schema-per-tenant.ts
import { Pool } from 'pg';

export class SchemaTenantDatabase {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async getPatient(id: string, tenantId: string): Promise<Patient | null> {
    const client = await this.pool.connect();
    try {
      // Use tenant-specific schema
      await client.query(`SET search_path TO tenant_${tenantId}`);

      const result = await client.query('SELECT * FROM patients WHERE id = $1', [id]);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  async createPatient(patient: Patient, tenantId: string): Promise<Patient> {
    const client = await this.pool.connect();
    try {
      await client.query(`SET search_path TO tenant_${tenantId}`);

      const result = await client.query(
        'INSERT INTO patients (id, data) VALUES ($1, $2) RETURNING *',
        [patient.id, patient],
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  }
}
```

### 2. Row-Level Security (RLS)

Use database-level row filtering:

```sql
-- Enable RLS on patient table
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Create policy for tenant isolation
CREATE POLICY tenant_isolation ON patients
  FOR ALL
  TO application_role
  USING (tenant_id = current_setting('app.current_tenant_id'));
```

```typescript
// src/database/rls-database.ts
export class RLSTenantDatabase {
  async withTenantContext<T>(
    tenantId: string,
    operation: (db: DatabaseClient) => Promise<T>,
  ): Promise<T> {
    const client = await this.pool.connect();
    try {
      // Set tenant context for RLS
      await client.query('SELECT set_config($1, $2, true)', ['app.current_tenant_id', tenantId]);

      return await operation(client);
    } finally {
      client.release();
    }
  }

  async getPatient(id: string, tenantId: string): Promise<Patient | null> {
    return this.withTenantContext(tenantId, async (client) => {
      const result = await client.query('SELECT * FROM patients WHERE id = $1', [id]);
      return result.rows[0] || null;
    });
  }
}
```

### 3. Database-Per-Tenant

Each tenant gets a separate database:

```typescript
// src/database/database-per-tenant.ts
export class DatabasePerTenant {
  private connections: Map<string, DatabaseConnection> = new Map();

  getTenantDatabase(tenantId: string): DatabaseConnection {
    if (!this.connections.has(tenantId)) {
      const connection = new DatabaseConnection({
        connectionString: `postgresql://user:pass@host:5432/tenant_${tenantId}`,
      });
      this.connections.set(tenantId, connection);
    }

    return this.connections.get(tenantId)!;
  }
}
```

## Security Considerations

### 1. Tenant Validation

Always validate tenant access before processing requests:

```typescript
// src/security/tenant-validator.ts
import { errors } from '@solarahealth/fhir-r4-server';

export async function validateTenantAccess(
  token: string,
  tenantId: string,
): Promise<TenantPermissions> {
  const decodedToken = await verifyJWT(token);

  // Check if user has access to tenant
  if (!decodedToken.tenants?.includes(tenantId)) {
    throw new errors.Forbidden('Unauthorized access to tenant');
  }

  return {
    tenantId,
    userId: decodedToken.userId,
    permissions: decodedToken.permissions[tenantId] || [],
  };
}
```

### 2. Cross-Tenant Data Prevention

Implement safeguards to prevent accidental cross-tenant data access:

```typescript
// src/security/data-access-guard.ts
import { errors } from '@solarahealth/fhir-r4-server';

export function createDataAccessGuard(allowedTenantId: string) {
  return {
    beforeQuery: (query: DatabaseQuery) => {
      // Ensure all queries include tenant filter
      if (!query.where?.tenantId) {
        throw new errors.BadRequest('All queries must include tenant filter');
      }

      if (query.where.tenantId !== allowedTenantId) {
        throw new errors.Forbidden('Cross-tenant data access attempted');
      }
    },
  };
}
```

### 3. Audit Logging

Track tenant-specific operations:

```typescript
// src/security/audit-logger.ts
export function logTenantOperation(
  tenantId: string,
  operation: string,
  resourceType: string,
  resourceId?: string,
  userId?: string,
) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    tenantId,
    operation,
    resourceType,
    resourceId,
    userId,
  };

  // Send to your logging system
  logger.info('Tenant operation', logEntry);
}
```

## Complete Implementation Example

Here's a complete working example of a multi-tenant FHIR server:

```typescript
// src/app.ts
import express from 'express';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import type { Patient, Bundle } from '@solarahealth/fhir-r4';
import { z } from 'zod';

// Multi-tenant context interface
interface MultiTenantContext {
  tenantId: string;
  userId?: string;
  database: TenantDatabase;
}

// In-memory tenant data store (use real database in production)
const tenantData: Record<string, Record<string, Patient>> = {
  'hospital-a': {},
  'hospital-b': {},
  'clinic-c': {},
};

// Sample data
tenantData['hospital-a']['123'] = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
};

tenantData['hospital-b']['456'] = {
  resourceType: 'Patient',
  id: '456',
  name: [{ given: ['Jane'], family: 'Smith' }],
};

// Context factory
const createContext = async (args: {
  req: express.Request;
  res: express.Response;
}): Promise<MultiTenantContext> => {
  const tenantId = args.req.params.tenant;
  const userId = args.req.headers['x-user-id'] as string;

  if (!tenantId) {
    throw new errors.BadRequest('Tenant ID is required');
  }

  // Validate tenant exists
  if (!tenantData[tenantId]) {
    throw new errors.NotFound(`Tenant '${tenantId}' not found`);
  }

  return {
    tenantId,
    userId,
    database: {
      getPatient: (id: string) => tenantData[tenantId][id] || null,
      searchPatients: (params: Record<string, any>): Patient[] => {
        return Object.values(tenantData[tenantId]);
      },
    },
  };
};

// Patient resource with tenant isolation
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context: MultiTenantContext) => {
      const patient = context.database.getPatient(id);

      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }

      return patient;
    }),
  )
  .search((builder) =>
    builder.retrieveWith(async (params, context: MultiTenantContext): Promise<Bundle> => {
      const patients = context.database.searchPatients(params);

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: patients.map((patient) => ({
          resource: patient,
          search: { mode: 'match' },
        })),
      };
    }),
  )
  .build();

// Initialize FHIR server
const fhirServer = RestServer.init<MultiTenantContext>({
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

// Setup Express app
const app = express();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Multi-tenant FHIR endpoints
app.use(
  '/fhir/:tenant',
  RestServer.expressMiddleware(fhirServer, {
    context: createContext,
  }),
);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Multi-tenant FHIR server listening on port ${PORT}`);
  console.log('Available tenants: hospital-a, hospital-b, clinic-c');
  console.log('Example: curl http://localhost:3000/fhir/hospital-a/Patient/123');
});

// Helper function
function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

// Types
interface TenantDatabase {
  getPatient(id: string): Patient | null;
  searchPatients(params: Record<string, any>): Patient[];
}
```

## Best Practices

### 1. Tenant Isolation Verification

Always verify tenant isolation in your tests:

```typescript
// tests/tenant-isolation.test.ts
describe('Tenant Isolation', () => {
  it('should not allow cross-tenant data access', async () => {
    // Create patient in hospital-a
    await request(app).post('/fhir/hospital-a/Patient').send(testPatient);

    // Try to access from hospital-b (should fail)
    const response = await request(app).get('/fhir/hospital-b/Patient/123');

    expect(response.status).toBe(404);
  });
});
```

### 2. Performance Monitoring

Monitor per-tenant performance:

```typescript
// src/monitoring/tenant-metrics.ts
export class TenantMetrics {
  static trackOperation(tenantId: string, operation: string, duration: number) {
    metrics.histogram('fhir_operation_duration', duration, {
      tenant: tenantId,
      operation,
    });
  }
}
```

### 3. Configuration Management

Use tenant-specific configuration:

```typescript
// src/config/tenant-config.ts
export interface TenantConfig {
  maxResourcesPerRequest: number;
  enabledFeatures: string[];
  customValidationRules: ValidationRule[];
}

export function getTenantConfig(tenantId: string): TenantConfig {
  return tenantConfigs[tenantId] || defaultConfig;
}
```

### 4. Error Handling

Provide tenant-aware error messages:

```typescript
// src/errors/tenant-errors.ts
export class TenantNotFoundError extends Error {
  constructor(tenantId: string) {
    super(`Tenant '${tenantId}' not found or access denied`);
    this.name = 'TenantNotFoundError';
  }
}

export class CrossTenantAccessError extends Error {
  constructor(requestedTenant: string, userTenants: string[]) {
    super(
      `Access denied to tenant '${requestedTenant}'. User has access to: ${userTenants.join(', ')}`,
    );
    this.name = 'CrossTenantAccessError';
  }
}
```

## Troubleshooting

### Common Issues

1. **Cross-tenant data leakage**: Always include tenant filters in database queries
2. **Performance degradation**: Consider connection pooling per tenant
3. **Memory usage**: Implement tenant-aware caching strategies
4. **Authentication complexity**: Use JWT tokens with tenant claims

### Debugging Tips

```typescript
// Add tenant context to all log messages
const logger = createLogger({
  defaultMeta: { tenantId: context.tenantId },
});

// Verify tenant isolation in development
if (process.env.NODE_ENV === 'development') {
  assertTenantIsolation(query, context.tenantId);
}
```

### Testing Multi-Tenancy

```typescript
// tests/multi-tenant.test.ts
describe('Multi-tenant FHIR Server', () => {
  it('should handle concurrent requests from different tenants', async () => {
    const requests = [
      request(app).get('/fhir/hospital-a/Patient/123'),
      request(app).get('/fhir/hospital-b/Patient/456'),
      request(app).get('/fhir/clinic-c/Patient/789'),
    ];

    const responses = await Promise.all(requests);

    responses.forEach((response, index) => {
      expect(response.status).toBe(200);
      // Verify each response contains data from correct tenant
    });
  });
});
```

## Conclusion

Multi-tenancy in FHIR servers requires careful consideration of data isolation, security, and performance. The `fhir-r4-server` package's context-based architecture makes it well-suited for multi-tenant implementations.

Key takeaways:

- Use URL-based tenant routing for clear API design
- Implement tenant isolation at the database level
- Always validate tenant access in your context factory
- Test cross-tenant isolation thoroughly
- Monitor per-tenant performance and usage

This approach provides a scalable, secure foundation for serving multiple healthcare organizations from a single FHIR server instance while maintaining complete data isolation and regulatory compliance.
