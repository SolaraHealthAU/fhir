# Context Guide

The `fhir-r4-server` provides support for creating a context object that is provided to all builder implementations during request processing. This is a common pattern in modern web frameworks for sharing data across request handlers.

## What is Context?

The context object plays a crucial role in the request lifecycle. It's created once per request and is passed to every resource handler, allowing you to share common data and services across them.

The purpose of the context object in `fhir-r4-server` is similar.

The context object is useful for:

- **Authentication & Authorization**: Get the authorized user from the request
- **Shared Resources**: Access shared resources like database connections (Prisma, Drizzle), caching layers (Redis), etc.
- **Request Lifecycle Data**: Track data or state during the lifecycle of a request
- **Request-Specific Configuration**: Pass request-specific settings or metadata

## How Context Works

In `fhir-r4-server`, you define your context by:

1. **Typing your context** - Define a TypeScript interface that extends the base `Context`
2. **Creating a factory function** - Implement a function that creates the context for each request
3. **Providing it to the server** - Pass both the type and factory function to the server initialization

## Implementation Example

### Step 1: Define Your Context Type

Create a context interface that extends the base `Context` from the library:

```typescript
import type { Context, ExpressContextFunction } from '@solarahealth/fhir-r4-server';

export interface AppContext extends Context {
  // Add any request-specific data you need
  userId?: string;

  // Example: Database connections
  // db: DatabaseConnection;

  // Example: Caching layer
  // redis: RedisClient;

  // Example: Logger with request tracking
  // logger: Logger;
}
```

### Step 2: Create a Context Factory Function

Implement a function that creates your context for each incoming request:

```typescript
export const createContext: ExpressContextFunction<AppContext> = async (args) => {
  // Extract data from the request
  const userId = args.req.headers['x-user-id'] as string | undefined;

  // You can perform async operations here
  // const user = await getUserById(userId);
  // const dbConnection = await createDatabaseConnection();

  return {
    userId,
    // db: dbConnection,
    // redis: getRedisClient(),
    // logger: createRequestLogger(args.req.id),
  };
};
```

### Step 3: Provide Context to the Server

When initializing your FHIR server, provide the context factory:

```typescript
import { RestServer, builder } from '@solarahealth/fhir-r4-server';
import { createContext, AppContext } from './create-context';

// Initialize the FHIR server with your context type
const fhirServer = RestServer.init<AppContext>({
  capabilities: {
    // Your capability statement
  },
});

// Mount the server with the context factory
app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: createContext,
  }),
);
```

## Using Context in Resource Handlers

Once you've set up context, it will be available in all your resource handler implementations:

```typescript
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      // Access your context data
      const { userId } = context;

      // Use context for authorization
      if (!userId) {
        throw new errors.Unauthorized('User not authenticated');
      }

      // Access shared resources from context
      // const patient = await context.db.patient.findById(id);

      // Your implementation here
      return patient;
    }),
  )
  .search((builder) =>
    builder.retrieveWith(async (params, context) => {
      // Context is available in all handlers
      const { userId } = context;

      // Filter results based on user context
      // const patients = await context.db.patient.findMany({
      //   where: { userId }
      // });

      return { entry: patients };
    }),
  )
  .build();
```

## Common Use Cases

### 1. User Authentication

```typescript
export interface AppContext extends Context {
  user?: AuthenticatedUser;
}

export const createContext: ExpressContextFunction<AppContext> = async (args) => {
  const token = args.req.headers.authorization?.replace('Bearer ', '');
  const user = token ? await validateToken(token) : undefined;

  return { user };
};
```

### 2. Database Connections

```typescript
export interface AppContext extends Context {
  prisma: PrismaClient;
}

export const createContext: ExpressContextFunction<AppContext> = async (args) => {
  return {
    prisma: getPrismaClient(), // Shared or request-scoped client
  };
};
```

### 3. Request Tracing

```typescript
export interface AppContext extends Context {
  requestId: string;
  logger: Logger;
}

export const createContext: ExpressContextFunction<AppContext> = async (args) => {
  const requestId = args.req.headers['x-request-id'] || generateRequestId();

  return {
    requestId,
    logger: createLogger({ requestId }),
  };
};
```

## Best Practices

1. **Keep it lightweight**: Don't put heavy computations in the context factory
2. **Use TypeScript**: Leverage TypeScript for better development experience
3. **Async operations**: The context factory supports async operations for database connections, API calls, etc.
4. **Error handling**: Handle errors gracefully in the context factory
5. **Request isolation**: Ensure each request gets its own context instance
6. **Resource cleanup**: Consider cleanup for request-scoped resources

## Complete Example

Here's how everything comes together in a real application:

```typescript
// create-context.ts
import type express from 'express';
import type { Context, ExpressContextFunction } from '@solarahealth/fhir-r4-server';

export interface AppContext extends Context {
  userId?: string;
}

export const createContext: ExpressContextFunction<AppContext> = async (args) => {
  const userId = args.req.headers['x-user-id'] as string | undefined;

  return {
    userId,
  };
};

// index.ts
import express from 'express';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import { createContext, AppContext } from './create-context';

const app = express();
app.use(express.json());

const fhirServer = RestServer.init<AppContext>({
  capabilities: {
    // Your capability statement
  },
});

app.use(
  '/fhir',
  RestServer.expressMiddleware(fhirServer, {
    context: createContext,
  }),
);

app.listen(3000, () => {
  console.log('FHIR server listening on port 3000');
});
```

This context system provides a powerful way to share data and resources across your FHIR resource handlers while maintaining clean separation of concerns and type safety.
