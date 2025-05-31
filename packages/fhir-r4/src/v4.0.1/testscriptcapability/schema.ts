import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptCapabilitySchema() {
  return getCachedSchema("TestScriptCapability", () => {
    const baseSchema: z.ZodType<types.TestScriptCapability> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      required: primitives.getBooleanSchema().optional(),
      _required: createElementSchema().optional(),
      validated: primitives.getBooleanSchema().optional(),
      _validated: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      origin: z.array(primitives.getIntegerSchema()).optional(),
      _origin: z.array(createElementSchema()).optional(),
      destination: primitives.getIntegerSchema().optional(),
      _destination: createElementSchema().optional(),
      link: z.array(primitives.getUriSchema()).optional(),
      _link: z.array(createElementSchema()).optional(),
      capabilities: primitives.getCanonicalSchema(),
    });

    return baseSchema;
  });
}
