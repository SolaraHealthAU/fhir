import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisPrecisionEstimateSchema() {
  return getCachedSchema("RiskEvidenceSynthesisPrecisionEstimate", () => {
    const baseSchema: z.ZodType<types.RiskEvidenceSynthesisPrecisionEstimate> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        level: primitives.getDecimalSchema().optional(),
        _level: createElementSchema().optional(),
        from: primitives.getDecimalSchema().optional(),
        _from: createElementSchema().optional(),
        to: primitives.getDecimalSchema().optional(),
        _to: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
