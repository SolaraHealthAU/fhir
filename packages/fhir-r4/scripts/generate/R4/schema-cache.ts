import { z } from 'zod/v4';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schemaCache = new Map<string, z.ZodType<any>>();

export function getCachedSchema<T>(key: string, factory: () => z.ZodType<T>): z.ZodType<T> {
  if (!schemaCache.has(key)) {
    schemaCache.set(key, factory());
  }
  return schemaCache.get(key)!;
}

export function clearSchemaCache(): void {
  schemaCache.clear();
}

export function getSchemaCacheStats() {
  return {
    schemaCache: schemaCache.size,
  };
}
