import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionTopicEventTriggerSchema() {
  const baseSchema: z.ZodType<types.SubscriptionTopicEventTrigger> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    event: z.lazy(() => createCodeableConceptSchema()),
    resource: primitives.createUriSchema().optional(),
    _resource: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
