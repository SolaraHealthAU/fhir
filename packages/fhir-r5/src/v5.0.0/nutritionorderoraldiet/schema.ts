import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createNutritionOrderScheduleSchema } from "../nutritionorderschedule/schema";
import { createNutritionOrderNutrientSchema } from "../nutritionordernutrient/schema";
import { createNutritionOrderTextureSchema } from "../nutritionordertexture/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderOralDietSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderOralDiet> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    schedule: z.lazy(() => createNutritionOrderScheduleSchema()).optional(),
    nutrient: z
      .array(z.lazy(() => createNutritionOrderNutrientSchema()))
      .optional(),
    texture: z
      .array(z.lazy(() => createNutritionOrderTextureSchema()))
      .optional(),
    fluidConsistencyType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    instruction: primitives.createStringSchema().optional(),
    _instruction: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
