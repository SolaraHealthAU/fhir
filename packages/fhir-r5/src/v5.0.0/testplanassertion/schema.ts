import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestPlanAssertionSchema() {
  const baseSchema: z.ZodType<types.TestPlanAssertion> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    object: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    result: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
  });

  return baseSchema;
}
