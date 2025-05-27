import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.Appointment> = z.object({
    resourceType: z.literal("Appointment"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
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
    _status: z.lazy(() => createElementSchema()).optional(),
    cancelationReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    serviceCategory: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    serviceType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    specialty: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    appointmentType: z.lazy(() => createCodeableConceptSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    priority: primitives.createUnsignedIntSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    start: primitives.createInstantSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createInstantSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    minutesDuration: primitives.createPositiveIntSchema().optional(),
    _minutesDuration: z.lazy(() => createElementSchema()).optional(),
    slot: z.array(z.lazy(() => createReferenceSchema())).optional(),
    created: primitives.createDateTimeSchema().optional(),
    _created: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    patientInstruction: primitives.createStringSchema().optional(),
    _patientInstruction: z.lazy(() => createElementSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    participant: z.array(z.lazy(() => createAppointmentParticipantSchema())),
    requestedPeriod: z.array(z.lazy(() => createPeriodSchema())).optional(),
  });

  return baseSchema;
}
