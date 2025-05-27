import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetParameterSchema } from "../valuesetparameter/schema";
import { createValueSetContainsSchema } from "../valuesetcontains/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetExpansionSchema() {
  return getCachedSchema("ValueSetExpansion", () => {
    const baseSchema: z.ZodType<types.ValueSetExpansion> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: primitives.getUriSchema().optional(),
      _identifier: z.lazy(() => createElementSchema()).optional(),
      timestamp: primitives.getDateTimeSchema(),
      _timestamp: z.lazy(() => createElementSchema()).optional(),
      total: primitives.getIntegerSchema().optional(),
      _total: z.lazy(() => createElementSchema()).optional(),
      offset: primitives.getIntegerSchema().optional(),
      _offset: z.lazy(() => createElementSchema()).optional(),
      parameter: z.array(createValueSetParameterSchema()).optional(),
      contains: z.array(createValueSetContainsSchema()).optional(),
    });

    return baseSchema;
  });
}
