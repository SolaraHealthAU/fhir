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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      source: primitives.getUriSchema().optional(),
      _source: createElementSchema().optional(),
      sourceVersion: primitives.getStringSchema().optional(),
      _sourceVersion: createElementSchema().optional(),
      target: primitives.getUriSchema().optional(),
      _target: createElementSchema().optional(),
      targetVersion: primitives.getStringSchema().optional(),
      _targetVersion: createElementSchema().optional(),
      element: z.array(createConceptMapElementSchema()),
      unmapped: createConceptMapUnmappedSchema().optional(),
    });

    return baseSchema;
  });
}
