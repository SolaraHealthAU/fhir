import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetParameterSchema() {
  const baseSchema: z.ZodType<types.ValueSetParameter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(() => createElementSchema()).optional(),
    valueUri: z.string().optional(),
    _valueUri: z.lazy(() => createElementSchema()).optional(),
    valueCode: z.string().optional(),
    _valueCode: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
