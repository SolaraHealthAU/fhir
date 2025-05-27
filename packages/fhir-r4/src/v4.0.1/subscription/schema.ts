import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createContactPointSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubscriptionChannelSchema } from "../subscriptionchannel/schema";

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
    status: z.enum(["requested", "active", "error", "off"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    end: primitives.createInstantSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    reason: primitives.createStringSchema(),
    _reason: z.lazy(() => createElementSchema()).optional(),
    criteria: primitives.createStringSchema(),
    _criteria: z.lazy(() => createElementSchema()).optional(),
    error: primitives.createStringSchema().optional(),
    _error: z.lazy(() => createElementSchema()).optional(),
    channel: z.lazy(() => createSubscriptionChannelSchema()),
  });

  return baseSchema;
}
