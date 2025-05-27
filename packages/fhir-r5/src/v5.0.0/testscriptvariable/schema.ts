import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptVariableSchema() {
  const baseSchema: z.ZodType<types.TestScriptVariable> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    defaultValue: primitives.createStringSchema().optional(),
    _defaultValue: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    headerField: primitives.createStringSchema().optional(),
    _headerField: z.lazy(() => createElementSchema()).optional(),
    hint: primitives.createStringSchema().optional(),
    _hint: z.lazy(() => createElementSchema()).optional(),
    path: primitives.createStringSchema().optional(),
    _path: z.lazy(() => createElementSchema()).optional(),
    sourceId: primitives.createIdSchema().optional(),
    _sourceId: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
