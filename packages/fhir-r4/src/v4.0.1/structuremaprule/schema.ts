import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapSourceSchema } from "../structuremapsource/schema";
import { createStructureMapTargetSchema } from "../structuremaptarget/schema";
import { createStructureMapDependentSchema } from "../structuremapdependent/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapRuleSchema() {
  const baseSchema: z.ZodType<types.StructureMapRule> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createIdSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    source: z.array(z.lazy(() => createStructureMapSourceSchema())),
    target: z.array(z.lazy(() => createStructureMapTargetSchema())).optional(),
    rule: z.array(z.lazy(() => createStructureMapRuleSchema())).optional(),
    dependent: z
      .array(z.lazy(() => createStructureMapDependentSchema()))
      .optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
