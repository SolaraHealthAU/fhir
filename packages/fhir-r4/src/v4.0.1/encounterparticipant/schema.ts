import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterParticipantSchema() {
  return getCachedSchema("EncounterParticipant", () => {
    const baseSchema: z.ZodType<types.EncounterParticipant> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      period: createPeriodSchema().optional(),
      individual: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
