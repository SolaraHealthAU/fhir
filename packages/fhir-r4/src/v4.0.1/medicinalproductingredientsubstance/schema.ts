import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductIngredientStrengthSchema } from "../medicinalproductingredientstrength/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientSubstanceSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductIngredientSubstance> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      strength: z
        .array(z.lazy(() => createMedicinalProductIngredientStrengthSchema()))
        .optional(),
    });

  return baseSchema;
}
