import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createPeriodSchema,
  createDurationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEncounterHistoryLocationSchema } from "../encounterhistorylocation/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterHistorySchema() {
  const baseSchema: z.ZodType<types.EncounterHistory> = z.object({
    resourceType: z.literal("EncounterHistory"),
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
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    class: z.lazy(() => createCodeableConceptSchema()),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    serviceType: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    subjectStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    actualPeriod: z.lazy(() => createPeriodSchema()).optional(),
    plannedStartDate: primitives.createDateTimeSchema().optional(),
    _plannedStartDate: z.lazy(() => createElementSchema()).optional(),
    plannedEndDate: primitives.createDateTimeSchema().optional(),
    _plannedEndDate: z.lazy(() => createElementSchema()).optional(),
    length: z.lazy(() => createDurationSchema()).optional(),
    location: z
      .array(z.lazy(() => createEncounterHistoryLocationSchema()))
      .optional(),
  });

  return baseSchema;
}
