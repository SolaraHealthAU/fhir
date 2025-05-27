import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createReferenceSchema,
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createVirtualServiceDetailSchema } from "../virtualservicedetail/schema";
import { createAppointmentParticipantSchema } from "../appointmentparticipant/schema";
import { createAppointmentRecurrenceTemplateSchema } from "../appointmentrecurrencetemplate/schema";

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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    cancellationReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    class: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    serviceCategory: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    serviceType: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    specialty: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    appointmentType: z.lazy(() => createCodeableConceptSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    replaces: z.array(z.lazy(() => createReferenceSchema())).optional(),
    virtualService: z
      .array(z.lazy(() => createVirtualServiceDetailSchema()))
      .optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    previousAppointment: z.lazy(() => createReferenceSchema()).optional(),
    originatingAppointment: z.lazy(() => createReferenceSchema()).optional(),
    start: primitives.createInstantSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createInstantSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    minutesDuration: primitives.createPositiveIntSchema().optional(),
    _minutesDuration: z.lazy(() => createElementSchema()).optional(),
    requestedPeriod: z.array(z.lazy(() => createPeriodSchema())).optional(),
    slot: z.array(z.lazy(() => createReferenceSchema())).optional(),
    account: z.array(z.lazy(() => createReferenceSchema())).optional(),
    created: primitives.createDateTimeSchema().optional(),
    _created: z.lazy(() => createElementSchema()).optional(),
    cancellationDate: primitives.createDateTimeSchema().optional(),
    _cancellationDate: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    patientInstruction: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    participant: z.array(z.lazy(() => createAppointmentParticipantSchema())),
    recurrenceId: primitives.createPositiveIntSchema().optional(),
    _recurrenceId: z.lazy(() => createElementSchema()).optional(),
    occurrenceChanged: primitives.createBooleanSchema().optional(),
    _occurrenceChanged: z.lazy(() => createElementSchema()).optional(),
    recurrenceTemplate: z
      .array(z.lazy(() => createAppointmentRecurrenceTemplateSchema()))
      .optional(),
  });

  return baseSchema;
}
