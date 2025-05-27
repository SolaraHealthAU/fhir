import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestReportOperationSchema } from "../testreportoperation/schema";
import { createTestReportAssertSchema } from "../testreportassert/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportActionSchema() {
  return getCachedSchema("TestReportAction", () => {
    const baseSchema: z.ZodType<types.TestReportAction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      operation: createTestReportOperationSchema().optional(),
      assert: createTestReportAssertSchema().optional(),
    });

    return baseSchema;
  });
}
