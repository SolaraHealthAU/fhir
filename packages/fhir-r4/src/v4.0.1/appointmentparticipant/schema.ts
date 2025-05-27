import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
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
    actor: z.lazy(() => createReferenceSchema()).optional(),
    required: z.enum(["required", "optional", "information-only"]).optional(),
    _required: z.lazy(() => createElementSchema()).optional(),
    status: z.enum(["accepted", "declined", "tentative", "needs-action"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
