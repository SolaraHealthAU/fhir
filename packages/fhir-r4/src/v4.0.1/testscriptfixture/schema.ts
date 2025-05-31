import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptFixtureSchema() {
  return getCachedSchema("TestScriptFixture", () => {
    const baseSchema: z.ZodType<types.TestScriptFixture> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      autocreate: primitives.getBooleanSchema(),
      _autocreate: createElementSchema().optional(),
      autodelete: primitives.getBooleanSchema(),
      _autodelete: createElementSchema().optional(),
      resource: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
