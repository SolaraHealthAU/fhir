import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAppointmentParticipantSchema } from "../appointmentparticipant/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentSchema() {
  return getCachedSchema("Appointment", () => {
    const baseSchema: z.ZodType<types.Appointment> = z.strictObject({
      resourceType: z.literal("Appointment"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: z.enum([
        "proposed",
        "pending",
        "booked",
        "arrived",
        "fulfilled",
        "cancelled",
        "noshow",
        "entered-in-error",
        "checked-in",
        "waitlist",
      ]),
      _status: createElementSchema().optional(),
      cancelationReason: createCodeableConceptSchema().optional(),
      serviceCategory: z.array(createCodeableConceptSchema()).optional(),
      serviceType: z.array(createCodeableConceptSchema()).optional(),
      specialty: z.array(createCodeableConceptSchema()).optional(),
      appointmentType: createCodeableConceptSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      priority: primitives.getUnsignedIntSchema().optional(),
      _priority: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      supportingInformation: z.array(createReferenceSchema()).optional(),
      start: primitives.getInstantSchema().optional(),
      _start: createElementSchema().optional(),
      end: primitives.getInstantSchema().optional(),
      _end: createElementSchema().optional(),
      minutesDuration: primitives.getPositiveIntSchema().optional(),
      _minutesDuration: createElementSchema().optional(),
      slot: z.array(createReferenceSchema()).optional(),
      created: primitives.getDateTimeSchema().optional(),
      _created: createElementSchema().optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: createElementSchema().optional(),
      patientInstruction: primitives.getStringSchema().optional(),
      _patientInstruction: createElementSchema().optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      participant: z.array(createAppointmentParticipantSchema()),
      requestedPeriod: z.array(createPeriodSchema()).optional(),
    });

    return baseSchema;
  });
}
