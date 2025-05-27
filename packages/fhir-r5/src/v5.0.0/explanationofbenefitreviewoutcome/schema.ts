import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitReviewOutcomeSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitReviewOutcome> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      decision: z.lazy(() => createCodeableConceptSchema()).optional(),
      reason: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      preAuthRef: primitives.createStringSchema().optional(),
      _preAuthRef: z.lazy(() => createElementSchema()).optional(),
      preAuthPeriod: z.lazy(() => createPeriodSchema()).optional(),
    });

  return baseSchema;
}
