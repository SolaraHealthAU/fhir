import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptVariableSchema() {
  return getCachedSchema("TestScriptVariable", () => {
    const baseSchema: z.ZodType<types.TestScriptVariable> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      defaultValue: primitives.getStringSchema().optional(),
      _defaultValue: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      expression: primitives.getStringSchema().optional(),
      _expression: z.lazy(() => createElementSchema()).optional(),
      headerField: primitives.getStringSchema().optional(),
      _headerField: z.lazy(() => createElementSchema()).optional(),
      hint: primitives.getStringSchema().optional(),
      _hint: z.lazy(() => createElementSchema()).optional(),
      path: primitives.getStringSchema().optional(),
      _path: z.lazy(() => createElementSchema()).optional(),
      sourceId: primitives.getIdSchema().optional(),
      _sourceId: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
