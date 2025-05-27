import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createEffectEvidenceSynthesisPrecisionEstimateSchema } from "../effectevidencesynthesisprecisionestimate/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisEffectEstimateSchema() {
  return getCachedSchema("EffectEvidenceSynthesisEffectEstimate", () => {
    const baseSchema: z.ZodType<types.EffectEvidenceSynthesisEffectEstimate> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        variantState: createCodeableConceptSchema().optional(),
        value: primitives.getDecimalSchema().optional(),
        _value: z.lazy(() => createElementSchema()).optional(),
        unitOfMeasure: createCodeableConceptSchema().optional(),
        precisionEstimate: z
          .array(createEffectEvidenceSynthesisPrecisionEstimateSchema())
          .optional(),
      });

    return baseSchema;
  });
}
