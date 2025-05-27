import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportOperationSchema() {
  const baseSchema: z.ZodType<types.TestReportOperation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    result: primitives.createCodeSchema().optional(),
    _result: z.lazy(() => createElementSchema()).optional(),
    message: primitives.createMarkdownSchema().optional(),
    _message: z.lazy(() => createElementSchema()).optional(),
    detail: primitives.createUriSchema().optional(),
    _detail: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
