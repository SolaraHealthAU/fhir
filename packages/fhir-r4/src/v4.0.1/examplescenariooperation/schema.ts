import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createExampleScenarioContainedInstanceSchema } from "../examplescenariocontainedinstance/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioOperationSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioOperation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    number: primitives.createStringSchema().optional(),
    _number: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createStringSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    initiator: primitives.createStringSchema().optional(),
    _initiator: z.lazy(() => createElementSchema()).optional(),
    receiver: primitives.createStringSchema().optional(),
    _receiver: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    initiatorActive: primitives.createBooleanSchema().optional(),
    _initiatorActive: z.lazy(() => createElementSchema()).optional(),
    receiverActive: primitives.createBooleanSchema().optional(),
    _receiverActive: z.lazy(() => createElementSchema()).optional(),
    request: z
      .lazy(() => createExampleScenarioContainedInstanceSchema())
      .optional(),
    response: z
      .lazy(() => createExampleScenarioContainedInstanceSchema())
      .optional(),
  });

  return baseSchema;
}
