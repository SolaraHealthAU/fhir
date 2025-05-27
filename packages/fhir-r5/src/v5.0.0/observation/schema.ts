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
  createPeriodSchema,
  createTimingSchema,
  createQuantitySchema,
  createRangeSchema,
  createRatioSchema,
  createSampledDataSchema,
  createAttachmentSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createObservationTriggeredBySchema } from "../observationtriggeredby/schema";
import { createObservationReferenceRangeSchema } from "../observationreferencerange/schema";
import { createObservationComponentSchema } from "../observationcomponent/schema";

/* Generated from FHIR JSON Schema */

export function createObservationSchema() {
  const baseSchema: z.ZodType<types.Observation> = z.object({
    resourceType: z.literal("Observation"),
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
    instantiatesCanonical: z.string().optional(),
    _instantiatesCanonical: z.lazy(() => createElementSchema()).optional(),
    instantiatesReference: z.lazy(() => createReferenceSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    triggeredBy: z
      .array(z.lazy(() => createObservationTriggeredBySchema()))
      .optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    focus: z.array(z.lazy(() => createReferenceSchema())).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    effectiveDateTime: z.string().optional(),
    _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    effectiveTiming: z.lazy(() => createTimingSchema()).optional(),
    effectiveInstant: z.string().optional(),
    _effectiveInstant: z.lazy(() => createElementSchema()).optional(),
    issued: primitives.createInstantSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    performer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueRatio: z.lazy(() => createRatioSchema()).optional(),
    valueSampledData: z.lazy(() => createSampledDataSchema()).optional(),
    valueTime: z.string().optional(),
    _valueTime: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
    valuePeriod: z.lazy(() => createPeriodSchema()).optional(),
    valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
    dataAbsentReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    interpretation: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    bodySite: z.lazy(() => createCodeableConceptSchema()).optional(),
    bodyStructure: z.lazy(() => createReferenceSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    specimen: z.lazy(() => createReferenceSchema()).optional(),
    device: z.lazy(() => createReferenceSchema()).optional(),
    referenceRange: z
      .array(z.lazy(() => createObservationReferenceRangeSchema()))
      .optional(),
    hasMember: z.array(z.lazy(() => createReferenceSchema())).optional(),
    derivedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    component: z
      .array(z.lazy(() => createObservationComponentSchema()))
      .optional(),
  });

  return baseSchema;
}
