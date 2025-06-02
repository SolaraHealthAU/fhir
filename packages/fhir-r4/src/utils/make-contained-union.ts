import { z } from 'zod/v4';

export function makeContainedUnion<
  // at least one Zod schema is required
  S extends [z.ZodType<{ resourceType: string }>, ...z.ZodType<{ resourceType: string }>[]],
>(...schemas: S) {
  return z.discriminatedUnion(
    'resourceType',
    schemas as unknown as readonly [z.$ZodTypeDiscriminable, ...z.$ZodTypeDiscriminable[]],
  ) as z.ZodDiscriminatedUnion<S>;
}
