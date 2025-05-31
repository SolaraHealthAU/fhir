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
  createPeriodSchema,
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDiagnosticReportMediaSchema } from "../diagnosticreportmedia/schema";

/* Generated from FHIR JSON Schema */

export function createDiagnosticReportSchema() {
  return getCachedSchema("DiagnosticReport", () => {
    const baseSchema: z.ZodType<types.DiagnosticReport> = z.strictObject({
      resourceType: z.literal("DiagnosticReport"),
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
      basedOn: z.array(createReferenceSchema()).optional(),
      status: z.enum([
        "registered",
        "partial",
        "preliminary",
        "final",
        "amended",
        "corrected",
        "appended",
        "cancelled",
        "entered-in-error",
        "unknown",
      ]),
      _status: createElementSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      code: createCodeableConceptSchema(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      effectiveDateTime: z.string().optional(),
      _effectiveDateTime: createElementSchema().optional(),
      effectivePeriod: createPeriodSchema().optional(),
      issued: primitives.getInstantSchema().optional(),
      _issued: createElementSchema().optional(),
      performer: z.array(createReferenceSchema()).optional(),
      resultsInterpreter: z.array(createReferenceSchema()).optional(),
      specimen: z.array(createReferenceSchema()).optional(),
      result: z.array(createReferenceSchema()).optional(),
      imagingStudy: z.array(createReferenceSchema()).optional(),
      media: z.array(createDiagnosticReportMediaSchema()).optional(),
      conclusion: primitives.getStringSchema().optional(),
      _conclusion: createElementSchema().optional(),
      conclusionCode: z.array(createCodeableConceptSchema()).optional(),
      presentedForm: z.array(createAttachmentSchema()).optional(),
    });

    return baseSchema;
  });
}
