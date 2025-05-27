import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
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
    source: primitives.createCanonicalSchema().optional(),
    target: primitives.createCanonicalSchema().optional(),
    element: z.array(z.lazy(() => createConceptMapElementSchema())),
    unmapped: z.lazy(() => createConceptMapUnmappedSchema()).optional(),
  });

  return baseSchema;
}
