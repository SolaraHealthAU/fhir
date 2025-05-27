import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createRatioSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductIngredientReferenceStrengthSchema } from "../medicinalproductingredientreferencestrength/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientStrengthSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductIngredientStrength> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      presentation: z.lazy(() => createRatioSchema()),
      presentationLowLimit: z.lazy(() => createRatioSchema()).optional(),
      concentration: z.lazy(() => createRatioSchema()).optional(),
      concentrationLowLimit: z.lazy(() => createRatioSchema()).optional(),
      measurementPoint: primitives.createStringSchema().optional(),
      _measurementPoint: z.lazy(() => createElementSchema()).optional(),
      country: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      referenceStrength: z
        .array(
          z.lazy(() =>
            createMedicinalProductIngredientReferenceStrengthSchema(),
          ),
        )
        .optional(),
    });

  return baseSchema;
}
