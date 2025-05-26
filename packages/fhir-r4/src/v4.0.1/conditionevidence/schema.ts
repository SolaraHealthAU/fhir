import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConditionEvidenceSchema() {
  const baseSchema: z.ZodType<types.ConditionEvidence> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    detail: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
