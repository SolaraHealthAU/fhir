import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapSourceSchema } from "../structuremapsource/schema";
import { createStructureMapTargetSchema } from "../structuremaptarget/schema";
import { createStructureMapDependentSchema } from "../structuremapdependent/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapRuleSchema() {
  return getCachedSchema("StructureMapRule", () => {
    const baseSchema: z.ZodType<types.StructureMapRule> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getIdSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      source: z.array(createStructureMapSourceSchema()),
      target: z.array(createStructureMapTargetSchema()).optional(),
      rule: z.array(createStructureMapRuleSchema()).optional(),
      dependent: z.array(createStructureMapDependentSchema()).optional(),
      documentation: primitives.getStringSchema().optional(),
      _documentation: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
