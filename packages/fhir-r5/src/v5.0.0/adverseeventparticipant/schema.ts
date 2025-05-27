import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventParticipantSchema() {
  const baseSchema: z.ZodType<types.AdverseEventParticipant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    function: z.lazy(() => createCodeableConceptSchema()).optional(),
    actor: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
