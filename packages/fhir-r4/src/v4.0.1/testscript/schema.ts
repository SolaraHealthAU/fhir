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
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createTestScriptOriginSchema } from "../testscriptorigin/schema";
import { createTestScriptDestinationSchema } from "../testscriptdestination/schema";
import { createTestScriptMetadataSchema } from "../testscriptmetadata/schema";
import { createTestScriptFixtureSchema } from "../testscriptfixture/schema";
import { createTestScriptVariableSchema } from "../testscriptvariable/schema";
import { createTestScriptSetupSchema } from "../testscriptsetup/schema";
import { createTestScriptTestSchema } from "../testscripttest/schema";
import { createTestScriptTeardownSchema } from "../testscriptteardown/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptSchema() {
  const baseSchema: z.ZodType<types.TestScript> = z.object({
    resourceType: z.literal("TestScript"),
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
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
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
    origin: z.array(z.lazy(() => createTestScriptOriginSchema())).optional(),
    destination: z
      .array(z.lazy(() => createTestScriptDestinationSchema()))
      .optional(),
    metadata: z.lazy(() => createTestScriptMetadataSchema()).optional(),
    fixture: z.array(z.lazy(() => createTestScriptFixtureSchema())).optional(),
    profile: z.array(z.lazy(() => createReferenceSchema())).optional(),
    variable: z
      .array(z.lazy(() => createTestScriptVariableSchema()))
      .optional(),
    setup: z.lazy(() => createTestScriptSetupSchema()).optional(),
    test: z.array(z.lazy(() => createTestScriptTestSchema())).optional(),
    teardown: z.lazy(() => createTestScriptTeardownSchema()).optional(),
  });

  return baseSchema;
}
