import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapConstSchema() {
  const baseSchema: z.ZodType<types.StructureMapConst> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createIdSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
