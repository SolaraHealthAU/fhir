import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestReportActionSchema } from "../testreportaction/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportSetupSchema() {
  return getCachedSchema("TestReportSetup", () => {
    const baseSchema: z.ZodType<types.TestReportSetup> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      action: z.array(createTestReportActionSchema()),
    });

    return baseSchema;
  });
}
