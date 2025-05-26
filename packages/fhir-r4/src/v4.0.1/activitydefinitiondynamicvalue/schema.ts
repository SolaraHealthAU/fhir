import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createActivityDefinitionDynamicValueSchema() {
  const baseSchema: z.ZodType<types.ActivityDefinitionDynamicValue> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    path: primitives.createStringSchema(),
    _path: z.lazy(() => createElementSchema()).optional(),
    expression: z.lazy(() => createExpressionSchema()),
  });

  return baseSchema;
}
