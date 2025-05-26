import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesValidateCodeSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesValidateCode> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      translations: primitives.createBooleanSchema(),
      _translations: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
