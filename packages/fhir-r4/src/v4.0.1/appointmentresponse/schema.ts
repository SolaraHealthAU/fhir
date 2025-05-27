import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("AppointmentResponse", () => {
    const baseSchema: z.ZodType<types.AppointmentResponse> = z.strictObject({
      resourceType: z.literal("AppointmentResponse"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      appointment: createReferenceSchema(),
      start: primitives.getInstantSchema().optional(),
      _start: z.lazy(() => createElementSchema()).optional(),
      end: primitives.getInstantSchema().optional(),
      _end: z.lazy(() => createElementSchema()).optional(),
      participantType: z.array(createCodeableConceptSchema()).optional(),
      actor: createReferenceSchema().optional(),
      participantStatus: primitives.getCodeSchema(),
      _participantStatus: z.lazy(() => createElementSchema()).optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
