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
  createCodeableReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createImagingSelectionPerformerSchema } from "../imagingselectionperformer/schema";
import { createImagingSelectionInstanceSchema } from "../imagingselectioninstance/schema";

/* Generated from FHIR JSON Schema */

export function createImagingSelectionSchema() {
  const baseSchema: z.ZodType<types.ImagingSelection> = z.object({
    resourceType: z.literal("ImagingSelection"),
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
    subject: z.lazy(() => createReferenceSchema()).optional(),
    issued: primitives.createInstantSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    performer: z
      .array(z.lazy(() => createImagingSelectionPerformerSchema()))
      .optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    studyUid: primitives.createIdSchema().optional(),
    _studyUid: z.lazy(() => createElementSchema()).optional(),
    derivedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
    seriesUid: primitives.createIdSchema().optional(),
    _seriesUid: z.lazy(() => createElementSchema()).optional(),
    seriesNumber: primitives.createUnsignedIntSchema().optional(),
    _seriesNumber: z.lazy(() => createElementSchema()).optional(),
    frameOfReferenceUid: primitives.createIdSchema().optional(),
    _frameOfReferenceUid: z.lazy(() => createElementSchema()).optional(),
    bodySite: z.lazy(() => createCodeableReferenceSchema()).optional(),
    focus: z.array(z.lazy(() => createReferenceSchema())).optional(),
    instance: z
      .array(z.lazy(() => createImagingSelectionInstanceSchema()))
      .optional(),
  });

  return baseSchema;
}
