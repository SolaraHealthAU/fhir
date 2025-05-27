import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createGraphDefinitionTargetSchema } from "../graphdefinitiontarget/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionLinkSchema() {
  return getCachedSchema("GraphDefinitionLink", () => {
    const baseSchema: z.ZodType<types.GraphDefinitionLink> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      path: primitives.getStringSchema().optional(),
      _path: z.lazy(() => createElementSchema()).optional(),
      sliceName: primitives.getStringSchema().optional(),
      _sliceName: z.lazy(() => createElementSchema()).optional(),
      min: primitives.getIntegerSchema().optional(),
      _min: z.lazy(() => createElementSchema()).optional(),
      max: primitives.getStringSchema().optional(),
      _max: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      target: z.array(createGraphDefinitionTargetSchema()).optional(),
    });

    return baseSchema;
  });
}
