import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestReportOperationSchema } from "../testreportoperation/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportAction2Schema() {
  return getCachedSchema("TestReportAction2", () => {
    const baseSchema: z.ZodType<types.TestReportAction2> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      operation: createTestReportOperationSchema(),
    });

    return baseSchema;
  });
}
