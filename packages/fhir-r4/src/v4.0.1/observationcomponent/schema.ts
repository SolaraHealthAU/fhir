import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ObservationComponent", () => {
    const baseSchema: z.ZodType<types.ObservationComponent> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: createCodeableConceptSchema(),
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
      referenceRange: z
        .array(createObservationReferenceRangeSchema())
        .optional(),
    });

    return baseSchema;
  });
}
