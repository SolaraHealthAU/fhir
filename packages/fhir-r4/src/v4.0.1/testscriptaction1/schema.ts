import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptOperationSchema } from "../testscriptoperation/schema";
import { createTestScriptAssertSchema } from "../testscriptassert/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptAction1Schema() {
  const baseSchema: z.ZodType<types.TestScriptAction1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    operation: z.lazy(() => createTestScriptOperationSchema()).optional(),
    assert: z.lazy(() => createTestScriptAssertSchema()).optional(),
  });

  return baseSchema;
}
