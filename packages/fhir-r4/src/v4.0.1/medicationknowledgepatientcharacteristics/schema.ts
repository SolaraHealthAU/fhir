import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgePatientCharacteristicsSchema() {
  return getCachedSchema("MedicationKnowledgePatientCharacteristics", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgePatientCharacteristics> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        characteristicCodeableConcept: createCodeableConceptSchema().optional(),
        characteristicQuantity: createQuantitySchema().optional(),
        value: z.array(primitives.getStringSchema()).optional(),
        _value: z.array(createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
