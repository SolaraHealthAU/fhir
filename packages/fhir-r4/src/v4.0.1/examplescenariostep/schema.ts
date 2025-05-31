import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioProcessSchema } from "../examplescenarioprocess/schema";
import { createExampleScenarioOperationSchema } from "../examplescenariooperation/schema";
import { createExampleScenarioAlternativeSchema } from "../examplescenarioalternative/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioStepSchema() {
  return getCachedSchema("ExampleScenarioStep", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioStep> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      process: z.array(createExampleScenarioProcessSchema()).optional(),
      pause: primitives.getBooleanSchema().optional(),
      _pause: createElementSchema().optional(),
      operation: createExampleScenarioOperationSchema().optional(),
      alternative: z.array(createExampleScenarioAlternativeSchema()).optional(),
    });

    return baseSchema;
  });
}
