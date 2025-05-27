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
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDetectedIssueEvidenceSchema } from "../detectedissueevidence/schema";
import { createDetectedIssueMitigationSchema } from "../detectedissuemitigation/schema";

/* Generated from FHIR JSON Schema */

export function createDetectedIssueSchema() {
  return getCachedSchema("DetectedIssue", () => {
    const baseSchema: z.ZodType<types.DetectedIssue> = z.strictObject({
      resourceType: z.literal("DetectedIssue"),
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
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      severity: z.enum(["high", "moderate", "low"]).optional(),
      _severity: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema().optional(),
      identifiedDateTime: z.string().optional(),
      _identifiedDateTime: z.lazy(() => createElementSchema()).optional(),
      identifiedPeriod: createPeriodSchema().optional(),
      author: createReferenceSchema().optional(),
      implicated: z.array(createReferenceSchema()).optional(),
      evidence: z.array(createDetectedIssueEvidenceSchema()).optional(),
      detail: primitives.getStringSchema().optional(),
      _detail: z.lazy(() => createElementSchema()).optional(),
      reference: primitives.getUriSchema().optional(),
      _reference: z.lazy(() => createElementSchema()).optional(),
      mitigation: z.array(createDetectedIssueMitigationSchema()).optional(),
    });

    return baseSchema;
  });
}
