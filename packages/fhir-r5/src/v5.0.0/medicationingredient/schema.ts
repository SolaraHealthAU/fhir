import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createElementSchema,
  createRatioSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationIngredientSchema() {
  const baseSchema: z.ZodType<types.MedicationIngredient> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    item: z.lazy(() => createCodeableReferenceSchema()),
    isActive: primitives.createBooleanSchema().optional(),
    _isActive: z.lazy(() => createElementSchema()).optional(),
    strengthRatio: z.lazy(() => createRatioSchema()).optional(),
    strengthCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    strengthQuantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
