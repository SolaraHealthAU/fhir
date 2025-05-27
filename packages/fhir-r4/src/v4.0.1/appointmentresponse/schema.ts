import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentResponseSchema() {
  const baseSchema: z.ZodType<types.AppointmentResponse> = z.object({
    resourceType: z.literal("AppointmentResponse"),
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
    appointment: z.lazy(() => createReferenceSchema()),
    start: primitives.createInstantSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createInstantSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    participantType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    actor: z.lazy(() => createReferenceSchema()).optional(),
    participantStatus: primitives.createCodeSchema(),
    _participantStatus: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
