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
import { createImagingStudySeriesSchema } from "../imagingstudyseries/schema";

/* Generated from FHIR JSON Schema */

export function createImagingStudySchema() {
  const baseSchema: z.ZodType<types.ImagingStudy> = z.object({
    resourceType: z.literal("ImagingStudy"),
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
    modality: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    started: primitives.createDateTimeSchema().optional(),
    _started: z.lazy(() => createElementSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    referrer: z.lazy(() => createReferenceSchema()).optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
    numberOfSeries: primitives.createUnsignedIntSchema().optional(),
    _numberOfSeries: z.lazy(() => createElementSchema()).optional(),
    numberOfInstances: primitives.createUnsignedIntSchema().optional(),
    _numberOfInstances: z.lazy(() => createElementSchema()).optional(),
    procedure: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    series: z.array(z.lazy(() => createImagingStudySeriesSchema())).optional(),
  });

  return baseSchema;
}
