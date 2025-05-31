import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapParameterSchema() {
  return getCachedSchema("StructureMapParameter", () => {
    const baseSchema: z.ZodType<types.StructureMapParameter> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      valueId: z.string().optional(),
      _valueId: createElementSchema().optional(),
      valueString: z.string().optional(),
      _valueString: createElementSchema().optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: createElementSchema().optional(),
      valueInteger: z.number().optional(),
      _valueInteger: createElementSchema().optional(),
      valueDecimal: z.number().optional(),
      _valueDecimal: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
