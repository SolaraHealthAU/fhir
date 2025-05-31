import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioStepSchema } from "../examplescenariostep/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioProcessSchema() {
  return getCachedSchema("ExampleScenarioProcess", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioProcess> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      title: primitives.getStringSchema(),
      _title: createElementSchema().optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      preConditions: primitives.getMarkdownSchema().optional(),
      _preConditions: createElementSchema().optional(),
      postConditions: primitives.getMarkdownSchema().optional(),
      _postConditions: createElementSchema().optional(),
      step: z.array(createExampleScenarioStepSchema()).optional(),
    });

    return baseSchema;
  });
}
