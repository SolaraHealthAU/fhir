import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createCitationContributionInstanceSchema } from "../citationcontributioninstance/schema";

/* Generated from FHIR JSON Schema */

export function createCitationEntrySchema() {
  const baseSchema: z.ZodType<types.CitationEntry> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    contributor: z.lazy(() => createReferenceSchema()),
    forenameInitials: primitives.createStringSchema().optional(),
    _forenameInitials: z.lazy(() => createElementSchema()).optional(),
    affiliation: z.array(z.lazy(() => createReferenceSchema())).optional(),
    contributionType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    contributionInstance: z
      .array(z.lazy(() => createCitationContributionInstanceSchema()))
      .optional(),
    correspondingContact: primitives.createBooleanSchema().optional(),
    _correspondingContact: z.lazy(() => createElementSchema()).optional(),
    rankingOrder: primitives.createPositiveIntSchema().optional(),
    _rankingOrder: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
