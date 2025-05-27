import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCitationEntrySchema } from "../citationentry/schema";
import { createCitationSummary1Schema } from "../citationsummary1/schema";

/* Generated from FHIR JSON Schema */

export function createCitationContributorshipSchema() {
  const baseSchema: z.ZodType<types.CitationContributorship> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    complete: primitives.createBooleanSchema().optional(),
    _complete: z.lazy(() => createElementSchema()).optional(),
    entry: z.array(z.lazy(() => createCitationEntrySchema())).optional(),
    summary: z.array(z.lazy(() => createCitationSummary1Schema())).optional(),
  });

  return baseSchema;
}
