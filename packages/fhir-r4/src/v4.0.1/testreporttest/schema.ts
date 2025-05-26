import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTestReportAction1Schema } from "../testreportaction1/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportTestSchema() {
  const baseSchema: z.ZodType<types.TestReportTest> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    action: z.array(z.lazy(() => createTestReportAction1Schema())),
  });

  return baseSchema;
}
