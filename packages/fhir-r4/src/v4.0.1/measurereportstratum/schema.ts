import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createMeasureReportComponentSchema } from "../measurereportcomponent/schema";
import { createMeasureReportPopulation1Schema } from "../measurereportpopulation1/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportStratumSchema() {
  return getCachedSchema("MeasureReportStratum", () => {
    const baseSchema: z.ZodType<types.MeasureReportStratum> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      value: createCodeableConceptSchema().optional(),
      component: z.array(createMeasureReportComponentSchema()).optional(),
      population: z.array(createMeasureReportPopulation1Schema()).optional(),
      measureScore: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}
