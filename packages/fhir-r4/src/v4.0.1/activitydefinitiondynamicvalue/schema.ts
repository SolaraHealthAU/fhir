import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createActivityDefinitionDynamicValueSchema() {
  return getCachedSchema("ActivityDefinitionDynamicValue", () => {
    const baseSchema: z.ZodType<types.ActivityDefinitionDynamicValue> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        path: primitives.getStringSchema(),
        _path: createElementSchema().optional(),
        expression: createExpressionSchema(),
      });

    return baseSchema;
  });
}
