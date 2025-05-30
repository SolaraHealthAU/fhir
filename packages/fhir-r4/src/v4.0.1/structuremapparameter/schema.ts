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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      valueId: z.string().optional(),
      _valueId: z.lazy(() => createElementSchema()).optional(),
      valueString: z.string().optional(),
      _valueString: z.lazy(() => createElementSchema()).optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueInteger: z.number().optional(),
      _valueInteger: z.lazy(() => createElementSchema()).optional(),
      valueDecimal: z.number().optional(),
      _valueDecimal: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
