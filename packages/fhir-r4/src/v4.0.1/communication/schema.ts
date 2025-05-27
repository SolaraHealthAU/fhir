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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCommunicationPayloadSchema } from "../communicationpayload/schema";

/* Generated from FHIR JSON Schema */

export function createCommunicationSchema() {
  return getCachedSchema("Communication", () => {
    const baseSchema: z.ZodType<types.Communication> = z.strictObject({
      resourceType: z.literal("Communication"),
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
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      inResponseTo: z.array(createReferenceSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: createCodeableConceptSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      medium: z.array(createCodeableConceptSchema()).optional(),
      subject: createReferenceSchema().optional(),
      topic: createCodeableConceptSchema().optional(),
      about: z.array(createReferenceSchema()).optional(),
      encounter: createReferenceSchema().optional(),
      sent: primitives.getDateTimeSchema().optional(),
      _sent: z.lazy(() => createElementSchema()).optional(),
      received: primitives.getDateTimeSchema().optional(),
      _received: z.lazy(() => createElementSchema()).optional(),
      recipient: z.array(createReferenceSchema()).optional(),
      sender: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      payload: z.array(createCommunicationPayloadSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
