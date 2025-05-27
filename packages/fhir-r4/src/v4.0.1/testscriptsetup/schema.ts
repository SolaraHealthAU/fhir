import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptActionSchema } from "../testscriptaction/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptSetupSchema() {
  const baseSchema: z.ZodType<types.TestScriptSetup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    action: z.array(z.lazy(() => createTestScriptActionSchema())),
  });

  return baseSchema;
}
