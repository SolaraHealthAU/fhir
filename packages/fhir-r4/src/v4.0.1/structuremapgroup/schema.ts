import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapInputSchema } from "../structuremapinput/schema";
import { createStructureMapRuleSchema } from "../structuremaprule/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapGroupSchema() {
  const baseSchema: z.ZodType<types.StructureMapGroup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createIdSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    extends: primitives.createIdSchema().optional(),
    _extends: z.lazy(() => createElementSchema()).optional(),
    typeMode: z.enum(["none", "types", "type-and-types"]),
    _typeMode: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    input: z.array(z.lazy(() => createStructureMapInputSchema())),
    rule: z.array(z.lazy(() => createStructureMapRuleSchema())),
  });

  return baseSchema;
}
