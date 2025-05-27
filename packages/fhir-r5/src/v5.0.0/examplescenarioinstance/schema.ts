import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createReferenceSchema,
} from "../core/schema";
import { createExampleScenarioVersionSchema } from "../examplescenarioversion/schema";
import { createExampleScenarioContainedInstanceSchema } from "../examplescenariocontainedinstance/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioInstanceSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    key: primitives.createStringSchema().optional(),
    _key: z.lazy(() => createElementSchema()).optional(),
    structureType: z.lazy(() => createCodingSchema()),
    structureVersion: primitives.createStringSchema().optional(),
    _structureVersion: z.lazy(() => createElementSchema()).optional(),
    structureProfileCanonical: z.string().optional(),
    _structureProfileCanonical: z.lazy(() => createElementSchema()).optional(),
    structureProfileUri: z.string().optional(),
    _structureProfileUri: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    content: z.lazy(() => createReferenceSchema()).optional(),
    version: z
      .array(z.lazy(() => createExampleScenarioVersionSchema()))
      .optional(),
    containedInstance: z
      .array(z.lazy(() => createExampleScenarioContainedInstanceSchema()))
      .optional(),
  });

  return baseSchema;
}
