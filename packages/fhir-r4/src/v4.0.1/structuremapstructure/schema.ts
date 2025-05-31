import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapStructureSchema() {
  return getCachedSchema("StructureMapStructure", () => {
    const baseSchema: z.ZodType<types.StructureMapStructure> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      url: primitives.getCanonicalSchema(),
      mode: z.enum(["source", "queried", "target", "produced"]),
      _mode: createElementSchema().optional(),
      alias: primitives.getStringSchema().optional(),
      _alias: createElementSchema().optional(),
      documentation: primitives.getStringSchema().optional(),
      _documentation: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
