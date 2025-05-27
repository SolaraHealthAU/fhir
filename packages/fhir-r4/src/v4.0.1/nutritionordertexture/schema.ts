import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderTextureSchema() {
  return getCachedSchema("NutritionOrderTexture", () => {
    const baseSchema: z.ZodType<types.NutritionOrderTexture> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      modifier: createCodeableConceptSchema().optional(),
      foodType: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
