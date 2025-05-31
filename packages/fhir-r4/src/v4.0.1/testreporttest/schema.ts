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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      action: z.array(createTestReportAction1Schema()),
    });

    return baseSchema;
  });
}
