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

export function createMedicinalProductIngredientSubstanceSchema() {
  return getCachedSchema("MedicinalProductIngredientSubstance", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIngredientSubstance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema(),
        strength: z
          .array(createMedicinalProductIngredientStrengthSchema())
          .optional(),
      });

    return baseSchema;
  });
}
