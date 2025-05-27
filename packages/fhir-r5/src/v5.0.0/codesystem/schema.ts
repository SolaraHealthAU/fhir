import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCodeSystemFilterSchema } from "../codesystemfilter/schema";
import { createCodeSystemPropertySchema } from "../codesystemproperty/schema";
import { createCodeSystemConceptSchema } from "../codesystemconcept/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemSchema() {
  const baseSchema: z.ZodType<types.CodeSystem> = z.object({
    resourceType: z.literal("CodeSystem"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmString: z.string().optional(),
    _versionAlgorithmString: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmCoding: z.lazy(() => createCodingSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    copyrightLabel: primitives.createStringSchema().optional(),
    _copyrightLabel: z.lazy(() => createElementSchema()).optional(),
    approvalDate: primitives.createDateSchema().optional(),
    _approvalDate: z.lazy(() => createElementSchema()).optional(),
    lastReviewDate: primitives.createDateSchema().optional(),
    _lastReviewDate: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    topic: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    author: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    editor: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    reviewer: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    endorser: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    caseSensitive: primitives.createBooleanSchema().optional(),
    _caseSensitive: z.lazy(() => createElementSchema()).optional(),
    valueSet: primitives.createCanonicalSchema().optional(),
    hierarchyMeaning: primitives.createCodeSchema().optional(),
    _hierarchyMeaning: z.lazy(() => createElementSchema()).optional(),
    compositional: primitives.createBooleanSchema().optional(),
    _compositional: z.lazy(() => createElementSchema()).optional(),
    versionNeeded: primitives.createBooleanSchema().optional(),
    _versionNeeded: z.lazy(() => createElementSchema()).optional(),
    content: primitives.createCodeSchema().optional(),
    _content: z.lazy(() => createElementSchema()).optional(),
    supplements: primitives.createCanonicalSchema().optional(),
    count: primitives.createUnsignedIntSchema().optional(),
    _count: z.lazy(() => createElementSchema()).optional(),
    filter: z.array(z.lazy(() => createCodeSystemFilterSchema())).optional(),
    property: z
      .array(z.lazy(() => createCodeSystemPropertySchema()))
      .optional(),
    concept: z.array(z.lazy(() => createCodeSystemConceptSchema())).optional(),
  });

  return baseSchema;
}
