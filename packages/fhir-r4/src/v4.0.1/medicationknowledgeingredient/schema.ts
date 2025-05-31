import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeIngredientSchema() {
  return getCachedSchema("MedicationKnowledgeIngredient", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeIngredient> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        itemCodeableConcept: createCodeableConceptSchema().optional(),
        itemReference: createReferenceSchema().optional(),
        isActive: primitives.getBooleanSchema().optional(),
        _isActive: createElementSchema().optional(),
        strength: createRatioSchema().optional(),
      });

    return baseSchema;
  });
}
