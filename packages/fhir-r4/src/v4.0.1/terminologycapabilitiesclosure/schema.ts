import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesClosureSchema() {
  return getCachedSchema("TerminologyCapabilitiesClosure", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesClosure> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        translation: primitives.getBooleanSchema().optional(),
        _translation: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
