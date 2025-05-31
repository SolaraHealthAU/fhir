import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestReportAction2Schema } from "../testreportaction2/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportTeardownSchema() {
  return getCachedSchema("TestReportTeardown", () => {
    const baseSchema: z.ZodType<types.TestReportTeardown> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      action: z.array(createTestReportAction2Schema()),
    });

    return baseSchema;
  });
}
