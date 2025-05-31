import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportAssertSchema() {
  return getCachedSchema("TestReportAssert", () => {
    const baseSchema: z.ZodType<types.TestReportAssert> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      result: z.enum(["pass", "skip", "fail", "warning", "error"]).optional(),
      _result: createElementSchema().optional(),
      message: primitives.getMarkdownSchema().optional(),
      _message: createElementSchema().optional(),
      detail: primitives.getStringSchema().optional(),
      _detail: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
