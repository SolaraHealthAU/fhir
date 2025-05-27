import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapUnmappedSchema() {
  const baseSchema: z.ZodType<types.ConceptMapUnmapped> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    mode: primitives.createCodeSchema().optional(),
    _mode: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    valueSet: primitives.createCanonicalSchema().optional(),
    relationship: primitives.createCodeSchema().optional(),
    _relationship: z.lazy(() => createElementSchema()).optional(),
    otherMap: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}
