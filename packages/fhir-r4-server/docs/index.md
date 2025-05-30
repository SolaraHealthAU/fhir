# @solarahealth/fhir-r4-server Documentation

A TypeScript-first FHIR R4 server middleware for Node.js Express applications. This package provides a builder-based approach to create FHIR-compliant REST APIs with minimal boilerplate, allowing you to focus on mapping your data to FHIR resources.

## Why This Package?

While existing FHIR server implementations like [bluehalo/node-fhir-server-core](https://github.com/bluehalo/node-fhir-server-core) provide comprehensive solutions, they often come with complex configurations and opinionated architectures. Our approach focuses on:

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

## Documentation Structure

### Getting Started

- [Installation](./getting-started/installation.md) - Install and set up the package
- [Quick Start](./getting-started/quick-start.md) - Get up and running in minutes
- [Core Concepts](./getting-started/core-concepts.md) - Understand the fundamental concepts

### Guides

- [Builder API](./guides/builder-api.md) - Learn the resource builder pattern
- [Resource Operations](./guides/resource-operations.md) - Implement read, search, and other operations
- [Context Management](./guides/context.md) - Request-scoped data handling
- [Error Handling](./guides/error-handling.md) - Handle errors the FHIR way
- [Deployment](./guides/deployment.md) - Deploy to various environments
- [Database Integration](./guides/database-integration.md) - Connect to your data layer
- [XML Support](./guides/application-xml-support.md) - Working with XML responses

### Reference

- [API Reference](./reference/api.md) - Complete API documentation
- [Feature Support](./reference/feature-support.md) - Current implementation status
- [Requirements](./reference/requirements.md) - System requirements and dependencies

## Quick Navigation

**New to FHIR servers?** Start with [Installation](./getting-started/installation.md) and [Quick Start](./getting-started/quick-start.md).

**Building resources?** Check out the [Builder API Guide](./guides/builder-api.md) and [Resource Operations](./guides/resource-operations.md).

**Ready to deploy?** See our [Deployment Guide](./guides/deployment.md) for various deployment scenarios.

**Need specific API details?** Browse the [API Reference](./reference/api.md).

## Examples

Check out the [examples directory](../examples/) for complete working examples:

- **[Simple Patient Record](../examples/simple-patient-record/)**: Basic FHIR server with Patient read capability

## Support

- 📖 [Documentation](https://github.com/SolaraHealthAU/fhir#readme)
- 🐛 [Issue Tracker](https://github.com/SolaraHealthAU/fhir/issues)
- 💬 [Discussions](https://github.com/SolaraHealthAU/fhir/discussions)
