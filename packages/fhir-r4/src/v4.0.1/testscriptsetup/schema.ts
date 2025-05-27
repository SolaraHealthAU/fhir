import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptActionSchema } from "../testscriptaction/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptSetupSchema() {
  return getCachedSchema("TestScriptSetup", () => {
    const baseSchema: z.ZodType<types.TestScriptSetup> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      action: z.array(createTestScriptActionSchema()),
    });

    return baseSchema;
  });
}
