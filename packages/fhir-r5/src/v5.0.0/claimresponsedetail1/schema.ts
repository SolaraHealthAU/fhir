import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
  createElementSchema,
} from "../core/schema";
import { createClaimResponseReviewOutcomeSchema } from "../claimresponsereviewoutcome/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseSubDetail1Schema } from "../claimresponsesubdetail1/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseDetail1Schema() {
  const baseSchema: z.ZodType<types.ClaimResponseDetail1> = z.object({
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
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    tax: z.lazy(() => createMoneySchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    reviewOutcome: z
      .lazy(() => createClaimResponseReviewOutcomeSchema())
      .optional(),
    adjudication: z
      .array(z.lazy(() => createClaimResponseAdjudicationSchema()))
      .optional(),
    subDetail: z
      .array(z.lazy(() => createClaimResponseSubDetail1Schema()))
      .optional(),
  });

  return baseSchema;
}
