import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
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
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    population: z
      .array(z.lazy(() => createMeasureReportPopulationSchema()))
      .optional(),
    measureScore: z.lazy(() => createQuantitySchema()).optional(),
    stratifier: z
      .array(z.lazy(() => createMeasureReportStratifierSchema()))
      .optional(),
  });

  return baseSchema;
}
