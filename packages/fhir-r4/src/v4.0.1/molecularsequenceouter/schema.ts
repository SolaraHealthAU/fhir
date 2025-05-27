import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceOuterSchema() {
  return getCachedSchema("MolecularSequenceOuter", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceOuter> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      start: primitives.getIntegerSchema().optional(),
      _start: z.lazy(() => createElementSchema()).optional(),
      end: primitives.getIntegerSchema().optional(),
      _end: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
