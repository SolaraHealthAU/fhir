import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisPrecisionEstimateSchema() {
  const baseSchema: z.ZodType<types.EffectEvidenceSynthesisPrecisionEstimate> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      level: primitives.createDecimalSchema().optional(),
      _level: z.lazy(() => createElementSchema()).optional(),
      from: primitives.createDecimalSchema().optional(),
      _from: z.lazy(() => createElementSchema()).optional(),
      to: primitives.createDecimalSchema().optional(),
      _to: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
