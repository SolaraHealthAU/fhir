import { z } from "zod";
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
    type: z.enum(["display", "print", "printoper"]).optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createStringSchema(),
    _text: z.lazy(() => createElementSchema()).optional(),
    language: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
