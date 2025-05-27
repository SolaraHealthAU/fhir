import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderTextureSchema() {
  const baseSchema: z.ZodType<types.NutritionOrderTexture> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    modifier: z.lazy(() => createCodeableConceptSchema()).optional(),
    foodType: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
