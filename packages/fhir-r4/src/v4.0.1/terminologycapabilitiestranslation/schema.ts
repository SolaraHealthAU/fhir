import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesTranslationSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesTranslation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      needsMap: primitives.createBooleanSchema(),
      _needsMap: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
