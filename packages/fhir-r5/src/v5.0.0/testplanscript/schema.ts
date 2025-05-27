import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestPlanScriptSchema() {
  const baseSchema: z.ZodType<types.TestPlanScript> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    language: z.lazy(() => createCodeableConceptSchema()).optional(),
    sourceString: z.string().optional(),
    _sourceString: z.lazy(() => createElementSchema()).optional(),
    sourceReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
