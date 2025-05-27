import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderNutrientSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderNutrient> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    modifier: z.lazy(() => createCodeableConceptSchema()).optional(),
    amount: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
