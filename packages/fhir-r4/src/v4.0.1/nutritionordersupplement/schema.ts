import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createTimingSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderSupplementSchema() {
  return getCachedSchema("NutritionOrderSupplement", () => {
    const baseSchema: z.ZodType<types.NutritionOrderSupplement> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        productName: primitives.getStringSchema().optional(),
        _productName: z.lazy(() => createElementSchema()).optional(),
        schedule: z.array(createTimingSchema()).optional(),
        quantity: createQuantitySchema().optional(),
        instruction: primitives.getStringSchema().optional(),
        _instruction: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
