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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      path: primitives.getStringSchema().optional(),
      _path: createElementSchema().optional(),
      sliceName: primitives.getStringSchema().optional(),
      _sliceName: createElementSchema().optional(),
      min: primitives.getIntegerSchema().optional(),
      _min: createElementSchema().optional(),
      max: primitives.getStringSchema().optional(),
      _max: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      target: z.array(createGraphDefinitionTargetSchema()).optional(),
    });

    return baseSchema;
  });
}
