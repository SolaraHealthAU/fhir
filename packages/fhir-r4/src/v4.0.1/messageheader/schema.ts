import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MessageHeader", () => {
    const baseSchema: z.ZodType<types.MessageHeader> = z.strictObject({
      resourceType: z.literal("MessageHeader"),
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
      eventCoding: createCodingSchema().optional(),
      eventUri: z.string().optional(),
      _eventUri: z.lazy(() => createElementSchema()).optional(),
      destination: z.array(createMessageHeaderDestinationSchema()).optional(),
      sender: createReferenceSchema().optional(),
      enterer: createReferenceSchema().optional(),
      author: createReferenceSchema().optional(),
      source: createMessageHeaderSourceSchema(),
      responsible: createReferenceSchema().optional(),
      reason: createCodeableConceptSchema().optional(),
      response: createMessageHeaderResponseSchema().optional(),
      focus: z.array(createReferenceSchema()).optional(),
      definition: primitives.getCanonicalSchema().optional(),
    });

    return baseSchema;
  });
}
