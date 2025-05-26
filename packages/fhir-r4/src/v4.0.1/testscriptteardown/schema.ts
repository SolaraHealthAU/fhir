import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptAction2Schema } from "../testscriptaction2/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptTeardownSchema() {
  const baseSchema: z.ZodType<types.TestScriptTeardown> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    action: z.array(z.lazy(() => createTestScriptAction2Schema())),
  });

  return baseSchema;
}
