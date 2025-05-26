import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionChannelSchema() {
  const baseSchema: z.ZodType<types.SubscriptionChannel> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.enum(["rest-hook", "websocket", "email", "sms", "message"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    endpoint: primitives.createUrlSchema().optional(),
    _endpoint: z.lazy(() => createElementSchema()).optional(),
    payload: primitives.createCodeSchema().optional(),
    _payload: z.lazy(() => createElementSchema()).optional(),
    header: z.array(primitives.createStringSchema()).optional(),
    _header: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
