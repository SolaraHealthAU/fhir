import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCareTeamParticipantSchema() {
  const baseSchema: z.ZodType<types.CareTeamParticipant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    role: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    member: z.lazy(() => createReferenceSchema()).optional(),
    onBehalfOf: z.lazy(() => createReferenceSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
