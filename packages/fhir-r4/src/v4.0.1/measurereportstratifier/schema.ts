import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMeasureReportStratumSchema } from "../measurereportstratum/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportStratifierSchema() {
  return getCachedSchema("MeasureReportStratifier", () => {
    const baseSchema: z.ZodType<types.MeasureReportStratifier> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: z.array(createCodeableConceptSchema()).optional(),
        stratum: z.array(createMeasureReportStratumSchema()).optional(),
      },
    );

    return baseSchema;
  });
}
