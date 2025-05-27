import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createTimingSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderSupplementSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderSupplement> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    productName: primitives.createStringSchema().optional(),
    _productName: z.lazy(() => createElementSchema()).optional(),
    schedule: z.array(z.lazy(() => createTimingSchema())).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    instruction: primitives.createStringSchema().optional(),
    _instruction: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
