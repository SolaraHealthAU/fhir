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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getIdSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      type: primitives.getStringSchema().optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      mode: z.enum(["source", "target"]).optional(),
      _mode: z.lazy(() => createElementSchema()).optional(),
      documentation: primitives.getStringSchema().optional(),
      _documentation: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
