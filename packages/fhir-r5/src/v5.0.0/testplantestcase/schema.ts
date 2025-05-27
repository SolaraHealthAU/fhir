import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createTestPlanDependency1Schema } from "../testplandependency1/schema";
import { createTestPlanTestRunSchema } from "../testplantestrun/schema";
import { createTestPlanTestDataSchema } from "../testplantestdata/schema";
import { createTestPlanAssertionSchema } from "../testplanassertion/schema";

/* Generated from FHIR JSON Schema */

export function createTestPlanTestCaseSchema() {
  const baseSchema: z.ZodType<types.TestPlanTestCase> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createIntegerSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    scope: z.array(z.lazy(() => createReferenceSchema())).optional(),
    dependency: z
      .array(z.lazy(() => createTestPlanDependency1Schema()))
      .optional(),
    testRun: z.array(z.lazy(() => createTestPlanTestRunSchema())).optional(),
    testData: z.array(z.lazy(() => createTestPlanTestDataSchema())).optional(),
    assertion: z
      .array(z.lazy(() => createTestPlanAssertionSchema()))
      .optional(),
  });

  return baseSchema;
}
