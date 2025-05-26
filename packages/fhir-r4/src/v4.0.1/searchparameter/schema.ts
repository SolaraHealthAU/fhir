import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
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
    url: primitives.createUriSchema(),
    _url: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    derivedFrom: primitives.createCanonicalSchema().optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    base: z.array(primitives.createCodeSchema()),
    _base: z.array(z.lazy(() => createElementSchema())).optional(),
    type: z.enum([
      "number",
      "date",
      "string",
      "token",
      "reference",
      "composite",
      "quantity",
      "uri",
      "special",
    ]),
    _type: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    xpath: primitives.createStringSchema().optional(),
    _xpath: z.lazy(() => createElementSchema()).optional(),
    xpathUsage: z
      .enum(["normal", "phonetic", "nearby", "distance", "other"])
      .optional(),
    _xpathUsage: z.lazy(() => createElementSchema()).optional(),
    target: z.array(primitives.createCodeSchema()).optional(),
    _target: z.array(z.lazy(() => createElementSchema())).optional(),
    multipleOr: primitives.createBooleanSchema().optional(),
    _multipleOr: z.lazy(() => createElementSchema()).optional(),
    multipleAnd: primitives.createBooleanSchema().optional(),
    _multipleAnd: z.lazy(() => createElementSchema()).optional(),
    comparator: z.array(z.any()).optional(),
    _comparator: z.array(z.lazy(() => createElementSchema())).optional(),
    modifier: z.array(z.any()).optional(),
    _modifier: z.array(z.lazy(() => createElementSchema())).optional(),
    chain: z.array(primitives.createStringSchema()).optional(),
    _chain: z.array(z.lazy(() => createElementSchema())).optional(),
    component: z
      .array(z.lazy(() => createSearchParameterComponentSchema()))
      .optional(),
  });

  return baseSchema;
}
