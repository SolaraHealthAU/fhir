import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.MessageDefinition> = z.object({
    resourceType: z.literal("MessageDefinition"),
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
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    replaces: z.array(primitives.createCanonicalSchema()).optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema(),
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
    base: primitives.createCanonicalSchema().optional(),
    parent: z.array(primitives.createCanonicalSchema()).optional(),
    eventCoding: z.lazy(() => createCodingSchema()).optional(),
    eventUri: z.string().optional(),
    _eventUri: z.lazy(() => createElementSchema()).optional(),
    category: z.enum(["consequence", "currency", "notification"]).optional(),
    _category: z.lazy(() => createElementSchema()).optional(),
    focus: z
      .array(z.lazy(() => createMessageDefinitionFocusSchema()))
      .optional(),
    responseRequired: z
      .enum(["always", "on-error", "never", "on-success"])
      .optional(),
    _responseRequired: z.lazy(() => createElementSchema()).optional(),
    allowedResponse: z
      .array(z.lazy(() => createMessageDefinitionAllowedResponseSchema()))
      .optional(),
    graph: z.array(primitives.createCanonicalSchema()).optional(),
  });

  return baseSchema;
}
