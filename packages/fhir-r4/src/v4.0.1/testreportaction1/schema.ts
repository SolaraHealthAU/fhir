import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestReportOperationSchema } from "../testreportoperation/schema";
import { createTestReportAssertSchema } from "../testreportassert/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportAction1Schema() {
  return getCachedSchema("TestReportAction1", () => {
    const baseSchema: z.ZodType<types.TestReportAction1> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      operation: createTestReportOperationSchema().optional(),
      assert: createTestReportAssertSchema().optional(),
    });

    return baseSchema;
  });
}
