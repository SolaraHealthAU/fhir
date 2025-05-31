import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioVersionSchema() {
  return getCachedSchema("ExampleScenarioVersion", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioVersion> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      versionId: primitives.getStringSchema().optional(),
      _versionId: createElementSchema().optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
