import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCareTeamParticipantSchema() {
  return getCachedSchema("CareTeamParticipant", () => {
    const baseSchema: z.ZodType<types.CareTeamParticipant> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      role: z.array(createCodeableConceptSchema()).optional(),
      member: createReferenceSchema().optional(),
      onBehalfOf: createReferenceSchema().optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
