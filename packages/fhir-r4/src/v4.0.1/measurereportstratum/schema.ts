import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
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
    value: z.lazy(() => createCodeableConceptSchema()).optional(),
    component: z
      .array(z.lazy(() => createMeasureReportComponentSchema()))
      .optional(),
    population: z
      .array(z.lazy(() => createMeasureReportPopulation1Schema()))
      .optional(),
    measureScore: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
