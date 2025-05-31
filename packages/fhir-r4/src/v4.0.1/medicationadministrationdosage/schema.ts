import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationAdministrationDosageSchema() {
  return getCachedSchema("MedicationAdministrationDosage", () => {
    const baseSchema: z.ZodType<types.MedicationAdministrationDosage> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        text: primitives.getStringSchema().optional(),
        _text: createElementSchema().optional(),
        site: createCodeableConceptSchema().optional(),
        route: createCodeableConceptSchema().optional(),
        method: createCodeableConceptSchema().optional(),
        dose: createQuantitySchema().optional(),
        rateRatio: createRatioSchema().optional(),
        rateQuantity: createQuantitySchema().optional(),
      });

    return baseSchema;
  });
}
