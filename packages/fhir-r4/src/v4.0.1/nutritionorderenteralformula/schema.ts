import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";
import { createNutritionOrderAdministrationSchema } from "../nutritionorderadministration/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderEnteralFormulaSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderEnteralFormula> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    baseFormulaType: z.lazy(() => createCodeableConceptSchema()).optional(),
    baseFormulaProductName: primitives.createStringSchema().optional(),
    _baseFormulaProductName: z.lazy(() => createElementSchema()).optional(),
    additiveType: z.lazy(() => createCodeableConceptSchema()).optional(),
    additiveProductName: primitives.createStringSchema().optional(),
    _additiveProductName: z.lazy(() => createElementSchema()).optional(),
    caloricDensity: z.lazy(() => createQuantitySchema()).optional(),
    routeofAdministration: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    administration: z
      .array(z.lazy(() => createNutritionOrderAdministrationSchema()))
      .optional(),
    maxVolumeToDeliver: z.lazy(() => createQuantitySchema()).optional(),
    administrationInstruction: primitives.createStringSchema().optional(),
    _administrationInstruction: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
