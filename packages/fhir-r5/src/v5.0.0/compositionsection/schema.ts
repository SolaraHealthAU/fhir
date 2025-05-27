import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionSectionSchema() {
  const baseSchema: z.ZodType<types.CompositionSection> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())).optional(),
    focus: z.lazy(() => createReferenceSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    orderedBy: z.lazy(() => createCodeableConceptSchema()).optional(),
    entry: z.array(z.lazy(() => createReferenceSchema())).optional(),
    emptyReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    section: z.array(z.lazy(() => createCompositionSectionSchema())).optional(),
  });

  return baseSchema;
}
