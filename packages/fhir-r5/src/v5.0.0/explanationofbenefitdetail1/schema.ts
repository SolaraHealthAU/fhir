import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";
import { createExplanationOfBenefitReviewOutcomeSchema } from "../explanationofbenefitreviewoutcome/schema";
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";
import { createExplanationOfBenefitSubDetail1Schema } from "../explanationofbenefitsubdetail1/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitDetail1Schema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitDetail1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    traceNumber: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    revenue: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrService: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrServiceEnd: z.lazy(() => createCodeableConceptSchema()).optional(),
    modifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    patientPaid: z.lazy(() => createMoneySchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    tax: z.lazy(() => createMoneySchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    reviewOutcome: z
      .lazy(() => createExplanationOfBenefitReviewOutcomeSchema())
      .optional(),
    adjudication: z
      .array(z.lazy(() => createExplanationOfBenefitAdjudicationSchema()))
      .optional(),
    subDetail: z
      .array(z.lazy(() => createExplanationOfBenefitSubDetail1Schema()))
      .optional(),
  });

  return baseSchema;
}
