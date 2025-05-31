import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createTimingSchema,
  createElementSchema,
} from "../core/schema";
import { createNutritionOrderNutrientSchema } from "../nutritionordernutrient/schema";
import { createNutritionOrderTextureSchema } from "../nutritionordertexture/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderOralDietSchema() {
  return getCachedSchema("NutritionOrderOralDiet", () => {
    const baseSchema: z.ZodType<types.NutritionOrderOralDiet> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      schedule: z.array(createTimingSchema()).optional(),
      nutrient: z.array(createNutritionOrderNutrientSchema()).optional(),
      texture: z.array(createNutritionOrderTextureSchema()).optional(),
      fluidConsistencyType: z.array(createCodeableConceptSchema()).optional(),
      instruction: primitives.getStringSchema().optional(),
      _instruction: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
