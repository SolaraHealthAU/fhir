import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentParticipantSchema() {
  return getCachedSchema("AppointmentParticipant", () => {
    const baseSchema: z.ZodType<types.AppointmentParticipant> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      actor: createReferenceSchema().optional(),
      required: z.enum(["required", "optional", "information-only"]).optional(),
      _required: createElementSchema().optional(),
      status: z.enum(["accepted", "declined", "tentative", "needs-action"]),
      _status: createElementSchema().optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
