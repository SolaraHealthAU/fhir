import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRatioSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientReferenceStrengthSchema() {
  return getCachedSchema("MedicinalProductIngredientReferenceStrength", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIngredientReferenceStrength> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        substance: createCodeableConceptSchema().optional(),
        strength: createRatioSchema(),
        strengthLowLimit: createRatioSchema().optional(),
        measurementPoint: primitives.getStringSchema().optional(),
        _measurementPoint: z.lazy(() => createElementSchema()).optional(),
        country: z.array(createCodeableConceptSchema()).optional(),
      });

    return baseSchema;
  });
}
