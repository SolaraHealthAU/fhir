import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createRatioSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductIngredientReferenceStrengthSchema } from "../medicinalproductingredientreferencestrength/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientStrengthSchema() {
  return getCachedSchema("MedicinalProductIngredientStrength", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIngredientStrength> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        presentation: createRatioSchema(),
        presentationLowLimit: createRatioSchema().optional(),
        concentration: createRatioSchema().optional(),
        concentrationLowLimit: createRatioSchema().optional(),
        measurementPoint: primitives.getStringSchema().optional(),
        _measurementPoint: z.lazy(() => createElementSchema()).optional(),
        country: z.array(createCodeableConceptSchema()).optional(),
        referenceStrength: z
          .array(createMedicinalProductIngredientReferenceStrengthSchema())
          .optional(),
      });

    return baseSchema;
  });
}
