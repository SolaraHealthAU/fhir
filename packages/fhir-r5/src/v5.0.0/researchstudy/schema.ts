import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createRelatedArtifactSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createResearchStudyLabelSchema } from "../researchstudylabel/schema";
import { createResearchStudyAssociatedPartySchema } from "../researchstudyassociatedparty/schema";
import { createResearchStudyProgressStatusSchema } from "../researchstudyprogressstatus/schema";
import { createResearchStudyRecruitmentSchema } from "../researchstudyrecruitment/schema";
import { createResearchStudyComparisonGroupSchema } from "../researchstudycomparisongroup/schema";
import { createResearchStudyObjectiveSchema } from "../researchstudyobjective/schema";
import { createResearchStudyOutcomeMeasureSchema } from "../researchstudyoutcomemeasure/schema";

/* Generated from FHIR JSON Schema */

export function createResearchStudySchema() {
  const baseSchema: z.ZodType<types.ResearchStudy> = z.object({
    resourceType: z.literal("ResearchStudy"),
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
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    label: z.array(z.lazy(() => createResearchStudyLabelSchema())).optional(),
    protocol: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    primaryPurposeType: z.lazy(() => createCodeableConceptSchema()).optional(),
    phase: z.lazy(() => createCodeableConceptSchema()).optional(),
    studyDesign: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    focus: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    condition: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    keyword: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    region: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    descriptionSummary: primitives.createMarkdownSchema().optional(),
    _descriptionSummary: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    site: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    classifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    associatedParty: z
      .array(z.lazy(() => createResearchStudyAssociatedPartySchema()))
      .optional(),
    progressStatus: z
      .array(z.lazy(() => createResearchStudyProgressStatusSchema()))
      .optional(),
    whyStopped: z.lazy(() => createCodeableConceptSchema()).optional(),
    recruitment: z
      .lazy(() => createResearchStudyRecruitmentSchema())
      .optional(),
    comparisonGroup: z
      .array(z.lazy(() => createResearchStudyComparisonGroupSchema()))
      .optional(),
    objective: z
      .array(z.lazy(() => createResearchStudyObjectiveSchema()))
      .optional(),
    outcomeMeasure: z
      .array(z.lazy(() => createResearchStudyOutcomeMeasureSchema()))
      .optional(),
    result: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
