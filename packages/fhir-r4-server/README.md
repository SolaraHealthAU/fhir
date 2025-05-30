# @solarahealth/fhir-r4-server

A TypeScript-first FHIR R4 server middleware for Node.js Express applications. This package provides a builder-based approach to create FHIR-compliant REST APIs with minimal boilerplate, allowing you to focus on mapping your data to FHIR resources.

Built as a modern alternative to traditional FHIR server frameworks, this package emphasizes developer experience, type safety, and deployment flexibility for today's TypeScript developers.

## Why This Package?

While existing FHIR server implementations provide comprehensive solutions, they often come with complex configurations and opinionated architectures. Our approach focuses on:

- **TypeScript-First**: Built from the ground up with TypeScript, providing excellent IntelliSense and compile-time safety
- **Express Integration**: Works seamlessly alongside your existing Express routes and middleware
- **Builder Pattern**: Intuitive, fluent API that makes FHIR resource definition straightforward
- **Modern Deployment**: Designed for serverless environments (AWS Lambda, Vercel) and containerized deployments
- **Unopinionated Data Layer**: You control how data is stored and retrieved using your preferred strategies
- **Minimal Dependencies**: Lightweight core with only essential dependencies

## Features

- 🚀 **Express Middleware**: Easy integration with existing Express.js applications
- 🏗️ **Builder Pattern**: Fluent API for defining FHIR resource capabilities
- 📋 **Type Safety**: Full TypeScript support with FHIR R4 type definitions
- 🔍 **Flexible Data Access**: Unopinionated about data storage and retrieval
- 📊 **Auto-generated Capability Statement**: Automatically generates FHIR capability statements
- ⚡ **Validation**: Built-in request/response validation using Zod
- 🎯 **FHIR Compliant**: Follows FHIR R4 REST API specifications
- ☁️ **Serverless Ready**: Deploy to AWS Lambda, Vercel, or any Node.js environment
- 🔧 **Developer Experience**: IntelliSense, type checking, and excellent IDE support

## Quick Start

```bash
npm install @solarahealth/fhir-r4-server @solarahealth/fhir-r4 express
```

```typescript
import express from 'express';
import type { Patient } from '@solarahealth/fhir-r4';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import { z } from 'zod';

const app = express();
app.use(express.json());

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
const fhirServer = RestServer.init({
  capabilities: {
    resourceType: 'CapabilityStatement',
    status: 'active',
    date: new Date().toISOString(),
    kind: 'instance',
    fhirVersion: '4.0.1',
    format: ['json'],
    rest: [{ mode: 'server', resource: [patientResource] }],
  },
});

// Mount FHIR middleware
app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: async ({ req }) => ({ userId: req.headers['x-user-id'] as string }),
  }),
);

app.listen(3000, () => {
  console.log('FHIR server running on http://localhost:3000');
  console.log('Try: curl http://localhost:3000/fhir/Patient/123');
});
```

## Documentation

📖 **[Complete Documentation](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/index.md)**

### Quick Links

- **Getting Started**

  - [Installation](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/getting-started/installation.md) - Set up the package
  - [Quick Start](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/getting-started/quick-start.md) - Build your first FHIR server
  - [Core Concepts](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/getting-started/core-concepts.md) - Understand the fundamentals

- **Guides**

  - [Builder API](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/builder-api.md) - Learn the resource builder pattern
  - [Resource Operations](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/resource-operations.md) - Implement read, search, and more
  - [Search Parameters](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/search-parameters.md) - Configure and implement FHIR search
  - [Database Integration](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/database-integration.md) - Connect to your data layer
  - [Mapping Objects to FHIR Objects](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/mapping-objects-to-fhir-objects.md) - Transform your data models
  - [Context](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/context.md) - Work with request context and user data
  - [Error Handling](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/error-handling.md) - Handle errors the FHIR way
  - [Multitenancy](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/multitenancy.md) - Build multi-tenant FHIR servers
  - [XML Support](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/xml-support.md) - Enable XML format support
  - [Deployment](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/deployment.md) - Deploy to various environments

- **Reference**
  - [API Reference](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/reference/api.md) - Complete API documentation
  - [Feature Support](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/reference/feature-support.md) - What's implemented and what's planned
  - [Requirements](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/reference/requirements.md) - System requirements and compatibility

## Examples

Check out the [examples directory](https://github.com/SolaraHealthAU/fhir/tree/main/packages/fhir-r4-server/examples/) for complete working examples:

- **[Simple Patient Record](https://github.com/SolaraHealthAU/fhir/tree/main/packages/fhir-r4-server/examples/simple-patient-record/)**: Basic FHIR server with Patient read capability

## Requirements

- **Node.js** >= 18.0.0 (for modern JavaScript features and optimal performance)
- **Express.js** ^5.1.0
- **TypeScript** >= 4.5.0 (strongly recommended for the best development experience)

## Dependencies

### Core Dependencies

- `@solarahealth/fhir-r4`: FHIR R4 type definitions and utilities
- `zod`: Runtime type validation and schema parsing

### Peer Dependencies

- `express`: Web framework for Node.js (you need to install this separately)

## Deployment

This package is designed for modern deployment scenarios:

- **Traditional Server**: Node.js, PM2, Docker
- **Serverless**: AWS Lambda, Vercel, Netlify Functions
- **Container Orchestration**: Kubernetes, Docker Swarm
- **Cloud Platforms**: AWS, Google Cloud, Azure

See the [Deployment Guide](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/guides/deployment.md) for detailed instructions.

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our GitHub repository.

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Support

- 📖 [Documentation](https://github.com/SolaraHealthAU/fhir/blob/main/packages/fhir-r4-server/docs/index.md)
- 🐛 [Issue Tracker](https://github.com/SolaraHealthAU/fhir/issues)
- 💬 [Discussions](https://github.com/SolaraHealthAU/fhir/discussions)

---

**Note**: This package is designed to be unopinionated about your data storage and retrieval strategies. Use the companion [`@solarahealth/fhir-r4`](https://www.npmjs.com/package/@solarahealth/fhir-r4) package to help translate your data models to FHIR-compliant resources.
