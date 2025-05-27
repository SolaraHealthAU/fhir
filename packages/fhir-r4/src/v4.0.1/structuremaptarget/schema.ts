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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      context: primitives.getIdSchema().optional(),
      _context: z.lazy(() => createElementSchema()).optional(),
      contextType: z.enum(["type", "variable"]).optional(),
      _contextType: z.lazy(() => createElementSchema()).optional(),
      element: primitives.getStringSchema().optional(),
      _element: z.lazy(() => createElementSchema()).optional(),
      variable: primitives.getIdSchema().optional(),
      _variable: z.lazy(() => createElementSchema()).optional(),
      listMode: z.array(z.any()).optional(),
      _listMode: z.array(z.lazy(() => createElementSchema())).optional(),
      listRuleId: primitives.getIdSchema().optional(),
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
      parameter: z.array(createStructureMapParameterSchema()).optional(),
    });

    return baseSchema;
  });
}
