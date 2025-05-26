import type express from 'express';
import type { Context, ExpressContextFunction } from '@solarahealth/fhir-r4-server';

// Define your application's context type and a factory function
// This context will be available in your resource handlers
export interface AppContext extends Context {
  // Add any request-specific data you need, e.g., user info, db connections
  userId?: string;
  // Example: You might have a pre-initialized data access layer
  // datasource: YourDatasourceType;
}

export const createContext: ExpressContextFunction<AppContext> = async (args) => {
  // Example: Extract user ID from headers or session
  const userId = args.req.headers['x-user-id'] as string | undefined;

  // You can perform async operations here, like fetching user data

  return {
    // You can include the original request if needed
    // req,
    userId,
    // datasource: getDatasource(), // Get your shared or request-scoped datasource
  };
};
