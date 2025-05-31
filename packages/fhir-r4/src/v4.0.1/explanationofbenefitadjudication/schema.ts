import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitAdjudicationSchema() {
  return getCachedSchema("ExplanationOfBenefitAdjudication", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitAdjudication> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        category: createCodeableConceptSchema(),
        reason: createCodeableConceptSchema().optional(),
        amount: createMoneySchema().optional(),
        value: primitives.getDecimalSchema().optional(),
        _value: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
