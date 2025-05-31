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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      name: primitives.getStringSchema(),
      _name: createElementSchema().optional(),
      defaultValue: primitives.getStringSchema().optional(),
      _defaultValue: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      expression: primitives.getStringSchema().optional(),
      _expression: createElementSchema().optional(),
      headerField: primitives.getStringSchema().optional(),
      _headerField: createElementSchema().optional(),
      hint: primitives.getStringSchema().optional(),
      _hint: createElementSchema().optional(),
      path: primitives.getStringSchema().optional(),
      _path: createElementSchema().optional(),
      sourceId: primitives.getIdSchema().optional(),
      _sourceId: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
