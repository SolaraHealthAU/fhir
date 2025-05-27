import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createRatioSchema,
  createRatioRangeSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";
import { createIngredientReferenceStrengthSchema } from "../ingredientreferencestrength/schema";

/* Generated from FHIR JSON Schema */

export function createIngredientStrengthSchema() {
  const baseSchema: z.ZodType<types.IngredientStrength> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    presentationRatio: z.lazy(() => createRatioSchema()).optional(),
    presentationRatioRange: z.lazy(() => createRatioRangeSchema()).optional(),
    presentationCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    presentationQuantity: z.lazy(() => createQuantitySchema()).optional(),
    textPresentation: primitives.createStringSchema().optional(),
    _textPresentation: z.lazy(() => createElementSchema()).optional(),
    concentrationRatio: z.lazy(() => createRatioSchema()).optional(),
    concentrationRatioRange: z.lazy(() => createRatioRangeSchema()).optional(),
    concentrationCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    concentrationQuantity: z.lazy(() => createQuantitySchema()).optional(),
    textConcentration: primitives.createStringSchema().optional(),
    _textConcentration: z.lazy(() => createElementSchema()).optional(),
    basis: z.lazy(() => createCodeableConceptSchema()).optional(),
    measurementPoint: primitives.createStringSchema().optional(),
    _measurementPoint: z.lazy(() => createElementSchema()).optional(),
    country: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    referenceStrength: z
      .array(z.lazy(() => createIngredientReferenceStrengthSchema()))
      .optional(),
  });

  return baseSchema;
}
