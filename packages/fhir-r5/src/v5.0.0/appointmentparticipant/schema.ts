import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentParticipantSchema() {
  const baseSchema: z.ZodType<types.AppointmentParticipant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    actor: z.lazy(() => createReferenceSchema()).optional(),
    required: primitives.createBooleanSchema().optional(),
    _required: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
