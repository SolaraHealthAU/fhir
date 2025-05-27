import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionSectionSchema() {
  return getCachedSchema("CompositionSection", () => {
    const baseSchema: z.ZodType<types.CompositionSection> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      author: z.array(createReferenceSchema()).optional(),
      focus: createReferenceSchema().optional(),
      text: createNarrativeSchema().optional(),
      mode: primitives.getCodeSchema().optional(),
      _mode: z.lazy(() => createElementSchema()).optional(),
      orderedBy: createCodeableConceptSchema().optional(),
      entry: z.array(createReferenceSchema()).optional(),
      emptyReason: createCodeableConceptSchema().optional(),
      section: z.array(createCompositionSectionSchema()).optional(),
    });

    return baseSchema;
  });
}
