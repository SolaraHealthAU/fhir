import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioVersionSchema } from "../examplescenarioversion/schema";
import { createExampleScenarioContainedInstanceSchema } from "../examplescenariocontainedinstance/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioInstanceSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    resourceId: primitives.createStringSchema(),
    _resourceId: z.lazy(() => createElementSchema()).optional(),
    resourceType: z.literal("ExampleScenarioInstance"),
    _resourceType: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    version: z
      .array(z.lazy(() => createExampleScenarioVersionSchema()))
      .optional(),
    containedInstance: z
      .array(z.lazy(() => createExampleScenarioContainedInstanceSchema()))
      .optional(),
  });

  return baseSchema;
}
