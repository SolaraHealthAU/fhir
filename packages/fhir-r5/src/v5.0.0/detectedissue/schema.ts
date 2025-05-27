import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDetectedIssueEvidenceSchema } from "../detectedissueevidence/schema";
import { createDetectedIssueMitigationSchema } from "../detectedissuemitigation/schema";

/* Generated from FHIR JSON Schema */

export function createDetectedIssueSchema() {
  const baseSchema: z.ZodType<types.DetectedIssue> = z.object({
    resourceType: z.literal("DetectedIssue"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    severity: primitives.createCodeSchema().optional(),
    _severity: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    identifiedDateTime: z.string().optional(),
    _identifiedDateTime: z.lazy(() => createElementSchema()).optional(),
    identifiedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    implicated: z.array(z.lazy(() => createReferenceSchema())).optional(),
    evidence: z
      .array(z.lazy(() => createDetectedIssueEvidenceSchema()))
      .optional(),
    detail: primitives.createMarkdownSchema().optional(),
    _detail: z.lazy(() => createElementSchema()).optional(),
    reference: primitives.createUriSchema().optional(),
    _reference: z.lazy(() => createElementSchema()).optional(),
    mitigation: z
      .array(z.lazy(() => createDetectedIssueMitigationSchema()))
      .optional(),
  });

  return baseSchema;
}
