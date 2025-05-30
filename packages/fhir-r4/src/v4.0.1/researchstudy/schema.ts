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
  return getCachedSchema("ResearchStudy", () => {
    const baseSchema: z.ZodType<types.ResearchStudy> = z.strictObject({
      resourceType: z.literal("ResearchStudy"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      protocol: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
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
      primaryPurposeType: createCodeableConceptSchema().optional(),
      phase: createCodeableConceptSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      focus: z.array(createCodeableConceptSchema()).optional(),
      condition: z.array(createCodeableConceptSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      relatedArtifact: z.array(createRelatedArtifactSchema()).optional(),
      keyword: z.array(createCodeableConceptSchema()).optional(),
      location: z.array(createCodeableConceptSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      enrollment: z.array(createReferenceSchema()).optional(),
      period: createPeriodSchema().optional(),
      sponsor: createReferenceSchema().optional(),
      principalInvestigator: createReferenceSchema().optional(),
      site: z.array(createReferenceSchema()).optional(),
      reasonStopped: createCodeableConceptSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
      arm: z.array(createResearchStudyArmSchema()).optional(),
      objective: z.array(createResearchStudyObjectiveSchema()).optional(),
    });

    return baseSchema;
  });
}
