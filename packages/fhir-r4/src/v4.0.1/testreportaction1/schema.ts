import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestReportOperationSchema } from "../testreportoperation/schema";
import { createTestReportAssertSchema } from "../testreportassert/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportAction1Schema() {
  const baseSchema: z.ZodType<types.TestReportAction1> = z.object({
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
