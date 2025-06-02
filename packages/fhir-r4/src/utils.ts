import { z } from 'zod/v4';

export function makeResourceList<
  // at least one Zod schema is required
  S extends [z.ZodType<{ resourceType: string }>, ...z.ZodType<{ resourceType: string }>[]],
>(...schemas: S) {
  return z.discriminatedUnion(
    'resourceType',
    schemas as unknown as readonly [z.$ZodTypeDiscriminable, ...z.$ZodTypeDiscriminable[]],
  ) as z.ZodDiscriminatedUnion<S>;
}

export function makeContainedUnion<
  S extends [z.ZodType<{ resourceType: string }>, ...z.ZodType<{ resourceType: string }>[]],
>(...schemas: S) {
  return makeResourceList(...schemas);
}

export function makeBundleResourceUnion<
  S extends [z.ZodType<{ resourceType: string }>, ...z.ZodType<{ resourceType: string }>[]],
>(...schemas: S) {
  return makeResourceList(...schemas);
}
