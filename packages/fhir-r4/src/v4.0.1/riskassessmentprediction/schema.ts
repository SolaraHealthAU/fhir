import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createRangeSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskAssessmentPredictionSchema() {
  return getCachedSchema("RiskAssessmentPrediction", () => {
    const baseSchema: z.ZodType<types.RiskAssessmentPrediction> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        outcome: createCodeableConceptSchema().optional(),
        probabilityDecimal: z.number().optional(),
        _probabilityDecimal: z.lazy(() => createElementSchema()).optional(),
        probabilityRange: createRangeSchema().optional(),
        qualitativeRisk: createCodeableConceptSchema().optional(),
        relativeRisk: primitives.getDecimalSchema().optional(),
        _relativeRisk: z.lazy(() => createElementSchema()).optional(),
        whenPeriod: createPeriodSchema().optional(),
        whenRange: createRangeSchema().optional(),
        rationale: primitives.getStringSchema().optional(),
        _rationale: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
