import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";
import { createExplanationOfBenefitReviewOutcomeSchema } from "../explanationofbenefitreviewoutcome/schema";
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitSubDetailSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitSubDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    traceNumber: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    revenue: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrService: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrServiceEnd: z.lazy(() => createCodeableConceptSchema()).optional(),
    modifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    programCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    patientPaid: z.lazy(() => createMoneySchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    tax: z.lazy(() => createMoneySchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    udi: z.array(z.lazy(() => createReferenceSchema())).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    reviewOutcome: z
      .lazy(() => createExplanationOfBenefitReviewOutcomeSchema())
      .optional(),
    adjudication: z
      .array(z.lazy(() => createExplanationOfBenefitAdjudicationSchema()))
      .optional(),
  });

  return baseSchema;
}
