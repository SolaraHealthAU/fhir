import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptOperationSchema } from "../testscriptoperation/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptAction2Schema() {
  return getCachedSchema("TestScriptAction2", () => {
    const baseSchema: z.ZodType<types.TestScriptAction2> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      operation: createTestScriptOperationSchema(),
    });

    return baseSchema;
  });
}
