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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createMediaSchema() {
  return getCachedSchema("Media", () => {
    const baseSchema: z.ZodType<types.Media> = z.strictObject({
      resourceType: z.literal("Media"),
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
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      modality: createCodeableConceptSchema().optional(),
      view: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      createdDateTime: z.string().optional(),
      _createdDateTime: z.lazy(() => createElementSchema()).optional(),
      createdPeriod: createPeriodSchema().optional(),
      issued: primitives.getInstantSchema().optional(),
      _issued: z.lazy(() => createElementSchema()).optional(),
      operator: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      bodySite: createCodeableConceptSchema().optional(),
      deviceName: primitives.getStringSchema().optional(),
      _deviceName: z.lazy(() => createElementSchema()).optional(),
      device: createReferenceSchema().optional(),
      height: primitives.getPositiveIntSchema().optional(),
      _height: z.lazy(() => createElementSchema()).optional(),
      width: primitives.getPositiveIntSchema().optional(),
      _width: z.lazy(() => createElementSchema()).optional(),
      frames: primitives.getPositiveIntSchema().optional(),
      _frames: z.lazy(() => createElementSchema()).optional(),
      duration: primitives.getDecimalSchema().optional(),
      _duration: z.lazy(() => createElementSchema()).optional(),
      content: createAttachmentSchema(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
