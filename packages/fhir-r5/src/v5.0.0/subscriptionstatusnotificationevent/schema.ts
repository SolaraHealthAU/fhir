import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionStatusNotificationEventSchema() {
  const baseSchema: z.ZodType<types.SubscriptionStatusNotificationEvent> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      eventNumber: primitives.createInteger64Schema().optional(),
      _eventNumber: z.lazy(() => createElementSchema()).optional(),
      timestamp: primitives.createInstantSchema().optional(),
      _timestamp: z.lazy(() => createElementSchema()).optional(),
      focus: z.lazy(() => createReferenceSchema()).optional(),
      additionalContext: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
    });

  return baseSchema;
}
