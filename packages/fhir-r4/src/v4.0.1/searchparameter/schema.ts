import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SearchParameter", () => {
    const baseSchema: z.ZodType<types.SearchParameter> = z.strictObject({
      resourceType: z.literal("SearchParameter"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      url: primitives.getUriSchema(),
      _url: z.lazy(() => createElementSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      derivedFrom: primitives.getCanonicalSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: z.lazy(() => createElementSchema()).optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema(),
      _description: z.lazy(() => createElementSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema(),
      _code: z.lazy(() => createElementSchema()).optional(),
      base: z.array(primitives.getCodeSchema()),
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
      expression: primitives.getStringSchema().optional(),
      _expression: z.lazy(() => createElementSchema()).optional(),
      xpath: primitives.getStringSchema().optional(),
      _xpath: z.lazy(() => createElementSchema()).optional(),
      xpathUsage: z
        .enum(["normal", "phonetic", "nearby", "distance", "other"])
        .optional(),
      _xpathUsage: z.lazy(() => createElementSchema()).optional(),
      target: z.array(primitives.getCodeSchema()).optional(),
      _target: z.array(z.lazy(() => createElementSchema())).optional(),
      multipleOr: primitives.getBooleanSchema().optional(),
      _multipleOr: z.lazy(() => createElementSchema()).optional(),
      multipleAnd: primitives.getBooleanSchema().optional(),
      _multipleAnd: z.lazy(() => createElementSchema()).optional(),
      comparator: z.array(z.any()).optional(),
      _comparator: z.array(z.lazy(() => createElementSchema())).optional(),
      modifier: z.array(z.any()).optional(),
      _modifier: z.array(z.lazy(() => createElementSchema())).optional(),
      chain: z.array(primitives.getStringSchema()).optional(),
      _chain: z.array(z.lazy(() => createElementSchema())).optional(),
      component: z.array(createSearchParameterComponentSchema()).optional(),
    });

    return baseSchema;
  });
}
