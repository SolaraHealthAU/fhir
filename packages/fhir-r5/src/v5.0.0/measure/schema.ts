import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMeasureTermSchema } from "../measureterm/schema";
import { createMeasureGroupSchema } from "../measuregroup/schema";
import { createMeasureSupplementalDataSchema } from "../measuresupplementaldata/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureSchema() {
  const baseSchema: z.ZodType<types.Measure> = z.object({
    resourceType: z.literal("Measure"),
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
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmString: z.string().optional(),
    _versionAlgorithmString: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmCoding: z.lazy(() => createCodingSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    copyrightLabel: primitives.createStringSchema().optional(),
    _copyrightLabel: z.lazy(() => createElementSchema()).optional(),
    approvalDate: primitives.createDateSchema().optional(),
    _approvalDate: z.lazy(() => createElementSchema()).optional(),
    lastReviewDate: primitives.createDateSchema().optional(),
    _lastReviewDate: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    topic: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    author: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    editor: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    reviewer: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    endorser: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    subtitle: primitives.createStringSchema().optional(),
    _subtitle: z.lazy(() => createElementSchema()).optional(),
    subjectCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    subjectReference: z.lazy(() => createReferenceSchema()).optional(),
    basis: primitives.createCodeSchema().optional(),
    _basis: z.lazy(() => createElementSchema()).optional(),
    usage: primitives.createMarkdownSchema().optional(),
    _usage: z.lazy(() => createElementSchema()).optional(),
    library: z.array(primitives.createCanonicalSchema()).optional(),
    disclaimer: primitives.createMarkdownSchema().optional(),
    _disclaimer: z.lazy(() => createElementSchema()).optional(),
    scoring: z.lazy(() => createCodeableConceptSchema()).optional(),
    scoringUnit: z.lazy(() => createCodeableConceptSchema()).optional(),
    compositeScoring: z.lazy(() => createCodeableConceptSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    riskAdjustment: primitives.createMarkdownSchema().optional(),
    _riskAdjustment: z.lazy(() => createElementSchema()).optional(),
    rateAggregation: primitives.createMarkdownSchema().optional(),
    _rateAggregation: z.lazy(() => createElementSchema()).optional(),
    rationale: primitives.createMarkdownSchema().optional(),
    _rationale: z.lazy(() => createElementSchema()).optional(),
    clinicalRecommendationStatement: primitives
      .createMarkdownSchema()
      .optional(),
    _clinicalRecommendationStatement: z
      .lazy(() => createElementSchema())
      .optional(),
    improvementNotation: z.lazy(() => createCodeableConceptSchema()).optional(),
    term: z.array(z.lazy(() => createMeasureTermSchema())).optional(),
    guidance: primitives.createMarkdownSchema().optional(),
    _guidance: z.lazy(() => createElementSchema()).optional(),
    group: z.array(z.lazy(() => createMeasureGroupSchema())).optional(),
    supplementalData: z
      .array(z.lazy(() => createMeasureSupplementalDataSchema()))
      .optional(),
  });

  return baseSchema;
}
