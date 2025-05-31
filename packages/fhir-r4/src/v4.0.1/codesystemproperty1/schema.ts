import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemProperty1Schema() {
  return getCachedSchema("CodeSystemProperty1", () => {
    const baseSchema: z.ZodType<types.CodeSystemProperty1> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: createElementSchema().optional(),
      valueCode: z.string().optional(),
      _valueCode: createElementSchema().optional(),
      valueCoding: createCodingSchema().optional(),
      valueString: z.string().optional(),
      _valueString: createElementSchema().optional(),
      valueInteger: z.number().optional(),
      _valueInteger: createElementSchema().optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: createElementSchema().optional(),
      valueDateTime: z.string().optional(),
      _valueDateTime: createElementSchema().optional(),
      valueDecimal: z.number().optional(),
      _valueDecimal: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
