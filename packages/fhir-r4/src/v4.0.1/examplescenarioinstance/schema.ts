import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioVersionSchema } from "../examplescenarioversion/schema";
import { createExampleScenarioContainedInstanceSchema } from "../examplescenariocontainedinstance/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioInstanceSchema() {
  return getCachedSchema("ExampleScenarioInstance", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioInstance> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        resourceId: primitives.getStringSchema(),
        _resourceId: z.lazy(() => createElementSchema()).optional(),
        resourceType: z.literal("ExampleScenarioInstance"),
        _resourceType: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        version: z.array(createExampleScenarioVersionSchema()).optional(),
        containedInstance: z
          .array(createExampleScenarioContainedInstanceSchema())
          .optional(),
      },
    );

    return baseSchema;
  });
}
