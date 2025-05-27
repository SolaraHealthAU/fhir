import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createElementSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitPaymentSchema() {
  return getCachedSchema("ExplanationOfBenefitPayment", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitPayment> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        adjustment: createMoneySchema().optional(),
        adjustmentReason: createCodeableConceptSchema().optional(),
        date: primitives.getDateSchema().optional(),
        _date: z.lazy(() => createElementSchema()).optional(),
        amount: createMoneySchema().optional(),
        identifier: z.lazy(() => createIdentifierSchema()).optional(),
      });

    return baseSchema;
  });
}
