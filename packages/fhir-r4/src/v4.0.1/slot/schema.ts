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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createSlotSchema() {
  const baseSchema: z.ZodType<types.Slot> = z.object({
    resourceType: z.literal("Slot"),
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
    serviceCategory: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    serviceType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    specialty: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    appointmentType: z.lazy(() => createCodeableConceptSchema()).optional(),
    schedule: z.lazy(() => createReferenceSchema()),
    status: z.enum([
      "busy",
      "free",
      "busy-unavailable",
      "busy-tentative",
      "entered-in-error",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    start: primitives.createInstantSchema(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createInstantSchema(),
    _end: z.lazy(() => createElementSchema()).optional(),
    overbooked: primitives.createBooleanSchema().optional(),
    _overbooked: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
