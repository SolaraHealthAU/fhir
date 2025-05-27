import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapSourceSchema() {
  const baseSchema: z.ZodType<types.StructureMapSource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    context: primitives.createIdSchema().optional(),
    _context: z.lazy(() => createElementSchema()).optional(),
    min: primitives.createIntegerSchema().optional(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema().optional(),
    _max: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createStringSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    defaultValue: primitives.createStringSchema().optional(),
    _defaultValue: z.lazy(() => createElementSchema()).optional(),
    element: primitives.createStringSchema().optional(),
    _element: z.lazy(() => createElementSchema()).optional(),
    listMode: primitives.createCodeSchema().optional(),
    _listMode: z.lazy(() => createElementSchema()).optional(),
    variable: primitives.createIdSchema().optional(),
    _variable: z.lazy(() => createElementSchema()).optional(),
    condition: primitives.createStringSchema().optional(),
    _condition: z.lazy(() => createElementSchema()).optional(),
    check: primitives.createStringSchema().optional(),
    _check: z.lazy(() => createElementSchema()).optional(),
    logMessage: primitives.createStringSchema().optional(),
    _logMessage: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
