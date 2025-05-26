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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createMediaSchema() {
  const baseSchema: z.ZodType<types.Media> = z.object({
    resourceType: z.literal("Media"),
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
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    modality: z.lazy(() => createCodeableConceptSchema()).optional(),
    view: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    createdDateTime: z.string().optional(),
    _createdDateTime: z.lazy(() => createElementSchema()).optional(),
    createdPeriod: z.lazy(() => createPeriodSchema()).optional(),
    issued: primitives.createInstantSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    operator: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    bodySite: z.lazy(() => createCodeableConceptSchema()).optional(),
    deviceName: primitives.createStringSchema().optional(),
    _deviceName: z.lazy(() => createElementSchema()).optional(),
    device: z.lazy(() => createReferenceSchema()).optional(),
    height: primitives.createPositiveIntSchema().optional(),
    _height: z.lazy(() => createElementSchema()).optional(),
    width: primitives.createPositiveIntSchema().optional(),
    _width: z.lazy(() => createElementSchema()).optional(),
    frames: primitives.createPositiveIntSchema().optional(),
    _frames: z.lazy(() => createElementSchema()).optional(),
    duration: primitives.createDecimalSchema().optional(),
    _duration: z.lazy(() => createElementSchema()).optional(),
    content: z.lazy(() => createAttachmentSchema()),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
