import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCitationSummarySchema() {
  const baseSchema: z.ZodType<types.CitationSummary> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    style: z.lazy(() => createCodeableConceptSchema()).optional(),
    text: primitives.createMarkdownSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
