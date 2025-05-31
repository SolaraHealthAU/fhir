import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesTranslationSchema() {
  return getCachedSchema("TerminologyCapabilitiesTranslation", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesTranslation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        needsMap: primitives.getBooleanSchema(),
        _needsMap: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
