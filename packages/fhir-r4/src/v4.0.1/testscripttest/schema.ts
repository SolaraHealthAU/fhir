import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTestScriptAction1Schema } from "../testscriptaction1/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptTestSchema() {
  const baseSchema: z.ZodType<types.TestScriptTest> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    action: z.array(z.lazy(() => createTestScriptAction1Schema())),
  });

  return baseSchema;
}
