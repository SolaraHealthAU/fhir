import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemFilterSchema() {
  return getCachedSchema("CodeSystemFilter", () => {
    const baseSchema: z.ZodType<types.CodeSystemFilter> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema(),
      _code: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      operator: z.array(primitives.getCodeSchema()),
      _operator: z.array(createElementSchema()).optional(),
      value: primitives.getStringSchema(),
      _value: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
