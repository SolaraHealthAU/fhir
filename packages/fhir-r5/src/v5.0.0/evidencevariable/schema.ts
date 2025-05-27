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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEvidenceVariableCharacteristicSchema } from "../evidencevariablecharacteristic/schema";
import { createEvidenceVariableCategorySchema } from "../evidencevariablecategory/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceVariableSchema() {
  const baseSchema: z.ZodType<types.EvidenceVariable> = z.object({
    resourceType: z.literal("EvidenceVariable"),
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
    shortTitle: primitives.createStringSchema().optional(),
    _shortTitle: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    actual: primitives.createBooleanSchema().optional(),
    _actual: z.lazy(() => createElementSchema()).optional(),
    characteristic: z
      .array(z.lazy(() => createEvidenceVariableCharacteristicSchema()))
      .optional(),
    handling: primitives.createCodeSchema().optional(),
    _handling: z.lazy(() => createElementSchema()).optional(),
    category: z
      .array(z.lazy(() => createEvidenceVariableCategorySchema()))
      .optional(),
  });

  return baseSchema;
}
