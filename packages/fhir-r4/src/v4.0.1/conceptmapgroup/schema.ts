import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createConceptMapElementSchema } from "../conceptmapelement/schema";
import { createConceptMapUnmappedSchema } from "../conceptmapunmapped/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapGroupSchema() {
  const baseSchema: z.ZodType<types.ConceptMapGroup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    source: primitives.createUriSchema().optional(),
    _source: z.lazy(() => createElementSchema()).optional(),
    sourceVersion: primitives.createStringSchema().optional(),
    _sourceVersion: z.lazy(() => createElementSchema()).optional(),
    target: primitives.createUriSchema().optional(),
    _target: z.lazy(() => createElementSchema()).optional(),
    targetVersion: primitives.createStringSchema().optional(),
    _targetVersion: z.lazy(() => createElementSchema()).optional(),
    element: z.array(z.lazy(() => createConceptMapElementSchema())),
    unmapped: z.lazy(() => createConceptMapUnmappedSchema()).optional(),
  });

  return baseSchema;
}
