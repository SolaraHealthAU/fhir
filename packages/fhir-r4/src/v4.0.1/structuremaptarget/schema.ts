import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapParameterSchema } from "../structuremapparameter/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapTargetSchema() {
  const baseSchema: z.ZodType<types.StructureMapTarget> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    context: primitives.createIdSchema().optional(),
    _context: z.lazy(() => createElementSchema()).optional(),
    contextType: z.enum(["type", "variable"]).optional(),
    _contextType: z.lazy(() => createElementSchema()).optional(),
    element: primitives.createStringSchema().optional(),
    _element: z.lazy(() => createElementSchema()).optional(),
    variable: primitives.createIdSchema().optional(),
    _variable: z.lazy(() => createElementSchema()).optional(),
    listMode: z.array(z.any()).optional(),
    _listMode: z.array(z.lazy(() => createElementSchema())).optional(),
    listRuleId: primitives.createIdSchema().optional(),
    _listRuleId: z.lazy(() => createElementSchema()).optional(),
    transform: z
      .enum([
        "create",
        "copy",
        "truncate",
        "escape",
        "cast",
        "append",
        "translate",
        "reference",
        "dateOp",
        "uuid",
        "pointer",
        "evaluate",
        "cc",
        "c",
        "qty",
        "id",
        "cp",
      ])
      .optional(),
    _transform: z.lazy(() => createElementSchema()).optional(),
    parameter: z
      .array(z.lazy(() => createStructureMapParameterSchema()))
      .optional(),
  });

  return baseSchema;
}
