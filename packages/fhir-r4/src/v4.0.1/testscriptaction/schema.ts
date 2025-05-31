import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptOperationSchema } from "../testscriptoperation/schema";
import { createTestScriptAssertSchema } from "../testscriptassert/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptActionSchema() {
  return getCachedSchema("TestScriptAction", () => {
    const baseSchema: z.ZodType<types.TestScriptAction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      operation: createTestScriptOperationSchema().optional(),
      assert: createTestScriptAssertSchema().optional(),
    });

    return baseSchema;
  });
}
