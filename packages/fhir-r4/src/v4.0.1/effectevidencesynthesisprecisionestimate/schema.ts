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

export function createEffectEvidenceSynthesisPrecisionEstimateSchema() {
  return getCachedSchema("EffectEvidenceSynthesisPrecisionEstimate", () => {
    const baseSchema: z.ZodType<types.EffectEvidenceSynthesisPrecisionEstimate> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        level: primitives.getDecimalSchema().optional(),
        _level: z.lazy(() => createElementSchema()).optional(),
        from: primitives.getDecimalSchema().optional(),
        _from: z.lazy(() => createElementSchema()).optional(),
        to: primitives.getDecimalSchema().optional(),
        _to: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
