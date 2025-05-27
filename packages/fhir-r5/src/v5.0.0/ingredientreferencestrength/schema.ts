import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createRatioSchema,
  createRatioRangeSchema,
  createQuantitySchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createIngredientReferenceStrengthSchema() {
  const baseSchema: z.ZodType<types.IngredientReferenceStrength> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    substance: z.lazy(() => createCodeableReferenceSchema()),
    strengthRatio: z.lazy(() => createRatioSchema()).optional(),
    strengthRatioRange: z.lazy(() => createRatioRangeSchema()).optional(),
    strengthQuantity: z.lazy(() => createQuantitySchema()).optional(),
    measurementPoint: primitives.createStringSchema().optional(),
    _measurementPoint: z.lazy(() => createElementSchema()).optional(),
    country: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
