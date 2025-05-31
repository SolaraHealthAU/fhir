import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCodeSystemFilterSchema } from "../codesystemfilter/schema";
import { createCodeSystemPropertySchema } from "../codesystemproperty/schema";
import { createCodeSystemConceptSchema } from "../codesystemconcept/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemSchema() {
  return getCachedSchema("CodeSystem", () => {
    const baseSchema: z.ZodType<types.CodeSystem> = z.strictObject({
      resourceType: z.literal("CodeSystem"),
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
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: createElementSchema().optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: createElementSchema().optional(),
      caseSensitive: primitives.getBooleanSchema().optional(),
      _caseSensitive: createElementSchema().optional(),
      valueSet: primitives.getCanonicalSchema().optional(),
      hierarchyMeaning: z
        .enum(["grouped-by", "is-a", "part-of", "classified-with"])
        .optional(),
      _hierarchyMeaning: createElementSchema().optional(),
      compositional: primitives.getBooleanSchema().optional(),
      _compositional: createElementSchema().optional(),
      versionNeeded: primitives.getBooleanSchema().optional(),
      _versionNeeded: createElementSchema().optional(),
      content: z.enum([
        "not-present",
        "example",
        "fragment",
        "complete",
        "supplement",
      ]),
      _content: createElementSchema().optional(),
      supplements: primitives.getCanonicalSchema().optional(),
      count: primitives.getUnsignedIntSchema().optional(),
      _count: createElementSchema().optional(),
      filter: z.array(createCodeSystemFilterSchema()).optional(),
      property: z.array(createCodeSystemPropertySchema()).optional(),
      concept: z.array(createCodeSystemConceptSchema()).optional(),
    });

    return baseSchema;
  });
}
