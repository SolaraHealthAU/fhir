import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetConceptSchema } from "../valuesetconcept/schema";
import { createValueSetFilterSchema } from "../valuesetfilter/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetIncludeSchema() {
  return getCachedSchema("ValueSetInclude", () => {
    const baseSchema: z.ZodType<types.ValueSetInclude> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      concept: z.array(createValueSetConceptSchema()).optional(),
      filter: z.array(createValueSetFilterSchema()).optional(),
      valueSet: z.array(primitives.getCanonicalSchema()).optional(),
    });

    return baseSchema;
  });
}
