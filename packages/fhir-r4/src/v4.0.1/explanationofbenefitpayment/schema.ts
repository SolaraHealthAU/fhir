import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createElementSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitPaymentSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitPayment> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    adjustment: z.lazy(() => createMoneySchema()).optional(),
    adjustmentReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    date: primitives.createDateSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    amount: z.lazy(() => createMoneySchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
  });

  return baseSchema;
}
