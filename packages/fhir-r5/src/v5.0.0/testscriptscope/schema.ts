import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptScopeSchema() {
  const baseSchema: z.ZodType<types.TestScriptScope> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    artifact: primitives.createCanonicalSchema(),
    conformance: z.lazy(() => createCodeableConceptSchema()).optional(),
    phase: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
