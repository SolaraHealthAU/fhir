import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.DiagnosticReport> = z.object({
    resourceType: z.literal("DiagnosticReport"),
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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
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
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    effectiveDateTime: z.string().optional(),
    _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    issued: primitives.createInstantSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    performer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    resultsInterpreter: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    specimen: z.array(z.lazy(() => createReferenceSchema())).optional(),
    result: z.array(z.lazy(() => createReferenceSchema())).optional(),
    imagingStudy: z.array(z.lazy(() => createReferenceSchema())).optional(),
    media: z
      .array(z.lazy(() => createDiagnosticReportMediaSchema()))
      .optional(),
    conclusion: primitives.createStringSchema().optional(),
    _conclusion: z.lazy(() => createElementSchema()).optional(),
    conclusionCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    presentedForm: z.array(z.lazy(() => createAttachmentSchema())).optional(),
  });

  return baseSchema;
}
