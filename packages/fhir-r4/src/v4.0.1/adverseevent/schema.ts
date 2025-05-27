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
import { createAdverseEventSuspectEntitySchema } from "../adverseeventsuspectentity/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventSchema() {
  const baseSchema: z.ZodType<types.AdverseEvent> = z.object({
    resourceType: z.literal("AdverseEvent"),
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
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    actuality: z.enum(["actual", "potential"]),
    _actuality: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    event: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    detected: primitives.createDateTimeSchema().optional(),
    _detected: z.lazy(() => createElementSchema()).optional(),
    recordedDate: primitives.createDateTimeSchema().optional(),
    _recordedDate: z.lazy(() => createElementSchema()).optional(),
    resultingCondition: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    seriousness: z.lazy(() => createCodeableConceptSchema()).optional(),
    severity: z.lazy(() => createCodeableConceptSchema()).optional(),
    outcome: z.lazy(() => createCodeableConceptSchema()).optional(),
    recorder: z.lazy(() => createReferenceSchema()).optional(),
    contributor: z.array(z.lazy(() => createReferenceSchema())).optional(),
    suspectEntity: z
      .array(z.lazy(() => createAdverseEventSuspectEntitySchema()))
      .optional(),
    subjectMedicalHistory: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    referenceDocument: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    study: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
