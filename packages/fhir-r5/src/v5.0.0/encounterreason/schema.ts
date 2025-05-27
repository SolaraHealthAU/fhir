import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterReasonSchema() {
  const baseSchema: z.ZodType<types.EncounterReason> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    use: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    value: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
  });

  return baseSchema;
}
