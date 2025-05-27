import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCitationRelatesToSchema() {
  const baseSchema: z.ZodType<types.CitationRelatesTo> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    classifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    label: primitives.createStringSchema().optional(),
    _label: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    citation: primitives.createMarkdownSchema().optional(),
    _citation: z.lazy(() => createElementSchema()).optional(),
    document: z.lazy(() => createAttachmentSchema()).optional(),
    resource: primitives.createCanonicalSchema().optional(),
    _resource: z.lazy(() => createElementSchema()).optional(),
    resourceReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
