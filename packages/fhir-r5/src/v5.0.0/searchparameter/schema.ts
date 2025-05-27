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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSearchParameterComponentSchema } from "../searchparametercomponent/schema";

/* Generated from FHIR JSON Schema */

export function createSearchParameterSchema() {
  const baseSchema: z.ZodType<types.SearchParameter> = z.object({
    resourceType: z.literal("SearchParameter"),
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
    derivedFrom: primitives.createCanonicalSchema().optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    base: z.array(primitives.createCodeSchema()).optional(),
    _base: z.array(z.lazy(() => createElementSchema())).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    processingMode: primitives.createCodeSchema().optional(),
    _processingMode: z.lazy(() => createElementSchema()).optional(),
    constraint: primitives.createStringSchema().optional(),
    _constraint: z.lazy(() => createElementSchema()).optional(),
    target: z.array(primitives.createCodeSchema()).optional(),
    _target: z.array(z.lazy(() => createElementSchema())).optional(),
    multipleOr: primitives.createBooleanSchema().optional(),
    _multipleOr: z.lazy(() => createElementSchema()).optional(),
    multipleAnd: primitives.createBooleanSchema().optional(),
    _multipleAnd: z.lazy(() => createElementSchema()).optional(),
    comparator: z.array(primitives.createCodeSchema()).optional(),
    _comparator: z.array(z.lazy(() => createElementSchema())).optional(),
    modifier: z.array(primitives.createCodeSchema()).optional(),
    _modifier: z.array(z.lazy(() => createElementSchema())).optional(),
    chain: z.array(primitives.createStringSchema()).optional(),
    _chain: z.array(z.lazy(() => createElementSchema())).optional(),
    component: z
      .array(z.lazy(() => createSearchParameterComponentSchema()))
      .optional(),
  });

  return baseSchema;
}
