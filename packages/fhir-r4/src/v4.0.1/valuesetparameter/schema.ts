import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetParameterSchema() {
  return getCachedSchema("ValueSetParameter", () => {
    const baseSchema: z.ZodType<types.ValueSetParameter> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      valueString: z.string().optional(),
      _valueString: createElementSchema().optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: createElementSchema().optional(),
      valueInteger: z.number().optional(),
      _valueInteger: createElementSchema().optional(),
      valueDecimal: z.number().optional(),
      _valueDecimal: createElementSchema().optional(),
      valueUri: z.string().optional(),
      _valueUri: createElementSchema().optional(),
      valueCode: z.string().optional(),
      _valueCode: createElementSchema().optional(),
      valueDateTime: z.string().optional(),
      _valueDateTime: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
