import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createTestReportParticipantSchema } from "../testreportparticipant/schema";
import { createTestReportSetupSchema } from "../testreportsetup/schema";
import { createTestReportTestSchema } from "../testreporttest/schema";
import { createTestReportTeardownSchema } from "../testreportteardown/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportSchema() {
  const baseSchema: z.ZodType<types.TestReport> = z.object({
    resourceType: z.literal("TestReport"),
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
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    status: z.enum([
      "completed",
      "in-progress",
      "waiting",
      "stopped",
      "entered-in-error",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    testScript: z.lazy(() => createReferenceSchema()),
    result: z.enum(["pass", "fail", "pending"]),
    _result: z.lazy(() => createElementSchema()).optional(),
    score: primitives.createDecimalSchema().optional(),
    _score: z.lazy(() => createElementSchema()).optional(),
    tester: primitives.createStringSchema().optional(),
    _tester: z.lazy(() => createElementSchema()).optional(),
    issued: primitives.createDateTimeSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    participant: z
      .array(z.lazy(() => createTestReportParticipantSchema()))
      .optional(),
    setup: z.lazy(() => createTestReportSetupSchema()).optional(),
    test: z.array(z.lazy(() => createTestReportTestSchema())).optional(),
    teardown: z.lazy(() => createTestReportTeardownSchema()).optional(),
  });

  return baseSchema;
}
