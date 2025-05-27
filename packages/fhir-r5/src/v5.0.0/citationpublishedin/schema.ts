import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCitationPublishedInSchema() {
  const baseSchema: z.ZodType<types.CitationPublishedIn> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    publisher: z.lazy(() => createReferenceSchema()).optional(),
    publisherLocation: primitives.createStringSchema().optional(),
    _publisherLocation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
