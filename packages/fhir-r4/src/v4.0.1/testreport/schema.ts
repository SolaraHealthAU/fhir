import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("TestReport", () => {
    const baseSchema: z.ZodType<types.TestReport> = z.strictObject({
      resourceType: z.literal("TestReport"),
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
      identifier: createIdentifierSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      status: z.enum([
        "completed",
        "in-progress",
        "waiting",
        "stopped",
        "entered-in-error",
      ]),
      _status: createElementSchema().optional(),
      testScript: createReferenceSchema(),
      result: z.enum(["pass", "fail", "pending"]),
      _result: createElementSchema().optional(),
      score: primitives.getDecimalSchema().optional(),
      _score: createElementSchema().optional(),
      tester: primitives.getStringSchema().optional(),
      _tester: createElementSchema().optional(),
      issued: primitives.getDateTimeSchema().optional(),
      _issued: createElementSchema().optional(),
      participant: z.array(createTestReportParticipantSchema()).optional(),
      setup: createTestReportSetupSchema().optional(),
      test: z.array(createTestReportTestSchema()).optional(),
      teardown: createTestReportTeardownSchema().optional(),
    });

    return baseSchema;
  });
}
