import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodingSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMessageHeaderDestinationSchema } from "../messageheaderdestination/schema";
import { createMessageHeaderSourceSchema } from "../messageheadersource/schema";
import { createMessageHeaderResponseSchema } from "../messageheaderresponse/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderSchema() {
  const baseSchema: z.ZodType<types.MessageHeader> = z.object({
    resourceType: z.literal("MessageHeader"),
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
    eventCoding: z.lazy(() => createCodingSchema()).optional(),
    eventUri: z.string().optional(),
    _eventUri: z.lazy(() => createElementSchema()).optional(),
    destination: z
      .array(z.lazy(() => createMessageHeaderDestinationSchema()))
      .optional(),
    sender: z.lazy(() => createReferenceSchema()).optional(),
    enterer: z.lazy(() => createReferenceSchema()).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    source: z.lazy(() => createMessageHeaderSourceSchema()),
    responsible: z.lazy(() => createReferenceSchema()).optional(),
    reason: z.lazy(() => createCodeableConceptSchema()).optional(),
    response: z.lazy(() => createMessageHeaderResponseSchema()).optional(),
    focus: z.array(z.lazy(() => createReferenceSchema())).optional(),
    definition: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}
