import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestReportActionSchema } from "../testreportaction/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportSetupSchema() {
  const baseSchema: z.ZodType<types.TestReportSetup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    action: z.array(z.lazy(() => createTestReportActionSchema())),
  });

  return baseSchema;
}
