import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
  createRangeSchema,
  createRatioSchema,
  createSampledDataSchema,
  createPeriodSchema,
} from "../core/schema";
import { createObservationReferenceRangeSchema } from "../observationreferencerange/schema";

/* Generated from FHIR JSON Schema */

export function createObservationComponentSchema() {
  const baseSchema: z.ZodType<types.ObservationComponent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
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
    dataAbsentReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    interpretation: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    referenceRange: z
      .array(z.lazy(() => createObservationReferenceRangeSchema()))
      .optional(),
  });

  return baseSchema;
}
