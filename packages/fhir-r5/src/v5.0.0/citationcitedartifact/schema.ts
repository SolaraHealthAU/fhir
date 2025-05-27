import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createCitationVersionSchema } from "../citationversion/schema";
import { createCitationStatusDate1Schema } from "../citationstatusdate1/schema";
import { createCitationTitleSchema } from "../citationtitle/schema";
import { createCitationAbstractSchema } from "../citationabstract/schema";
import { createCitationPartSchema } from "../citationpart/schema";
import { createCitationRelatesToSchema } from "../citationrelatesto/schema";
import { createCitationPublicationFormSchema } from "../citationpublicationform/schema";
import { createCitationWebLocationSchema } from "../citationweblocation/schema";
import { createCitationClassification1Schema } from "../citationclassification1/schema";
import { createCitationContributorshipSchema } from "../citationcontributorship/schema";

/* Generated from FHIR JSON Schema */

export function createCitationCitedArtifactSchema() {
  const baseSchema: z.ZodType<types.CitationCitedArtifact> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    relatedIdentifier: z
      .array(z.lazy(() => createIdentifierSchema()))
      .optional(),
    dateAccessed: primitives.createDateTimeSchema().optional(),
    _dateAccessed: z.lazy(() => createElementSchema()).optional(),
    version: z.lazy(() => createCitationVersionSchema()).optional(),
    currentState: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    statusDate: z
      .array(z.lazy(() => createCitationStatusDate1Schema()))
      .optional(),
    title: z.array(z.lazy(() => createCitationTitleSchema())).optional(),
    abstract: z.array(z.lazy(() => createCitationAbstractSchema())).optional(),
    part: z.lazy(() => createCitationPartSchema()).optional(),
    relatesTo: z
      .array(z.lazy(() => createCitationRelatesToSchema()))
      .optional(),
    publicationForm: z
      .array(z.lazy(() => createCitationPublicationFormSchema()))
      .optional(),
    webLocation: z
      .array(z.lazy(() => createCitationWebLocationSchema()))
      .optional(),
    classification: z
      .array(z.lazy(() => createCitationClassification1Schema()))
      .optional(),
    contributorship: z
      .lazy(() => createCitationContributorshipSchema())
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
