import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapInputSchema() {
  return getCachedSchema("StructureMapInput", () => {
    const baseSchema: z.ZodType<types.StructureMapInput> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      name: primitives.getIdSchema().optional(),
      _name: createElementSchema().optional(),
      type: primitives.getStringSchema().optional(),
      _type: createElementSchema().optional(),
      mode: z.enum(["source", "target"]).optional(),
      _mode: createElementSchema().optional(),
      documentation: primitives.getStringSchema().optional(),
      _documentation: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
