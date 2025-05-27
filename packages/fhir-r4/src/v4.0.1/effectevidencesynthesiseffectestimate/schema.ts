import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createEffectEvidenceSynthesisPrecisionEstimateSchema } from "../effectevidencesynthesisprecisionestimate/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisEffectEstimateSchema() {
  const baseSchema: z.ZodType<types.EffectEvidenceSynthesisEffectEstimate> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      variantState: z.lazy(() => createCodeableConceptSchema()).optional(),
      value: primitives.createDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      unitOfMeasure: z.lazy(() => createCodeableConceptSchema()).optional(),
      precisionEstimate: z
        .array(
          z.lazy(() => createEffectEvidenceSynthesisPrecisionEstimateSchema()),
        )
        .optional(),
    });

  return baseSchema;
}
