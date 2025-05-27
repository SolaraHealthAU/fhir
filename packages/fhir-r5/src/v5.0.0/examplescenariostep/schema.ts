import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioProcessSchema } from "../examplescenarioprocess/schema";
import { createExampleScenarioOperationSchema } from "../examplescenariooperation/schema";
import { createExampleScenarioAlternativeSchema } from "../examplescenarioalternative/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioStepSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioStep> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    number: primitives.createStringSchema().optional(),
    _number: z.lazy(() => createElementSchema()).optional(),
    process: z.lazy(() => createExampleScenarioProcessSchema()).optional(),
    workflow: primitives.createCanonicalSchema().optional(),
    operation: z.lazy(() => createExampleScenarioOperationSchema()).optional(),
    alternative: z
      .array(z.lazy(() => createExampleScenarioAlternativeSchema()))
      .optional(),
    pause: primitives.createBooleanSchema().optional(),
    _pause: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
