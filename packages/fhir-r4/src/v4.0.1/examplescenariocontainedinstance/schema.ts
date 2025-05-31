import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioContainedInstanceSchema() {
  return getCachedSchema("ExampleScenarioContainedInstance", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioContainedInstance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        resourceId: primitives.getStringSchema().optional(),
        _resourceId: createElementSchema().optional(),
        versionId: primitives.getStringSchema().optional(),
        _versionId: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
