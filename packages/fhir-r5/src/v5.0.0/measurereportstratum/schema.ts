import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createRangeSchema,
  createReferenceSchema,
  createPeriodSchema,
  createDurationSchema,
} from "../core/schema";
import { createMeasureReportComponentSchema } from "../measurereportcomponent/schema";
import { createMeasureReportPopulation1Schema } from "../measurereportpopulation1/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportStratumSchema() {
  const baseSchema: z.ZodType<types.MeasureReportStratum> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
    component: z
      .array(z.lazy(() => createMeasureReportComponentSchema()))
      .optional(),
    population: z
      .array(z.lazy(() => createMeasureReportPopulation1Schema()))
      .optional(),
    measureScoreQuantity: z.lazy(() => createQuantitySchema()).optional(),
    measureScoreDateTime: z.string().optional(),
    _measureScoreDateTime: z.lazy(() => createElementSchema()).optional(),
    measureScoreCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    measureScorePeriod: z.lazy(() => createPeriodSchema()).optional(),
    measureScoreRange: z.lazy(() => createRangeSchema()).optional(),
    measureScoreDuration: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
