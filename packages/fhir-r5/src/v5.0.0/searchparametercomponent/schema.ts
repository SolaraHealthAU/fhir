import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSearchParameterComponentSchema() {
  const baseSchema: z.ZodType<types.SearchParameterComponent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    definition: primitives.createCanonicalSchema(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
