import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createMeasureReportPopulationSchema } from "../measurereportpopulation/schema";
import { createMeasureReportStratifierSchema } from "../measurereportstratifier/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportGroupSchema() {
  return getCachedSchema("MeasureReportGroup", () => {
    const baseSchema: z.ZodType<types.MeasureReportGroup> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      population: z.array(createMeasureReportPopulationSchema()).optional(),
      measureScore: createQuantitySchema().optional(),
      stratifier: z.array(createMeasureReportStratifierSchema()).optional(),
    });

    return baseSchema;
  });
}
