import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioContainedInstanceSchema } from "../examplescenariocontainedinstance/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioOperationSchema() {
  return getCachedSchema("ExampleScenarioOperation", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioOperation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        number: primitives.getStringSchema().optional(),
        _number: createElementSchema().optional(),
        type: primitives.getStringSchema().optional(),
        _type: createElementSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        initiator: primitives.getStringSchema().optional(),
        _initiator: createElementSchema().optional(),
        receiver: primitives.getStringSchema().optional(),
        _receiver: createElementSchema().optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: createElementSchema().optional(),
        initiatorActive: primitives.getBooleanSchema().optional(),
        _initiatorActive: createElementSchema().optional(),
        receiverActive: primitives.getBooleanSchema().optional(),
        _receiverActive: createElementSchema().optional(),
        request: createExampleScenarioContainedInstanceSchema().optional(),
        response: createExampleScenarioContainedInstanceSchema().optional(),
      });

    return baseSchema;
  });
}
