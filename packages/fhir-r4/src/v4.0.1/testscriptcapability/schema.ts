import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptCapabilitySchema() {
  const baseSchema: z.ZodType<types.TestScriptCapability> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    required: primitives.createBooleanSchema().optional(),
    _required: z.lazy(() => createElementSchema()).optional(),
    validated: primitives.createBooleanSchema().optional(),
    _validated: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    origin: z.array(primitives.createIntegerSchema()).optional(),
    _origin: z.array(z.lazy(() => createElementSchema())).optional(),
    destination: primitives.createIntegerSchema().optional(),
    _destination: z.lazy(() => createElementSchema()).optional(),
    link: z.array(primitives.createUriSchema()).optional(),
    _link: z.array(z.lazy(() => createElementSchema())).optional(),
    capabilities: primitives.createCanonicalSchema(),
  });

  return baseSchema;
}
