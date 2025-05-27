import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createTimingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCareTeamParticipantSchema() {
  const baseSchema: z.ZodType<types.CareTeamParticipant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    member: z.lazy(() => createReferenceSchema()).optional(),
    onBehalfOf: z.lazy(() => createReferenceSchema()).optional(),
    coveragePeriod: z.lazy(() => createPeriodSchema()).optional(),
    coverageTiming: z.lazy(() => createTimingSchema()).optional(),
  });

  return baseSchema;
}
