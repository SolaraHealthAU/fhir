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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCommunicationRequestPayloadSchema } from "../communicationrequestpayload/schema";

/* Generated from FHIR JSON Schema */

export function createCommunicationRequestSchema() {
  return getCachedSchema("CommunicationRequest", () => {
    const baseSchema: z.ZodType<types.CommunicationRequest> = z.strictObject({
      resourceType: z.literal("CommunicationRequest"),
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
      replaces: z.array(createReferenceSchema()).optional(),
      groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: createCodeableConceptSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: z.lazy(() => createElementSchema()).optional(),
      medium: z.array(createCodeableConceptSchema()).optional(),
      subject: createReferenceSchema().optional(),
      about: z.array(createReferenceSchema()).optional(),
      encounter: createReferenceSchema().optional(),
      payload: z.array(createCommunicationRequestPayloadSchema()).optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: z.lazy(() => createElementSchema()).optional(),
      requester: createReferenceSchema().optional(),
      recipient: z.array(createReferenceSchema()).optional(),
      sender: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
