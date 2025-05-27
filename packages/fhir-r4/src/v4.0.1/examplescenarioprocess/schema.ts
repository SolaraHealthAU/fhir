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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      title: primitives.getStringSchema(),
      _title: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      preConditions: primitives.getMarkdownSchema().optional(),
      _preConditions: z.lazy(() => createElementSchema()).optional(),
      postConditions: primitives.getMarkdownSchema().optional(),
      _postConditions: z.lazy(() => createElementSchema()).optional(),
      step: z.array(createExampleScenarioStepSchema()).optional(),
    });

    return baseSchema;
  });
}
