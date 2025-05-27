import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createTimingSchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionIntakeConsumedItemSchema() {
  const baseSchema: z.ZodType<types.NutritionIntakeConsumedItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    nutritionProduct: z.lazy(() => createCodeableReferenceSchema()),
    schedule: z.lazy(() => createTimingSchema()).optional(),
    amount: z.lazy(() => createQuantitySchema()).optional(),
    rate: z.lazy(() => createQuantitySchema()).optional(),
    notConsumed: primitives.createBooleanSchema().optional(),
    _notConsumed: z.lazy(() => createElementSchema()).optional(),
    notConsumedReason: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
