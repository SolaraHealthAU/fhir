import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapDependentSchema() {
  return getCachedSchema("StructureMapDependent", () => {
    const baseSchema: z.ZodType<types.StructureMapDependent> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getIdSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      variable: z.array(primitives.getStringSchema()).optional(),
      _variable: z.array(z.lazy(() => createElementSchema())).optional(),
    });

    return baseSchema;
  });
}
