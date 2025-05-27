import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptRequestHeaderSchema() {
  return getCachedSchema("TestScriptRequestHeader", () => {
    const baseSchema: z.ZodType<types.TestScriptRequestHeader> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        field: primitives.getStringSchema().optional(),
        _field: z.lazy(() => createElementSchema()).optional(),
        value: primitives.getStringSchema().optional(),
        _value: z.lazy(() => createElementSchema()).optional(),
      },
    );

    return baseSchema;
  });
}
