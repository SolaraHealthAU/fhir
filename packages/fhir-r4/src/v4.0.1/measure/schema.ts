import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMeasureGroupSchema } from "../measuregroup/schema";
import { createMeasureSupplementalDataSchema } from "../measuresupplementaldata/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureSchema() {
  return getCachedSchema("Measure", () => {
    const baseSchema: z.ZodType<types.Measure> = z.strictObject({
      resourceType: z.literal("Measure"),
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
      subtitle: primitives.getStringSchema().optional(),
      _subtitle: createElementSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      subjectCodeableConcept: createCodeableConceptSchema().optional(),
      subjectReference: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: createElementSchema().optional(),
      usage: primitives.getStringSchema().optional(),
      _usage: createElementSchema().optional(),
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
      library: z.array(primitives.getCanonicalSchema()).optional(),
      disclaimer: primitives.getMarkdownSchema().optional(),
      _disclaimer: createElementSchema().optional(),
      scoring: createCodeableConceptSchema().optional(),
      compositeScoring: createCodeableConceptSchema().optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      riskAdjustment: primitives.getStringSchema().optional(),
      _riskAdjustment: createElementSchema().optional(),
      rateAggregation: primitives.getStringSchema().optional(),
      _rateAggregation: createElementSchema().optional(),
      rationale: primitives.getMarkdownSchema().optional(),
      _rationale: createElementSchema().optional(),
      clinicalRecommendationStatement: primitives
        .getMarkdownSchema()
        .optional(),
      _clinicalRecommendationStatement: createElementSchema().optional(),
      improvementNotation: createCodeableConceptSchema().optional(),
      definition: z.array(primitives.getMarkdownSchema()).optional(),
      _definition: z.array(createElementSchema()).optional(),
      guidance: primitives.getMarkdownSchema().optional(),
      _guidance: createElementSchema().optional(),
      group: z.array(createMeasureGroupSchema()).optional(),
      supplementalData: z
        .array(createMeasureSupplementalDataSchema())
        .optional(),
    });

    return baseSchema;
  });
}
