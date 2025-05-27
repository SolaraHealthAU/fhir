import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubscriptionTopicCanFilterBySchema() {
  const baseSchema: z.ZodType<types.SubscriptionTopicCanFilterBy> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    resource: primitives.createUriSchema().optional(),
    _resource: z.lazy(() => createElementSchema()).optional(),
    filterParameter: primitives.createStringSchema().optional(),
    _filterParameter: z.lazy(() => createElementSchema()).optional(),
    filterDefinition: primitives.createUriSchema().optional(),
    _filterDefinition: z.lazy(() => createElementSchema()).optional(),
    comparator: z.array(primitives.createCodeSchema()).optional(),
    _comparator: z.array(z.lazy(() => createElementSchema())).optional(),
    modifier: z.array(primitives.createCodeSchema()).optional(),
    _modifier: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
