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
import { createOperationDefinitionParameterSchema } from "../operationdefinitionparameter/schema";
import { createOperationDefinitionOverloadSchema } from "../operationdefinitionoverload/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionSchema() {
  return getCachedSchema("OperationDefinition", () => {
    const baseSchema: z.ZodType<types.OperationDefinition> = z.strictObject({
      resourceType: z.literal("OperationDefinition"),
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
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      name: primitives.getStringSchema(),
      _name: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      kind: z.enum(["operation", "query"]),
      _kind: createElementSchema().optional(),
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
      affectsState: primitives.getBooleanSchema().optional(),
      _affectsState: createElementSchema().optional(),
      code: primitives.getCodeSchema(),
      _code: createElementSchema().optional(),
      comment: primitives.getMarkdownSchema().optional(),
      _comment: createElementSchema().optional(),
      base: primitives.getCanonicalSchema().optional(),
      resource: z.array(primitives.getCodeSchema()).optional(),
      _resource: z.array(createElementSchema()).optional(),
      system: primitives.getBooleanSchema(),
      _system: createElementSchema().optional(),
      type: primitives.getBooleanSchema(),
      _type: createElementSchema().optional(),
      instance: primitives.getBooleanSchema(),
      _instance: createElementSchema().optional(),
      inputProfile: primitives.getCanonicalSchema().optional(),
      outputProfile: primitives.getCanonicalSchema().optional(),
      parameter: z.array(createOperationDefinitionParameterSchema()).optional(),
      overload: z.array(createOperationDefinitionOverloadSchema()).optional(),
    });

    return baseSchema;
  });
}
