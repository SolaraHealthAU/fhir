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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCommunicationPayloadSchema } from "../communicationpayload/schema";

/* Generated from FHIR JSON Schema */

export function createCommunicationSchema() {
  const baseSchema: z.ZodType<types.Communication> = z.object({
    resourceType: z.literal("Communication"),
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
    instantiatesCanonical: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    instantiatesUri: z.array(primitives.createUriSchema()).optional(),
    _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    inResponseTo: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    medium: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    topic: z.lazy(() => createCodeableConceptSchema()).optional(),
    about: z.array(z.lazy(() => createReferenceSchema())).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    sent: primitives.createDateTimeSchema().optional(),
    _sent: z.lazy(() => createElementSchema()).optional(),
    received: primitives.createDateTimeSchema().optional(),
    _received: z.lazy(() => createElementSchema()).optional(),
    recipient: z.array(z.lazy(() => createReferenceSchema())).optional(),
    sender: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    payload: z
      .array(z.lazy(() => createCommunicationPayloadSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
