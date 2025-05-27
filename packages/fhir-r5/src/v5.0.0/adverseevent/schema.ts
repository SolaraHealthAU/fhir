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
  createTimingSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAdverseEventParticipantSchema } from "../adverseeventparticipant/schema";
import { createAdverseEventSuspectEntitySchema } from "../adverseeventsuspectentity/schema";
import { createAdverseEventContributingFactorSchema } from "../adverseeventcontributingfactor/schema";
import { createAdverseEventPreventiveActionSchema } from "../adverseeventpreventiveaction/schema";
import { createAdverseEventMitigatingActionSchema } from "../adverseeventmitigatingaction/schema";
import { createAdverseEventSupportingInfoSchema } from "../adverseeventsupportinginfo/schema";

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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    actuality: primitives.createCodeSchema().optional(),
    _actuality: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurrenceTiming: z.lazy(() => createTimingSchema()).optional(),
    detected: primitives.createDateTimeSchema().optional(),
    _detected: z.lazy(() => createElementSchema()).optional(),
    recordedDate: primitives.createDateTimeSchema().optional(),
    _recordedDate: z.lazy(() => createElementSchema()).optional(),
    resultingEffect: z.array(z.lazy(() => createReferenceSchema())).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    seriousness: z.lazy(() => createCodeableConceptSchema()).optional(),
    outcome: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    recorder: z.lazy(() => createReferenceSchema()).optional(),
    participant: z
      .array(z.lazy(() => createAdverseEventParticipantSchema()))
      .optional(),
    study: z.array(z.lazy(() => createReferenceSchema())).optional(),
    expectedInResearchStudy: primitives.createBooleanSchema().optional(),
    _expectedInResearchStudy: z.lazy(() => createElementSchema()).optional(),
    suspectEntity: z
      .array(z.lazy(() => createAdverseEventSuspectEntitySchema()))
      .optional(),
    contributingFactor: z
      .array(z.lazy(() => createAdverseEventContributingFactorSchema()))
      .optional(),
    preventiveAction: z
      .array(z.lazy(() => createAdverseEventPreventiveActionSchema()))
      .optional(),
    mitigatingAction: z
      .array(z.lazy(() => createAdverseEventMitigatingActionSchema()))
      .optional(),
    supportingInfo: z
      .array(z.lazy(() => createAdverseEventSupportingInfoSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
