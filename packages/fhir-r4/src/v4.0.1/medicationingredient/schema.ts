import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationIngredientSchema() {
  const baseSchema: z.ZodType<types.MedicationIngredient> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    itemCodeableConcept: z.lazy(() => createCodeableConceptSchema()).optional(),
    itemReference: z.lazy(() => createReferenceSchema()).optional(),
    isActive: primitives.createBooleanSchema().optional(),
    _isActive: z.lazy(() => createElementSchema()).optional(),
    strength: z.lazy(() => createRatioSchema()).optional(),
  });

  return baseSchema;
}
