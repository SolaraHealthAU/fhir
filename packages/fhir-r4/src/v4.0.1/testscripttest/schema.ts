import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTestScriptAction1Schema } from "../testscriptaction1/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptTestSchema() {
  return getCachedSchema("TestScriptTest", () => {
    const baseSchema: z.ZodType<types.TestScriptTest> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      action: z.array(createTestScriptAction1Schema()),
    });

    return baseSchema;
  });
}
