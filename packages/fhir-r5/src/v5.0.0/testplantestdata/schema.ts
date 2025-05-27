import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestPlanTestDataSchema() {
  const baseSchema: z.ZodType<types.TestPlanTestData> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodingSchema()),
    content: z.lazy(() => createReferenceSchema()).optional(),
    sourceString: z.string().optional(),
    _sourceString: z.lazy(() => createElementSchema()).optional(),
    sourceReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
