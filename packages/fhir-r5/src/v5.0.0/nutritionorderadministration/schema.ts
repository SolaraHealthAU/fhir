import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";
import { createNutritionOrderSchedule2Schema } from "../nutritionorderschedule2/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderAdministrationSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderAdministration> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    schedule: z.lazy(() => createNutritionOrderSchedule2Schema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    rateQuantity: z.lazy(() => createQuantitySchema()).optional(),
    rateRatio: z.lazy(() => createRatioSchema()).optional(),
  });

  return baseSchema;
}
