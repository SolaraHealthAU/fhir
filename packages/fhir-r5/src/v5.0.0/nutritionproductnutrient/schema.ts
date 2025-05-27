import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionProductNutrientSchema() {
  const baseSchema: z.ZodType<types.NutritionProductNutrient> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    item: z.lazy(() => createCodeableReferenceSchema()).optional(),
    amount: z.array(z.lazy(() => createRatioSchema())).optional(),
  });

  return baseSchema;
}
