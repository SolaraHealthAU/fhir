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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      severity: z.enum(["high", "moderate", "low"]).optional(),
      _severity: createElementSchema().optional(),
      patient: createReferenceSchema().optional(),
      identifiedDateTime: z.string().optional(),
      _identifiedDateTime: createElementSchema().optional(),
      identifiedPeriod: createPeriodSchema().optional(),
      author: createReferenceSchema().optional(),
      implicated: z.array(createReferenceSchema()).optional(),
      evidence: z.array(createDetectedIssueEvidenceSchema()).optional(),
      detail: primitives.getStringSchema().optional(),
      _detail: createElementSchema().optional(),
      reference: primitives.getUriSchema().optional(),
      _reference: createElementSchema().optional(),
      mitigation: z.array(createDetectedIssueMitigationSchema()).optional(),
    });

    return baseSchema;
  });
}
