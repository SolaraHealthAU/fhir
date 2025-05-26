import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createRangeSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskAssessmentPredictionSchema() {
  const baseSchema: z.ZodType<types.RiskAssessmentPrediction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    outcome: z.lazy(() => createCodeableConceptSchema()).optional(),
    probabilityDecimal: z.number().optional(),
    _probabilityDecimal: z.lazy(() => createElementSchema()).optional(),
    probabilityRange: z.lazy(() => createRangeSchema()).optional(),
    qualitativeRisk: z.lazy(() => createCodeableConceptSchema()).optional(),
    relativeRisk: primitives.createDecimalSchema().optional(),
    _relativeRisk: z.lazy(() => createElementSchema()).optional(),
    whenPeriod: z.lazy(() => createPeriodSchema()).optional(),
    whenRange: z.lazy(() => createRangeSchema()).optional(),
    rationale: primitives.createStringSchema().optional(),
    _rationale: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
