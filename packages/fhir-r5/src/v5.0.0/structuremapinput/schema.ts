import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapInputSchema() {
  const baseSchema: z.ZodType<types.StructureMapInput> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createIdSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createStringSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    mode: primitives.createCodeSchema().optional(),
    _mode: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
