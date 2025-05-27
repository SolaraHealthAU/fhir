import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTestReportAction1Schema } from "../testreportaction1/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportTestSchema() {
  return getCachedSchema("TestReportTest", () => {
    const baseSchema: z.ZodType<types.TestReportTest> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      action: z.array(createTestReportAction1Schema()),
    });

    return baseSchema;
  });
}
