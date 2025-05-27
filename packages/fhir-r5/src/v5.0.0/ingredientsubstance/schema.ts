import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createIngredientStrengthSchema } from "../ingredientstrength/schema";

/* Generated from FHIR JSON Schema */

export function createIngredientSubstanceSchema() {
  const baseSchema: z.ZodType<types.IngredientSubstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableReferenceSchema()),
    strength: z
      .array(z.lazy(() => createIngredientStrengthSchema()))
      .optional(),
  });

  return baseSchema;
}
