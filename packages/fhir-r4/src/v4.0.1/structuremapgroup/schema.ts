import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapInputSchema } from "../structuremapinput/schema";
import { createStructureMapRuleSchema } from "../structuremaprule/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapGroupSchema() {
  return getCachedSchema("StructureMapGroup", () => {
    const baseSchema: z.ZodType<types.StructureMapGroup> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      name: primitives.getIdSchema(),
      _name: createElementSchema().optional(),
      extends: primitives.getIdSchema().optional(),
      _extends: createElementSchema().optional(),
      typeMode: z.enum(["none", "types", "type-and-types"]),
      _typeMode: createElementSchema().optional(),
      documentation: primitives.getStringSchema().optional(),
      _documentation: createElementSchema().optional(),
      input: z.array(createStructureMapInputSchema()),
      rule: z.array(createStructureMapRuleSchema()),
    });

    return baseSchema;
  });
}
