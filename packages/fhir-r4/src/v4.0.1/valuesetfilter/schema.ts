import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetFilterSchema() {
  return getCachedSchema("ValueSetFilter", () => {
    const baseSchema: z.ZodType<types.ValueSetFilter> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      property: primitives.getCodeSchema().optional(),
      _property: createElementSchema().optional(),
      op: z
        .enum([
          "=",
          "is-a",
          "descendent-of",
          "is-not-a",
          "regex",
          "in",
          "not-in",
          "generalizes",
          "exists",
        ])
        .optional(),
      _op: createElementSchema().optional(),
      value: primitives.getStringSchema().optional(),
      _value: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
