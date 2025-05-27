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
  createCodeableReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createGenomicStudyAnalysisSchema } from "../genomicstudyanalysis/schema";

/* Generated from FHIR JSON Schema */

export function createGenomicStudySchema() {
  const baseSchema: z.ZodType<types.GenomicStudy> = z.object({
    resourceType: z.literal("GenomicStudy"),
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
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    startDate: primitives.createDateTimeSchema().optional(),
    _startDate: z.lazy(() => createElementSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    referrer: z.lazy(() => createReferenceSchema()).optional(),
    interpreter: z.array(z.lazy(() => createReferenceSchema())).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    instantiatesCanonical: primitives.createCanonicalSchema().optional(),
    instantiatesUri: primitives.createUriSchema().optional(),
    _instantiatesUri: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    analysis: z
      .array(z.lazy(() => createGenomicStudyAnalysisSchema()))
      .optional(),
  });

  return baseSchema;
}
