import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createArtifactAssessmentContentSchema } from "../artifactassessmentcontent/schema";

/* Generated from FHIR JSON Schema */

export function createArtifactAssessmentSchema() {
  const baseSchema: z.ZodType<types.ArtifactAssessment> = z.object({
    resourceType: z.literal("ArtifactAssessment"),
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
    citeAsReference: z.lazy(() => createReferenceSchema()).optional(),
    citeAsMarkdown: z.string().optional(),
    _citeAsMarkdown: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    approvalDate: primitives.createDateSchema().optional(),
    _approvalDate: z.lazy(() => createElementSchema()).optional(),
    lastReviewDate: primitives.createDateSchema().optional(),
    _lastReviewDate: z.lazy(() => createElementSchema()).optional(),
    artifactReference: z.lazy(() => createReferenceSchema()).optional(),
    artifactCanonical: z.string().optional(),
    _artifactCanonical: z.lazy(() => createElementSchema()).optional(),
    artifactUri: z.string().optional(),
    _artifactUri: z.lazy(() => createElementSchema()).optional(),
    content: z
      .array(z.lazy(() => createArtifactAssessmentContentSchema()))
      .optional(),
    workflowStatus: primitives.createCodeSchema().optional(),
    _workflowStatus: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createCodeSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
