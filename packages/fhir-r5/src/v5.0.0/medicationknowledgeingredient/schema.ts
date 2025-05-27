import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
  createRatioSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeIngredientSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeIngredient> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    item: z.lazy(() => createCodeableReferenceSchema()),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    strengthRatio: z.lazy(() => createRatioSchema()).optional(),
    strengthCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    strengthQuantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
