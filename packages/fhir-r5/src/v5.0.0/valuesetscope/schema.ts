import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetScopeSchema() {
  const baseSchema: z.ZodType<types.ValueSetScope> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    inclusionCriteria: primitives.createStringSchema().optional(),
    _inclusionCriteria: z.lazy(() => createElementSchema()).optional(),
    exclusionCriteria: primitives.createStringSchema().optional(),
    _exclusionCriteria: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
