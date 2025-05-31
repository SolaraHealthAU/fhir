import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionChannelSchema() {
  return getCachedSchema("SubscriptionChannel", () => {
    const baseSchema: z.ZodType<types.SubscriptionChannel> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: z.enum(["rest-hook", "websocket", "email", "sms", "message"]),
      _type: createElementSchema().optional(),
      endpoint: primitives.getUrlSchema().optional(),
      _endpoint: createElementSchema().optional(),
      payload: primitives.getCodeSchema().optional(),
      _payload: createElementSchema().optional(),
      header: z.array(primitives.getStringSchema()).optional(),
      _header: z.array(createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
