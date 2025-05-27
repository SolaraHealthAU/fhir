import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionIntakeIngredientLabelSchema() {
  const baseSchema: z.ZodType<types.NutritionIntakeIngredientLabel> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    nutrient: z.lazy(() => createCodeableReferenceSchema()),
    amount: z.lazy(() => createQuantitySchema()),
  });

  return baseSchema;
}
