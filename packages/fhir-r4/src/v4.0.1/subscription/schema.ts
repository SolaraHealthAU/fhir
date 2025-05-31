import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Subscription", () => {
    const baseSchema: z.ZodType<types.Subscription> = z.strictObject({
      resourceType: z.literal("Subscription"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      status: z.enum(["requested", "active", "error", "off"]),
      _status: createElementSchema().optional(),
      contact: z.array(createContactPointSchema()).optional(),
      end: primitives.getInstantSchema().optional(),
      _end: createElementSchema().optional(),
      reason: primitives.getStringSchema(),
      _reason: createElementSchema().optional(),
      criteria: primitives.getStringSchema(),
      _criteria: createElementSchema().optional(),
      error: primitives.getStringSchema().optional(),
      _error: createElementSchema().optional(),
      channel: createSubscriptionChannelSchema(),
    });

    return baseSchema;
  });
}
