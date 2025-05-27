import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTestPlanScriptSchema } from "../testplanscript/schema";

/* Generated from FHIR JSON Schema */

export function createTestPlanTestRunSchema() {
  const baseSchema: z.ZodType<types.TestPlanTestRun> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    narrative: primitives.createMarkdownSchema().optional(),
    _narrative: z.lazy(() => createElementSchema()).optional(),
    script: z.lazy(() => createTestPlanScriptSchema()).optional(),
  });

  return baseSchema;
}
