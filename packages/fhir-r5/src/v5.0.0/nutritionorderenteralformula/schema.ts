import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createElementSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNutritionOrderAdditiveSchema } from "../nutritionorderadditive/schema";
import { createNutritionOrderAdministrationSchema } from "../nutritionorderadministration/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderEnteralFormulaSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderEnteralFormula> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    baseFormulaType: z.lazy(() => createCodeableReferenceSchema()).optional(),
    baseFormulaProductName: primitives.createStringSchema().optional(),
    _baseFormulaProductName: z.lazy(() => createElementSchema()).optional(),
    deliveryDevice: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    additive: z
      .array(z.lazy(() => createNutritionOrderAdditiveSchema()))
      .optional(),
    caloricDensity: z.lazy(() => createQuantitySchema()).optional(),
    routeOfAdministration: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    administration: z
      .array(z.lazy(() => createNutritionOrderAdministrationSchema()))
      .optional(),
    maxVolumeToDeliver: z.lazy(() => createQuantitySchema()).optional(),
    administrationInstruction: primitives.createMarkdownSchema().optional(),
    _administrationInstruction: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
