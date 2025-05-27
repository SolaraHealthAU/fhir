import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createSubscriptionTopicQueryCriteriaSchema } from "../subscriptiontopicquerycriteria/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionTopicResourceTriggerSchema() {
  const baseSchema: z.ZodType<types.SubscriptionTopicResourceTrigger> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      resource: primitives.createUriSchema().optional(),
      _resource: z.lazy(() => createElementSchema()).optional(),
      supportedInteraction: z.array(primitives.createCodeSchema()).optional(),
      _supportedInteraction: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
      queryCriteria: z
        .lazy(() => createSubscriptionTopicQueryCriteriaSchema())
        .optional(),
      fhirPathCriteria: primitives.createStringSchema().optional(),
      _fhirPathCriteria: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
