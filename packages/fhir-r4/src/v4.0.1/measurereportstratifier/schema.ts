import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMeasureReportStratumSchema } from "../measurereportstratum/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportStratifierSchema() {
  const baseSchema: z.ZodType<types.MeasureReportStratifier> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    stratum: z
      .array(z.lazy(() => createMeasureReportStratumSchema()))
      .optional(),
  });

  return baseSchema;
}
