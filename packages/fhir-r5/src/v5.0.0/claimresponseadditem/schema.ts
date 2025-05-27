import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAddressSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
import { createClaimResponseBodySiteSchema } from "../claimresponsebodysite/schema";
import { createClaimResponseReviewOutcomeSchema } from "../claimresponsereviewoutcome/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseDetail1Schema } from "../claimresponsedetail1/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseAddItemSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseAddItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    itemSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _itemSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    detailSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _detailSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    subdetailSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _subdetailSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    traceNumber: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    provider: z.array(z.lazy(() => createReferenceSchema())).optional(),
    revenue: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrService: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrServiceEnd: z.lazy(() => createCodeableConceptSchema()).optional(),
    request: z.array(z.lazy(() => createReferenceSchema())).optional(),
    modifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    programCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    servicedDate: z.string().optional(),
    _servicedDate: z.lazy(() => createElementSchema()).optional(),
    servicedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    locationCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    locationAddress: z.lazy(() => createAddressSchema()).optional(),
    locationReference: z.lazy(() => createReferenceSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    tax: z.lazy(() => createMoneySchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    bodySite: z
      .array(z.lazy(() => createClaimResponseBodySiteSchema()))
      .optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    reviewOutcome: z
      .lazy(() => createClaimResponseReviewOutcomeSchema())
      .optional(),
    adjudication: z
      .array(z.lazy(() => createClaimResponseAdjudicationSchema()))
      .optional(),
    detail: z
      .array(z.lazy(() => createClaimResponseDetail1Schema()))
      .optional(),
  });

  return baseSchema;
}
