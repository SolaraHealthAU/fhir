import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRatioSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientReferenceStrengthSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductIngredientReferenceStrength> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      substance: z.lazy(() => createCodeableConceptSchema()).optional(),
      strength: z.lazy(() => createRatioSchema()),
      strengthLowLimit: z.lazy(() => createRatioSchema()).optional(),
      measurementPoint: primitives.createStringSchema().optional(),
      _measurementPoint: z.lazy(() => createElementSchema()).optional(),
      country: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    });

  return baseSchema;
}
