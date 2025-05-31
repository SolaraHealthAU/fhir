import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapUnmappedSchema() {
  return getCachedSchema("ConceptMapUnmapped", () => {
    const baseSchema: z.ZodType<types.ConceptMapUnmapped> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      mode: z.enum(["provided", "fixed", "other-map"]).optional(),
      _mode: createElementSchema().optional(),
      code: primitives.getCodeSchema().optional(),
      _code: createElementSchema().optional(),
      display: primitives.getStringSchema().optional(),
      _display: createElementSchema().optional(),
      url: primitives.getCanonicalSchema().optional(),
    });

    return baseSchema;
  });
}
