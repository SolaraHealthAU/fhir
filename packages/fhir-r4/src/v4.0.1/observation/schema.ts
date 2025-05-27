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
  createPeriodSchema,
  createTimingSchema,
  createQuantitySchema,
  createRangeSchema,
  createRatioSchema,
  createSampledDataSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createObservationReferenceRangeSchema } from "../observationreferencerange/schema";
import { createObservationComponentSchema } from "../observationcomponent/schema";

/* Generated from FHIR JSON Schema */

export function createObservationSchema() {
  return getCachedSchema("Observation", () => {
    const baseSchema: z.ZodType<types.Observation> = z.strictObject({
      resourceType: z.literal("Observation"),
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
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: z.enum([
        "registered",
        "preliminary",
        "final",
        "amended",
        "corrected",
        "cancelled",
        "entered-in-error",
        "unknown",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      code: createCodeableConceptSchema(),
      subject: createReferenceSchema().optional(),
      focus: z.array(createReferenceSchema()).optional(),
      encounter: createReferenceSchema().optional(),
      effectiveDateTime: z.string().optional(),
      _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
      effectivePeriod: createPeriodSchema().optional(),
      effectiveTiming: createTimingSchema().optional(),
      effectiveInstant: z.string().optional(),
      _effectiveInstant: z.lazy(() => createElementSchema()).optional(),
      issued: primitives.getInstantSchema().optional(),
      _issued: z.lazy(() => createElementSchema()).optional(),
      performer: z.array(createReferenceSchema()).optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueCodeableConcept: createCodeableConceptSchema().optional(),
      valueString: z.string().optional(),
      _valueString: z.lazy(() => createElementSchema()).optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueInteger: z.number().optional(),
      _valueInteger: z.lazy(() => createElementSchema()).optional(),
      valueRange: createRangeSchema().optional(),
      valueRatio: createRatioSchema().optional(),
      valueSampledData: createSampledDataSchema().optional(),
      valueTime: z.string().optional(),
      _valueTime: z.lazy(() => createElementSchema()).optional(),
      valueDateTime: z.string().optional(),
      _valueDateTime: z.lazy(() => createElementSchema()).optional(),
      valuePeriod: createPeriodSchema().optional(),
      dataAbsentReason: createCodeableConceptSchema().optional(),
      interpretation: z.array(createCodeableConceptSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      bodySite: createCodeableConceptSchema().optional(),
      method: createCodeableConceptSchema().optional(),
      specimen: createReferenceSchema().optional(),
      device: createReferenceSchema().optional(),
      referenceRange: z
        .array(createObservationReferenceRangeSchema())
        .optional(),
      hasMember: z.array(createReferenceSchema()).optional(),
      derivedFrom: z.array(createReferenceSchema()).optional(),
      component: z.array(createObservationComponentSchema()).optional(),
    });

    return baseSchema;
  });
}
