import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
  createPeriodSchema,
  createRangeSchema,
  createDurationSchema,
} from "../core/schema";
import { createMeasureReportPopulationSchema } from "../measurereportpopulation/schema";
import { createMeasureReportStratifierSchema } from "../measurereportstratifier/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportGroupSchema() {
  const baseSchema: z.ZodType<types.MeasureReportGroup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    population: z
      .array(z.lazy(() => createMeasureReportPopulationSchema()))
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
    stratifier: z
      .array(z.lazy(() => createMeasureReportStratifierSchema()))
      .optional(),
  });

  return baseSchema;
}
