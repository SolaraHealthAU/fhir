import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionTopicQueryCriteriaSchema() {
  const baseSchema: z.ZodType<types.SubscriptionTopicQueryCriteria> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    previous: primitives.createStringSchema().optional(),
    _previous: z.lazy(() => createElementSchema()).optional(),
    resultForCreate: primitives.createCodeSchema().optional(),
    _resultForCreate: z.lazy(() => createElementSchema()).optional(),
    current: primitives.createStringSchema().optional(),
    _current: z.lazy(() => createElementSchema()).optional(),
    resultForDelete: primitives.createCodeSchema().optional(),
    _resultForDelete: z.lazy(() => createElementSchema()).optional(),
    requireBoth: primitives.createBooleanSchema().optional(),
    _requireBoth: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
