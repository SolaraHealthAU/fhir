import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createTimingSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderAdministrationSchema() {
  return getCachedSchema("NutritionOrderAdministration", () => {
    const baseSchema: z.ZodType<types.NutritionOrderAdministration> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        schedule: createTimingSchema().optional(),
        quantity: createQuantitySchema().optional(),
        rateQuantity: createQuantitySchema().optional(),
        rateRatio: createRatioSchema().optional(),
      });

    return baseSchema;
  });
}
