import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductIngredientStrengthSchema } from "../medicinalproductingredientstrength/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientSpecifiedSubstanceSchema() {
  return getCachedSchema("MedicinalProductIngredientSpecifiedSubstance", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIngredientSpecifiedSubstance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: createCodeableConceptSchema(),
        group: createCodeableConceptSchema(),
        confidentiality: createCodeableConceptSchema().optional(),
        strength: z
          .array(createMedicinalProductIngredientStrengthSchema())
          .optional(),
      });

    return baseSchema;
  });
}
