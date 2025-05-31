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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        value: primitives.getDecimalSchema().optional(),
        _value: createElementSchema().optional(),
        unitOfMeasure: createCodeableConceptSchema().optional(),
        denominatorCount: primitives.getIntegerSchema().optional(),
        _denominatorCount: createElementSchema().optional(),
        numeratorCount: primitives.getIntegerSchema().optional(),
        _numeratorCount: createElementSchema().optional(),
        precisionEstimate: z
          .array(createRiskEvidenceSynthesisPrecisionEstimateSchema())
          .optional(),
      });

    return baseSchema;
  });
}
