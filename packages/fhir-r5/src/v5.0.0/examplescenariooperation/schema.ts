import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";
import { createExampleScenarioContainedInstanceSchema } from "../examplescenariocontainedinstance/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioOperationSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioOperation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodingSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
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
