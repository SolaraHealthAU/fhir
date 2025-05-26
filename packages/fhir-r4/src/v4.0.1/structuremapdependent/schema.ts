import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapDependentSchema() {
  const baseSchema: z.ZodType<types.StructureMapDependent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createIdSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    variable: z.array(primitives.createStringSchema()).optional(),
    _variable: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
