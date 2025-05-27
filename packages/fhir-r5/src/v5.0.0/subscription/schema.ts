import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createContactPointSchema,
  createReferenceSchema,
  createCodingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubscriptionFilterBySchema } from "../subscriptionfilterby/schema";
import { createSubscriptionParameterSchema } from "../subscriptionparameter/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionSchema() {
  const baseSchema: z.ZodType<types.Subscription> = z.object({
    resourceType: z.literal("Subscription"),
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
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    topic: primitives.createCanonicalSchema(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    end: primitives.createInstantSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    managingEntity: z.lazy(() => createReferenceSchema()).optional(),
    reason: primitives.createStringSchema().optional(),
    _reason: z.lazy(() => createElementSchema()).optional(),
    filterBy: z
      .array(z.lazy(() => createSubscriptionFilterBySchema()))
      .optional(),
    channelType: z.lazy(() => createCodingSchema()),
    endpoint: primitives.createUrlSchema().optional(),
    _endpoint: z.lazy(() => createElementSchema()).optional(),
    parameter: z
      .array(z.lazy(() => createSubscriptionParameterSchema()))
      .optional(),
    heartbeatPeriod: primitives.createUnsignedIntSchema().optional(),
    _heartbeatPeriod: z.lazy(() => createElementSchema()).optional(),
    timeout: primitives.createUnsignedIntSchema().optional(),
    _timeout: z.lazy(() => createElementSchema()).optional(),
    contentType: primitives.createCodeSchema().optional(),
    _contentType: z.lazy(() => createElementSchema()).optional(),
    content: primitives.createCodeSchema().optional(),
    _content: z.lazy(() => createElementSchema()).optional(),
    maxCount: primitives.createPositiveIntSchema().optional(),
    _maxCount: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
