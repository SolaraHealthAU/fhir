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
  createCodingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMessageDefinitionFocusSchema } from "../messagedefinitionfocus/schema";
import { createMessageDefinitionAllowedResponseSchema } from "../messagedefinitionallowedresponse/schema";

/* Generated from FHIR JSON Schema */

export function createMessageDefinitionSchema() {
  return getCachedSchema("MessageDefinition", () => {
    const baseSchema: z.ZodType<types.MessageDefinition> = z.strictObject({
      resourceType: z.literal("MessageDefinition"),
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
      replaces: z.array(primitives.getCanonicalSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: z.lazy(() => createElementSchema()).optional(),
      date: primitives.getDateTimeSchema(),
      _date: z.lazy(() => createElementSchema()).optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: z.lazy(() => createElementSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: z.lazy(() => createElementSchema()).optional(),
      base: primitives.getCanonicalSchema().optional(),
      parent: z.array(primitives.getCanonicalSchema()).optional(),
      eventCoding: createCodingSchema().optional(),
      eventUri: z.string().optional(),
      _eventUri: z.lazy(() => createElementSchema()).optional(),
      category: z.enum(["consequence", "currency", "notification"]).optional(),
      _category: z.lazy(() => createElementSchema()).optional(),
      focus: z.array(createMessageDefinitionFocusSchema()).optional(),
      responseRequired: z
        .enum(["always", "on-error", "never", "on-success"])
        .optional(),
      _responseRequired: z.lazy(() => createElementSchema()).optional(),
      allowedResponse: z
        .array(createMessageDefinitionAllowedResponseSchema())
        .optional(),
      graph: z.array(primitives.getCanonicalSchema()).optional(),
    });

    return baseSchema;
  });
}
