import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceInnerSchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceInner> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    start: primitives.createIntegerSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createIntegerSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
