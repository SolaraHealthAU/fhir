import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapStructureSchema() {
  const baseSchema: z.ZodType<types.StructureMapStructure> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    url: primitives.createCanonicalSchema(),
    mode: z.enum(["source", "queried", "target", "produced"]),
    _mode: z.lazy(() => createElementSchema()).optional(),
    alias: primitives.createStringSchema().optional(),
    _alias: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
