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
      replaces: z.array(primitives.getCanonicalSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      date: primitives.getDateTimeSchema(),
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
      base: primitives.getCanonicalSchema().optional(),
      parent: z.array(primitives.getCanonicalSchema()).optional(),
      eventCoding: createCodingSchema().optional(),
      eventUri: z.string().optional(),
      _eventUri: createElementSchema().optional(),
      category: z.enum(["consequence", "currency", "notification"]).optional(),
      _category: createElementSchema().optional(),
      focus: z.array(createMessageDefinitionFocusSchema()).optional(),
      responseRequired: z
        .enum(["always", "on-error", "never", "on-success"])
        .optional(),
      _responseRequired: createElementSchema().optional(),
      allowedResponse: z
        .array(createMessageDefinitionAllowedResponseSchema())
        .optional(),
      graph: z.array(primitives.getCanonicalSchema()).optional(),
    });

    return baseSchema;
  });
}
