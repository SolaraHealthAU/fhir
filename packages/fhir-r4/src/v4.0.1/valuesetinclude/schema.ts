import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetConceptSchema } from "../valuesetconcept/schema";
import { createValueSetFilterSchema } from "../valuesetfilter/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetIncludeSchema() {
  const baseSchema: z.ZodType<types.ValueSetInclude> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    concept: z.array(z.lazy(() => createValueSetConceptSchema())).optional(),
    filter: z.array(z.lazy(() => createValueSetFilterSchema())).optional(),
    valueSet: z.array(primitives.createCanonicalSchema()).optional(),
  });

  return baseSchema;
}
