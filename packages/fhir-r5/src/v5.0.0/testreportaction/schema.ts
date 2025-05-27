import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestReportOperationSchema } from "../testreportoperation/schema";
import { createTestReportAssertSchema } from "../testreportassert/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportActionSchema() {
  const baseSchema: z.ZodType<types.TestReportAction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    operation: z.lazy(() => createTestReportOperationSchema()).optional(),
    assert: z.lazy(() => createTestReportAssertSchema()).optional(),
  });

  return baseSchema;
}
