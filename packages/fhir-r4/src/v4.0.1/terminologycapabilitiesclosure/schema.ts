import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesClosureSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesClosure> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    translation: primitives.createBooleanSchema().optional(),
    _translation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
