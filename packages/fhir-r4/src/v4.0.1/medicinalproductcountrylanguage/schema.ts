import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductCountryLanguageSchema() {
  return getCachedSchema("MedicinalProductCountryLanguage", () => {
    const baseSchema: z.ZodType<types.MedicinalProductCountryLanguage> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        country: createCodeableConceptSchema(),
        jurisdiction: createCodeableConceptSchema().optional(),
        language: createCodeableConceptSchema(),
      });

    return baseSchema;
  });
}
