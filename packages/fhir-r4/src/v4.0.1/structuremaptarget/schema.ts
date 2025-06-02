import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapParameterSchema } from "../structuremapparameter/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapTargetSchema() {
  return getCachedSchema("StructureMapTarget", () => {
    const baseSchema: z.ZodType<types.StructureMapTarget> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      context: primitives.getIdSchema().optional(),
      _context: createElementSchema().optional(),
      contextType: z.enum(["type", "variable"]).optional(),
      _contextType: createElementSchema().optional(),
      element: primitives.getStringSchema().optional(),
      _element: createElementSchema().optional(),
      variable: primitives.getIdSchema().optional(),
      _variable: createElementSchema().optional(),
      listMode: z
        .enum(["first", "share", "last", "collate"])
        .array()
        .optional(),
      _listMode: z.array(createElementSchema()).optional(),
      listRuleId: primitives.getIdSchema().optional(),
      _listRuleId: createElementSchema().optional(),
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
      _transform: createElementSchema().optional(),
      parameter: z.array(createStructureMapParameterSchema()).optional(),
    });

    return baseSchema;
  });
}
