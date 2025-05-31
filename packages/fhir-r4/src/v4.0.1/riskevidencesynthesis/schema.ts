import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createContactDetailSchema,
  createAnnotationSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRiskEvidenceSynthesisSampleSizeSchema } from "../riskevidencesynthesissamplesize/schema";
import { createRiskEvidenceSynthesisRiskEstimateSchema } from "../riskevidencesynthesisriskestimate/schema";
import { createRiskEvidenceSynthesisCertaintySchema } from "../riskevidencesynthesiscertainty/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisSchema() {
  return getCachedSchema("RiskEvidenceSynthesis", () => {
    const baseSchema: z.ZodType<types.RiskEvidenceSynthesis> = z.strictObject({
      resourceType: z.literal("RiskEvidenceSynthesis"),
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
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: createElementSchema().optional(),
      approvalDate: primitives.getDateSchema().optional(),
      _approvalDate: createElementSchema().optional(),
      lastReviewDate: primitives.getDateSchema().optional(),
      _lastReviewDate: createElementSchema().optional(),
      effectivePeriod: createPeriodSchema().optional(),
      topic: z.array(createCodeableConceptSchema()).optional(),
      author: z.array(createContactDetailSchema()).optional(),
      editor: z.array(createContactDetailSchema()).optional(),
      reviewer: z.array(createContactDetailSchema()).optional(),
      endorser: z.array(createContactDetailSchema()).optional(),
      relatedArtifact: z.array(createRelatedArtifactSchema()).optional(),
      synthesisType: createCodeableConceptSchema().optional(),
      studyType: createCodeableConceptSchema().optional(),
      population: createReferenceSchema(),
      exposure: createReferenceSchema().optional(),
      outcome: createReferenceSchema(),
      sampleSize: createRiskEvidenceSynthesisSampleSizeSchema().optional(),
      riskEstimate: createRiskEvidenceSynthesisRiskEstimateSchema().optional(),
      certainty: z
        .array(createRiskEvidenceSynthesisCertaintySchema())
        .optional(),
    });

    return baseSchema;
  });
}
