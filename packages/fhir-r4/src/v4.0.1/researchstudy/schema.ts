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
  createContactDetailSchema,
  createRelatedArtifactSchema,
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createResearchStudyArmSchema } from "../researchstudyarm/schema";
import { createResearchStudyObjectiveSchema } from "../researchstudyobjective/schema";

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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    protocol: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: z.enum([
      "active",
      "administratively-completed",
      "approved",
      "closed-to-accrual",
      "closed-to-accrual-and-intervention",
      "completed",
      "disapproved",
      "in-review",
      "temporarily-closed-to-accrual",
      "temporarily-closed-to-accrual-and-intervention",
      "withdrawn",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    primaryPurposeType: z.lazy(() => createCodeableConceptSchema()).optional(),
    phase: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    focus: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    condition: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    keyword: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    location: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    enrollment: z.array(z.lazy(() => createReferenceSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    sponsor: z.lazy(() => createReferenceSchema()).optional(),
    principalInvestigator: z.lazy(() => createReferenceSchema()).optional(),
    site: z.array(z.lazy(() => createReferenceSchema())).optional(),
    reasonStopped: z.lazy(() => createCodeableConceptSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    arm: z.array(z.lazy(() => createResearchStudyArmSchema())).optional(),
    objective: z
      .array(z.lazy(() => createResearchStudyObjectiveSchema()))
      .optional(),
  });

  return baseSchema;
}
