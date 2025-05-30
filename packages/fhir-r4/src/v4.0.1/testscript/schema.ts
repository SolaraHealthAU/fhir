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
  return getCachedSchema("TestScript", () => {
    const baseSchema: z.ZodType<types.TestScript> = z.strictObject({
      resourceType: z.literal("TestScript"),
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
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema(),
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
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: z.lazy(() => createElementSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: z.lazy(() => createElementSchema()).optional(),
      origin: z.array(createTestScriptOriginSchema()).optional(),
      destination: z.array(createTestScriptDestinationSchema()).optional(),
      metadata: createTestScriptMetadataSchema().optional(),
      fixture: z.array(createTestScriptFixtureSchema()).optional(),
      profile: z.array(createReferenceSchema()).optional(),
      variable: z.array(createTestScriptVariableSchema()).optional(),
      setup: createTestScriptSetupSchema().optional(),
      test: z.array(createTestScriptTestSchema()).optional(),
      teardown: createTestScriptTeardownSchema().optional(),
    });

    return baseSchema;
  });
}
