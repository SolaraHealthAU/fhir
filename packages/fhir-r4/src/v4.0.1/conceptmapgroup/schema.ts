import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createConceptMapElementSchema } from "../conceptmapelement/schema";
import { createConceptMapUnmappedSchema } from "../conceptmapunmapped/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapGroupSchema() {
  return getCachedSchema("ConceptMapGroup", () => {
    const baseSchema: z.ZodType<types.ConceptMapGroup> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      source: primitives.getUriSchema().optional(),
      _source: z.lazy(() => createElementSchema()).optional(),
      sourceVersion: primitives.getStringSchema().optional(),
      _sourceVersion: z.lazy(() => createElementSchema()).optional(),
      target: primitives.getUriSchema().optional(),
      _target: z.lazy(() => createElementSchema()).optional(),
      targetVersion: primitives.getStringSchema().optional(),
      _targetVersion: z.lazy(() => createElementSchema()).optional(),
      element: z.array(createConceptMapElementSchema()),
      unmapped: createConceptMapUnmappedSchema().optional(),
    });

    return baseSchema;
  });
}
