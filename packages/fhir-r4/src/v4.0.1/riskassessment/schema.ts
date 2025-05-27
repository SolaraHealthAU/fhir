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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRiskAssessmentPredictionSchema } from "../riskassessmentprediction/schema";

/* Generated from FHIR JSON Schema */

export function createRiskAssessmentSchema() {
  const baseSchema: z.ZodType<types.RiskAssessment> = z.object({
    resourceType: z.literal("RiskAssessment"),
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
    basedOn: z.lazy(() => createReferenceSchema()).optional(),
    parent: z.lazy(() => createReferenceSchema()).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    condition: z.lazy(() => createReferenceSchema()).optional(),
    performer: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    basis: z.array(z.lazy(() => createReferenceSchema())).optional(),
    prediction: z
      .array(z.lazy(() => createRiskAssessmentPredictionSchema()))
      .optional(),
    mitigation: primitives.createStringSchema().optional(),
    _mitigation: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
