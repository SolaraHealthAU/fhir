import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportAssertSchema() {
  const baseSchema: z.ZodType<types.TestReportAssert> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    result: z.enum(["pass", "skip", "fail", "warning", "error"]).optional(),
    _result: z.lazy(() => createElementSchema()).optional(),
    message: primitives.createMarkdownSchema().optional(),
    _message: z.lazy(() => createElementSchema()).optional(),
    detail: primitives.createStringSchema().optional(),
    _detail: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
