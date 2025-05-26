# @solarahealth/fhir-r4-server

A TypeScript-first FHIR R4 server middleware for Node.js Express applications. This package provides a builder-based approach to create FHIR-compliant REST APIs with minimal boilerplate, allowing you to focus on mapping your data to FHIR resources.

## Features

- 🚀 **Express Middleware**: Easy integration with existing Express.js applications
- 🏗️ **Builder Pattern**: Fluent API for defining FHIR resource capabilities
- 📋 **Type Safety**: Full TypeScript support with FHIR R4 type definitions
- 🔍 **Flexible Data Access**: Unopinionated about data storage and retrieval
- 📊 **Auto-generated Capability Statement**: Automatically generates FHIR capability statements
- ⚡ **Validation**: Built-in request/response validation using Zod
- 🎯 **FHIR Compliant**: Follows FHIR R4 REST API specifications

## Installation

```bash
npm install @solarahealth/fhir-r4-server @solarahealth/fhir-r4 express
```

## Quick Start

Here's a minimal example to get you started:

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

## Core Concepts

### 1. Resource Builder

The builder pattern is the primary way to define FHIR resources and their capabilities:

```typescript
import { builder } from '@solarahealth/fhir-r4-server';

const resource = builder
  .defineResource('Patient') // Define resource type
  .read(/* read handler */) // Add read capability
  .search(/* search handler */) // Add search capability
  .build(); // Build the resource definition
```

### 2. Context

Context provides request-scoped data to your resource handlers:

```typescript
interface AppContext {
  userId?: string;
  database: DatabaseConnection;
  // Add any request-specific data
}

const createContext = async ({ req, res }) => {
  return {
    userId: extractUserId(req),
    database: await getDatabaseConnection(),
  };
};
```

### 3. Resource Handlers

Resource handlers implement the actual business logic for FHIR operations:

#### Read Handler

```typescript
.read((builder) =>
  builder
    .id(z.string())  // Validate ID parameter
    .retrieveWith(async (id, context) => {
      // Your data retrieval logic
      const resource = await context.database.findById(id);
      if (!resource) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return resource;
    })
)
```

#### Search Handler

```typescript
.search((builder) =>
  builder
    .parameters(z.object({
      name: z.string().optional(),
      birthdate: z.string().optional(),
    }))
    .searchWith(async (params, context) => {
      const results = await context.database.search(params);
      return {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: results.map(resource => ({ resource })),
      };
    })
)
```

## API Reference

### RestServer

#### `RestServer.init<C>(options)`

Initialize a FHIR server instance.

**Parameters:**

- `options.capabilities`: Base capability statement configuration

**Returns:** FHIR server instance

#### `RestServer.expressMiddleware(server, options)`

Create Express middleware for the FHIR server.

**Parameters:**

- `server`: FHIR server instance from `RestServer.init()`
- `options.context`: Context factory function

**Returns:** Express middleware function

### Builder API

#### `builder.defineResource<ResourceType>(resourceType)`

Start defining a FHIR resource.

**Parameters:**

- `resourceType`: FHIR resource type (e.g., 'Patient', 'Observation')

**Returns:** Resource builder instance

#### Resource Builder Methods

- `.read(handler)`: Add read capability
- `.search(handler)`: Add search capability
- `.conditionalRead(value)`: Set conditional read support
- `.searchParams(params)`: Define supported search parameters
- `.build()`: Build the resource definition

### Error Handling

The package provides FHIR-compliant error classes:

```typescript
import { errors } from '@solarahealth/fhir-r4-server';

// Resource not found (404)
throw new errors.ResourceNotFound('Patient', '123');

// Bad request (400)
throw new errors.BadRequest('Invalid parameter');

// Internal server error (500)
throw new errors.InternalServerError('Database connection failed');
```

## Advanced Usage

### Custom Search Parameters

```typescript
.search((builder) =>
  builder
    .parameters(z.object({
      name: z.string().optional(),
      'birth-date': z.string().optional(),
      active: z.boolean().optional(),
    }))
    .searchWith(async (params, context) => {
      // Handle complex search logic
      const query = buildDatabaseQuery(params);
      const results = await context.database.query(query);

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.total,
        entry: results.resources.map(resource => ({
          resource,
          search: { mode: 'match' }
        })),
      };
    })
)
```

### Multiple Resource Types

```typescript
const patientResource = builder
  .defineResource('Patient')
  .read(/* handler */)
  .search(/* handler */)
  .build();

const observationResource = builder
  .defineResource('Observation')
  .read(/* handler */)
  .search(/* handler */)
  .build();

const fhirServer = RestServer.init<AppContext>({
  capabilities: {
    // ... base config
    rest: [
      {
        mode: 'server',
        resource: [patientResource, observationResource],
      },
    ],
  },
});
```

### Database Integration

```typescript
interface AppContext {
  db: DatabaseConnection;
}

const createContext = async ({ req }) => ({
  db: await createDatabaseConnection(),
});

const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      const patient = await context.db.patients.findById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      // Map your database model to FHIR Patient
      return mapToFhirPatient(patient);
    }),
  )
  .build();
```

## Examples

Check out the [examples directory](./examples/) for complete working examples:

- **[Simple Patient Record](./examples/simple-patient-record/)**: Basic FHIR server with Patient read capability

## Requirements

- Node.js >= 16.0.0
- Express.js ^5.1.0
- TypeScript (recommended)

## Dependencies

- `@solarahealth/fhir-r4`: FHIR R4 type definitions and utilities
- `express`: Web framework (peer dependency)
- `zod`: Runtime type validation

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our GitHub repository.

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Support

- 📖 [Documentation](https://github.com/SolaraHealthAU/fhir#readme)
- 🐛 [Issue Tracker](https://github.com/SolaraHealthAU/fhir/issues)
- 💬 [Discussions](https://github.com/SolaraHealthAU/fhir/discussions)
