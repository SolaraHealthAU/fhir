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
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRiskAssessmentPredictionSchema } from "../riskassessmentprediction/schema";

/* Generated from FHIR JSON Schema */

export function createRiskAssessmentSchema() {
  return getCachedSchema("RiskAssessment", () => {
    const baseSchema: z.ZodType<types.RiskAssessment> = z.strictObject({
      resourceType: z.literal("RiskAssessment"),
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
      basedOn: createReferenceSchema().optional(),
      parent: createReferenceSchema().optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      method: createCodeableConceptSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: createElementSchema().optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      condition: createReferenceSchema().optional(),
      performer: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      basis: z.array(createReferenceSchema()).optional(),
      prediction: z.array(createRiskAssessmentPredictionSchema()).optional(),
      mitigation: primitives.getStringSchema().optional(),
      _mitigation: createElementSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
