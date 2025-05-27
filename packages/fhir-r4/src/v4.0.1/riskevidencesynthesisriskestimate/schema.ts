import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createRiskEvidenceSynthesisPrecisionEstimateSchema } from "../riskevidencesynthesisprecisionestimate/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisRiskEstimateSchema() {
  return getCachedSchema("RiskEvidenceSynthesisRiskEstimate", () => {
    const baseSchema: z.ZodType<types.RiskEvidenceSynthesisRiskEstimate> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        value: primitives.getDecimalSchema().optional(),
        _value: z.lazy(() => createElementSchema()).optional(),
        unitOfMeasure: createCodeableConceptSchema().optional(),
        denominatorCount: primitives.getIntegerSchema().optional(),
        _denominatorCount: z.lazy(() => createElementSchema()).optional(),
        numeratorCount: primitives.getIntegerSchema().optional(),
        _numeratorCount: z.lazy(() => createElementSchema()).optional(),
        precisionEstimate: z
          .array(createRiskEvidenceSynthesisPrecisionEstimateSchema())
          .optional(),
      });

    return baseSchema;
  });
}
