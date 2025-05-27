import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioStepSchema } from "../examplescenariostep/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioProcessSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioProcess> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    preConditions: primitives.createMarkdownSchema().optional(),
    _preConditions: z.lazy(() => createElementSchema()).optional(),
    postConditions: primitives.createMarkdownSchema().optional(),
    _postConditions: z.lazy(() => createElementSchema()).optional(),
    step: z.array(z.lazy(() => createExampleScenarioStepSchema())).optional(),
  });

  return baseSchema;
}
