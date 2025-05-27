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
import { createValueSetComposeSchema } from "../valuesetcompose/schema";
import { createValueSetExpansionSchema } from "../valuesetexpansion/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetSchema() {
  return getCachedSchema("ValueSet", () => {
    const baseSchema: z.ZodType<types.ValueSet> = z.strictObject({
      resourceType: z.literal("ValueSet"),
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
      url: primitives.getUriSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: z.lazy(() => createElementSchema()).optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      immutable: primitives.getBooleanSchema().optional(),
      _immutable: z.lazy(() => createElementSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: z.lazy(() => createElementSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: z.lazy(() => createElementSchema()).optional(),
      compose: createValueSetComposeSchema().optional(),
      expansion: createValueSetExpansionSchema().optional(),
    });

    return baseSchema;
  });
}
