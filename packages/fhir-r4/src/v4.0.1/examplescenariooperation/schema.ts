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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        number: primitives.getStringSchema().optional(),
        _number: z.lazy(() => createElementSchema()).optional(),
        type: primitives.getStringSchema().optional(),
        _type: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        initiator: primitives.getStringSchema().optional(),
        _initiator: z.lazy(() => createElementSchema()).optional(),
        receiver: primitives.getStringSchema().optional(),
        _receiver: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        initiatorActive: primitives.getBooleanSchema().optional(),
        _initiatorActive: z.lazy(() => createElementSchema()).optional(),
        receiverActive: primitives.getBooleanSchema().optional(),
        _receiverActive: z.lazy(() => createElementSchema()).optional(),
        request: createExampleScenarioContainedInstanceSchema().optional(),
        response: createExampleScenarioContainedInstanceSchema().optional(),
      });

    return baseSchema;
  });
}
