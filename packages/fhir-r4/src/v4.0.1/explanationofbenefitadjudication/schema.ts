import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitAdjudicationSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitAdjudication> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      category: z.lazy(() => createCodeableConceptSchema()),
      reason: z.lazy(() => createCodeableConceptSchema()).optional(),
      amount: z.lazy(() => createMoneySchema()).optional(),
      value: primitives.createDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
