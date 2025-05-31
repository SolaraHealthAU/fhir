import { z } from 'zod/v4';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schemaCache = new Map<string, z.ZodType<any>>();
const creationState = new Map<string, 'creating' | 'created'>();

export function getCachedSchema<T>(key: string, factory: () => z.ZodType<T>): z.ZodType<T> {
  // If schema is already created, return it
  if (schemaCache.has(key) && creationState.get(key) === 'created') {
    return schemaCache.get(key)!;
  }

  // If we're already creating this schema (circular reference detected)
  if (creationState.get(key) === 'creating') {
    // Return a lazy reference that will resolve once creation is complete
    if (!schemaCache.has(key)) {
      // Create and store the lazy schema for this circular reference
      const lazySchema = z.lazy(() => {
        const actualSchema = schemaCache.get(key);
        if (!actualSchema || creationState.get(key) !== 'created') {
          throw new Error(
            `Circular reference detected for schema ${key} but actual schema not yet created`,
          );
        }
        return actualSchema;
      });
      schemaCache.set(key, lazySchema);
    }
    return schemaCache.get(key)!;
  }

  // Mark as creating to detect circular references
  creationState.set(key, 'creating');

  try {
    // Create the actual schema
    const actualSchema = factory();

    // Store the actual schema
    schemaCache.set(key, actualSchema);
    creationState.set(key, 'created');

    return actualSchema;
  } catch (error) {
    // Clean up on error
    schemaCache.delete(key);
    creationState.delete(key);
    throw error;
  }
}

export function clearSchemaCache(): void {
  schemaCache.clear();
  creationState.clear();
}

export function getSchemaCacheStats() {
  return {
    schemaCache: schemaCache.size,
    creationState: creationState.size,
  };
}
