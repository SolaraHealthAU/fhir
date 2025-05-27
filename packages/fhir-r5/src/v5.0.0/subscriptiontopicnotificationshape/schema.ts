import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionTopicNotificationShapeSchema() {
  const baseSchema: z.ZodType<types.SubscriptionTopicNotificationShape> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      resource: primitives.createUriSchema().optional(),
      _resource: z.lazy(() => createElementSchema()).optional(),
      include: z.array(primitives.createStringSchema()).optional(),
      _include: z.array(z.lazy(() => createElementSchema())).optional(),
      revInclude: z.array(primitives.createStringSchema()).optional(),
      _revInclude: z.array(z.lazy(() => createElementSchema())).optional(),
    });

  return baseSchema;
}
