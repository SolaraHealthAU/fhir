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
  createPeriodSchema,
  createCodeableReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCommunicationRequestPayloadSchema } from "../communicationrequestpayload/schema";

/* Generated from FHIR JSON Schema */

export function createCommunicationRequestSchema() {
  const baseSchema: z.ZodType<types.CommunicationRequest> = z.object({
    resourceType: z.literal("CommunicationRequest"),
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
    replaces: z.array(z.lazy(() => createReferenceSchema())).optional(),
    groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    medium: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    about: z.array(z.lazy(() => createReferenceSchema())).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    payload: z
      .array(z.lazy(() => createCommunicationRequestPayloadSchema()))
      .optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    recipient: z.array(z.lazy(() => createReferenceSchema())).optional(),
    informationProvider: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
