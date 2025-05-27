import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createCitationPublishedInSchema } from "../citationpublishedin/schema";

/* Generated from FHIR JSON Schema */

export function createCitationPublicationFormSchema() {
  const baseSchema: z.ZodType<types.CitationPublicationForm> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    publishedIn: z.lazy(() => createCitationPublishedInSchema()).optional(),
    citedMedium: z.lazy(() => createCodeableConceptSchema()).optional(),
    volume: primitives.createStringSchema().optional(),
    _volume: z.lazy(() => createElementSchema()).optional(),
    issue: primitives.createStringSchema().optional(),
    _issue: z.lazy(() => createElementSchema()).optional(),
    articleDate: primitives.createDateTimeSchema().optional(),
    _articleDate: z.lazy(() => createElementSchema()).optional(),
    publicationDateText: primitives.createStringSchema().optional(),
    _publicationDateText: z.lazy(() => createElementSchema()).optional(),
    publicationDateSeason: primitives.createStringSchema().optional(),
    _publicationDateSeason: z.lazy(() => createElementSchema()).optional(),
    lastRevisionDate: primitives.createDateTimeSchema().optional(),
    _lastRevisionDate: z.lazy(() => createElementSchema()).optional(),
    language: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    accessionNumber: primitives.createStringSchema().optional(),
    _accessionNumber: z.lazy(() => createElementSchema()).optional(),
    pageString: primitives.createStringSchema().optional(),
    _pageString: z.lazy(() => createElementSchema()).optional(),
    firstPage: primitives.createStringSchema().optional(),
    _firstPage: z.lazy(() => createElementSchema()).optional(),
    lastPage: primitives.createStringSchema().optional(),
    _lastPage: z.lazy(() => createElementSchema()).optional(),
    pageCount: primitives.createStringSchema().optional(),
    _pageCount: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
