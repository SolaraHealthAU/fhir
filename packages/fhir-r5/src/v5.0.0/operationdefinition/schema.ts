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
import { createOperationDefinitionParameterSchema } from "../operationdefinitionparameter/schema";
import { createOperationDefinitionOverloadSchema } from "../operationdefinitionoverload/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionSchema() {
  const baseSchema: z.ZodType<types.OperationDefinition> = z.object({
    resourceType: z.literal("OperationDefinition"),
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
    kind: primitives.createCodeSchema().optional(),
    _kind: z.lazy(() => createElementSchema()).optional(),
    affectsState: primitives.createBooleanSchema().optional(),
    _affectsState: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createMarkdownSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    base: primitives.createCanonicalSchema().optional(),
    resource: z.array(primitives.createCodeSchema()).optional(),
    _resource: z.array(z.lazy(() => createElementSchema())).optional(),
    system: primitives.createBooleanSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createBooleanSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    instance: primitives.createBooleanSchema().optional(),
    _instance: z.lazy(() => createElementSchema()).optional(),
    inputProfile: primitives.createCanonicalSchema().optional(),
    outputProfile: primitives.createCanonicalSchema().optional(),
    parameter: z
      .array(z.lazy(() => createOperationDefinitionParameterSchema()))
      .optional(),
    overload: z
      .array(z.lazy(() => createOperationDefinitionOverloadSchema()))
      .optional(),
  });

  return baseSchema;
}
