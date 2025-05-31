import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createNutritionOrderOralDietSchema } from "../nutritionorderoraldiet/schema";
import { createNutritionOrderSupplementSchema } from "../nutritionordersupplement/schema";
import { createNutritionOrderEnteralFormulaSchema } from "../nutritionorderenteralformula/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderSchema() {
  return getCachedSchema("NutritionOrder", () => {
    const baseSchema: z.ZodType<types.NutritionOrder> = z.strictObject({
      resourceType: z.literal("NutritionOrder"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(createElementSchema()).optional(),
      instantiates: z.array(primitives.getUriSchema()).optional(),
      _instantiates: z.array(createElementSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      intent: primitives.getCodeSchema(),
      _intent: createElementSchema().optional(),
      patient: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      dateTime: primitives.getDateTimeSchema(),
      _dateTime: createElementSchema().optional(),
      orderer: createReferenceSchema().optional(),
      allergyIntolerance: z.array(createReferenceSchema()).optional(),
      foodPreferenceModifier: z.array(createCodeableConceptSchema()).optional(),
      excludeFoodModifier: z.array(createCodeableConceptSchema()).optional(),
      oralDiet: createNutritionOrderOralDietSchema().optional(),
      supplement: z.array(createNutritionOrderSupplementSchema()).optional(),
      enteralFormula: createNutritionOrderEnteralFormulaSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
