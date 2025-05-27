import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductIngredientStrengthSchema } from "../medicinalproductingredientstrength/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientSpecifiedSubstanceSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductIngredientSpecifiedSubstance> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      group: z.lazy(() => createCodeableConceptSchema()),
      confidentiality: z.lazy(() => createCodeableConceptSchema()).optional(),
      strength: z
        .array(z.lazy(() => createMedicinalProductIngredientStrengthSchema()))
        .optional(),
    });

  return baseSchema;
}
