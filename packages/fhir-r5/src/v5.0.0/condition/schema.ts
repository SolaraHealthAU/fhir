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
  createAgeSchema,
  createPeriodSchema,
  createRangeSchema,
  createCodeableReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createConditionParticipantSchema } from "../conditionparticipant/schema";
import { createConditionStageSchema } from "../conditionstage/schema";

/* Generated from FHIR JSON Schema */

export function createConditionSchema() {
  const baseSchema: z.ZodType<types.Condition> = z.object({
    resourceType: z.literal("Condition"),
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
    clinicalStatus: z.lazy(() => createCodeableConceptSchema()),
    verificationStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    severity: z.lazy(() => createCodeableConceptSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    bodySite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    onsetDateTime: z.string().optional(),
    _onsetDateTime: z.lazy(() => createElementSchema()).optional(),
    onsetAge: z.lazy(() => createAgeSchema()).optional(),
    onsetPeriod: z.lazy(() => createPeriodSchema()).optional(),
    onsetRange: z.lazy(() => createRangeSchema()).optional(),
    onsetString: z.string().optional(),
    _onsetString: z.lazy(() => createElementSchema()).optional(),
    abatementDateTime: z.string().optional(),
    _abatementDateTime: z.lazy(() => createElementSchema()).optional(),
    abatementAge: z.lazy(() => createAgeSchema()).optional(),
    abatementPeriod: z.lazy(() => createPeriodSchema()).optional(),
    abatementRange: z.lazy(() => createRangeSchema()).optional(),
    abatementString: z.string().optional(),
    _abatementString: z.lazy(() => createElementSchema()).optional(),
    recordedDate: primitives.createDateTimeSchema().optional(),
    _recordedDate: z.lazy(() => createElementSchema()).optional(),
    participant: z
      .array(z.lazy(() => createConditionParticipantSchema()))
      .optional(),
    stage: z.array(z.lazy(() => createConditionStageSchema())).optional(),
    evidence: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
