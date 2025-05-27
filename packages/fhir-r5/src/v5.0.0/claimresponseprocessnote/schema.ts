import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseProcessNoteSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseProcessNote> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    number: primitives.createPositiveIntSchema().optional(),
    _number: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    language: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
