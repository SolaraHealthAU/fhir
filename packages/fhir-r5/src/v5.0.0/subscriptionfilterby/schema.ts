import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionFilterBySchema() {
  const baseSchema: z.ZodType<types.SubscriptionFilterBy> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    resourceType: z.literal("SubscriptionFilterBy"),
    _resourceType: z.lazy(() => createElementSchema()).optional(),
    filterParameter: primitives.createStringSchema().optional(),
    _filterParameter: z.lazy(() => createElementSchema()).optional(),
    comparator: primitives.createCodeSchema().optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    modifier: primitives.createCodeSchema().optional(),
    _modifier: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
