import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableReferenceSchema,
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
  const baseSchema: z.ZodType<types.NutritionOrder> = z.object({
    resourceType: z.literal("NutritionOrder"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    instantiatesCanonical: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    instantiatesUri: z.array(primitives.createUriSchema()).optional(),
    _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
    instantiates: z.array(primitives.createUriSchema()).optional(),
    _instantiates: z.array(z.lazy(() => createElementSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    dateTime: primitives.createDateTimeSchema().optional(),
    _dateTime: z.lazy(() => createElementSchema()).optional(),
    orderer: z.lazy(() => createReferenceSchema()).optional(),
    performer: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    allergyIntolerance: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    foodPreferenceModifier: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    excludeFoodModifier: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    outsideFoodAllowed: primitives.createBooleanSchema().optional(),
    _outsideFoodAllowed: z.lazy(() => createElementSchema()).optional(),
    oralDiet: z.lazy(() => createNutritionOrderOralDietSchema()).optional(),
    supplement: z
      .array(z.lazy(() => createNutritionOrderSupplementSchema()))
      .optional(),
    enteralFormula: z
      .lazy(() => createNutritionOrderEnteralFormulaSchema())
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
