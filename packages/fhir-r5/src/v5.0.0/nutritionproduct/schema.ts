import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createCodeableReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createNutritionProductNutrientSchema } from "../nutritionproductnutrient/schema";
import { createNutritionProductIngredientSchema } from "../nutritionproductingredient/schema";
import { createNutritionProductCharacteristicSchema } from "../nutritionproductcharacteristic/schema";
import { createNutritionProductInstanceSchema } from "../nutritionproductinstance/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionProductSchema() {
  const baseSchema: z.ZodType<types.NutritionProduct> = z.object({
    resourceType: z.literal("NutritionProduct"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    nutrient: z
      .array(z.lazy(() => createNutritionProductNutrientSchema()))
      .optional(),
    ingredient: z
      .array(z.lazy(() => createNutritionProductIngredientSchema()))
      .optional(),
    knownAllergen: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    characteristic: z
      .array(z.lazy(() => createNutritionProductCharacteristicSchema()))
      .optional(),
    instance: z
      .array(z.lazy(() => createNutritionProductInstanceSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
