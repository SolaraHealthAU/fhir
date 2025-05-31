import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioStepSchema } from "../examplescenariostep/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioAlternativeSchema() {
  return getCachedSchema("ExampleScenarioAlternative", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioAlternative> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        title: primitives.getStringSchema().optional(),
        _title: createElementSchema().optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: createElementSchema().optional(),
        step: z.array(createExampleScenarioStepSchema()).optional(),
      });

    return baseSchema;
  });
}
