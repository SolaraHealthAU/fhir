import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createRiskEvidenceSynthesisPrecisionEstimateSchema } from "../riskevidencesynthesisprecisionestimate/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisRiskEstimateSchema() {
  const baseSchema: z.ZodType<types.RiskEvidenceSynthesisRiskEstimate> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      value: primitives.createDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      unitOfMeasure: z.lazy(() => createCodeableConceptSchema()).optional(),
      denominatorCount: primitives.createIntegerSchema().optional(),
      _denominatorCount: z.lazy(() => createElementSchema()).optional(),
      numeratorCount: primitives.createIntegerSchema().optional(),
      _numeratorCount: z.lazy(() => createElementSchema()).optional(),
      precisionEstimate: z
        .array(
          z.lazy(() => createRiskEvidenceSynthesisPrecisionEstimateSchema()),
        )
        .optional(),
    });

  return baseSchema;
}
