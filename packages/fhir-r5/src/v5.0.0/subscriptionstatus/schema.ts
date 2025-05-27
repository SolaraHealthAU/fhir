import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubscriptionStatusNotificationEventSchema } from "../subscriptionstatusnotificationevent/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionStatusSchema() {
  const baseSchema: z.ZodType<types.SubscriptionStatus> = z.object({
    resourceType: z.literal("SubscriptionStatus"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    eventsSinceSubscriptionStart: primitives.createInteger64Schema().optional(),
    _eventsSinceSubscriptionStart: z
      .lazy(() => createElementSchema())
      .optional(),
    notificationEvent: z
      .array(z.lazy(() => createSubscriptionStatusNotificationEventSchema()))
      .optional(),
    subscription: z.lazy(() => createReferenceSchema()),
    topic: primitives.createCanonicalSchema().optional(),
    error: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
