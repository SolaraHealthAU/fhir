import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createCodeableReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createNutritionIntakeConsumedItemSchema } from "../nutritionintakeconsumeditem/schema";
import { createNutritionIntakeIngredientLabelSchema } from "../nutritionintakeingredientlabel/schema";
import { createNutritionIntakePerformerSchema } from "../nutritionintakeperformer/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionIntakeSchema() {
  const baseSchema: z.ZodType<types.NutritionIntake> = z.object({
    resourceType: z.literal("NutritionIntake"),
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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    recorded: primitives.createDateTimeSchema().optional(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    reportedBoolean: z.boolean().optional(),
    _reportedBoolean: z.lazy(() => createElementSchema()).optional(),
    reportedReference: z.lazy(() => createReferenceSchema()).optional(),
    consumedItem: z.array(
      z.lazy(() => createNutritionIntakeConsumedItemSchema()),
    ),
    ingredientLabel: z
      .array(z.lazy(() => createNutritionIntakeIngredientLabelSchema()))
      .optional(),
    performer: z
      .array(z.lazy(() => createNutritionIntakePerformerSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    derivedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
