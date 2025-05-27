import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptAction2Schema } from "../testscriptaction2/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptTeardownSchema() {
  return getCachedSchema("TestScriptTeardown", () => {
    const baseSchema: z.ZodType<types.TestScriptTeardown> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      action: z.array(createTestScriptAction2Schema()),
    });

    return baseSchema;
  });
}
