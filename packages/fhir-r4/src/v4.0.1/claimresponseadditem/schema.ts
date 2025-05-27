import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAddressSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
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
    provider: z.array(z.lazy(() => createReferenceSchema())).optional(),
    productOrService: z.lazy(() => createCodeableConceptSchema()),
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
    net: z.lazy(() => createMoneySchema()).optional(),
    bodySite: z.lazy(() => createCodeableConceptSchema()).optional(),
    subSite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    adjudication: z.array(
      z.lazy(() => createClaimResponseAdjudicationSchema()),
    ),
    detail: z
      .array(z.lazy(() => createClaimResponseDetail1Schema()))
      .optional(),
  });

  return baseSchema;
}
