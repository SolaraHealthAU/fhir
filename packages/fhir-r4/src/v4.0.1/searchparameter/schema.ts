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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      url: primitives.getUriSchema(),
      _url: createElementSchema().optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      name: primitives.getStringSchema(),
      _name: createElementSchema().optional(),
      derivedFrom: primitives.getCanonicalSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema(),
      _description: createElementSchema().optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: createElementSchema().optional(),
      code: primitives.getCodeSchema(),
      _code: createElementSchema().optional(),
      base: z.array(primitives.getCodeSchema()),
      _base: z.array(createElementSchema()).optional(),
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
      _type: createElementSchema().optional(),
      expression: primitives.getStringSchema().optional(),
      _expression: createElementSchema().optional(),
      xpath: primitives.getStringSchema().optional(),
      _xpath: createElementSchema().optional(),
      xpathUsage: z
        .enum(["normal", "phonetic", "nearby", "distance", "other"])
        .optional(),
      _xpathUsage: createElementSchema().optional(),
      target: z.array(primitives.getCodeSchema()).optional(),
      _target: z.array(createElementSchema()).optional(),
      multipleOr: primitives.getBooleanSchema().optional(),
      _multipleOr: createElementSchema().optional(),
      multipleAnd: primitives.getBooleanSchema().optional(),
      _multipleAnd: createElementSchema().optional(),
      comparator: z.array(z.any()).optional(),
      _comparator: z.array(createElementSchema()).optional(),
      modifier: z.array(z.any()).optional(),
      _modifier: z.array(createElementSchema()).optional(),
      chain: z.array(primitives.getStringSchema()).optional(),
      _chain: z.array(createElementSchema()).optional(),
      component: z.array(createSearchParameterComponentSchema()).optional(),
    });

    return baseSchema;
  });
}
