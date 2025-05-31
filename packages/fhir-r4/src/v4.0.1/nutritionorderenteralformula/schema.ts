import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";
import { createNutritionOrderAdministrationSchema } from "../nutritionorderadministration/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderEnteralFormulaSchema() {
  return getCachedSchema("NutritionOrderEnteralFormula", () => {
    const baseSchema: z.ZodType<types.NutritionOrderEnteralFormula> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        baseFormulaType: createCodeableConceptSchema().optional(),
        baseFormulaProductName: primitives.getStringSchema().optional(),
        _baseFormulaProductName: createElementSchema().optional(),
        additiveType: createCodeableConceptSchema().optional(),
        additiveProductName: primitives.getStringSchema().optional(),
        _additiveProductName: createElementSchema().optional(),
        caloricDensity: createQuantitySchema().optional(),
        routeofAdministration: createCodeableConceptSchema().optional(),
        administration: z
          .array(createNutritionOrderAdministrationSchema())
          .optional(),
        maxVolumeToDeliver: createQuantitySchema().optional(),
        administrationInstruction: primitives.getStringSchema().optional(),
        _administrationInstruction: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
