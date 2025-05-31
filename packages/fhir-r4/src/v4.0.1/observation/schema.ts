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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
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
      _status: createElementSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      code: createCodeableConceptSchema(),
      subject: createReferenceSchema().optional(),
      focus: z.array(createReferenceSchema()).optional(),
      encounter: createReferenceSchema().optional(),
      effectiveDateTime: z.string().optional(),
      _effectiveDateTime: createElementSchema().optional(),
      effectivePeriod: createPeriodSchema().optional(),
      effectiveTiming: createTimingSchema().optional(),
      effectiveInstant: z.string().optional(),
      _effectiveInstant: createElementSchema().optional(),
      issued: primitives.getInstantSchema().optional(),
      _issued: createElementSchema().optional(),
      performer: z.array(createReferenceSchema()).optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueCodeableConcept: createCodeableConceptSchema().optional(),
      valueString: z.string().optional(),
      _valueString: createElementSchema().optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: createElementSchema().optional(),
      valueInteger: z.number().optional(),
      _valueInteger: createElementSchema().optional(),
      valueRange: createRangeSchema().optional(),
      valueRatio: createRatioSchema().optional(),
      valueSampledData: createSampledDataSchema().optional(),
      valueTime: z.string().optional(),
      _valueTime: createElementSchema().optional(),
      valueDateTime: z.string().optional(),
      _valueDateTime: createElementSchema().optional(),
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
