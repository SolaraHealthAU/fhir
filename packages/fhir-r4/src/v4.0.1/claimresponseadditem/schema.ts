import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ClaimResponseAddItem", () => {
    const baseSchema: z.ZodType<types.ClaimResponseAddItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      itemSequence: z.array(primitives.getPositiveIntSchema()).optional(),
      _itemSequence: z.array(createElementSchema()).optional(),
      detailSequence: z.array(primitives.getPositiveIntSchema()).optional(),
      _detailSequence: z.array(createElementSchema()).optional(),
      subdetailSequence: z.array(primitives.getPositiveIntSchema()).optional(),
      _subdetailSequence: z.array(createElementSchema()).optional(),
      provider: z.array(createReferenceSchema()).optional(),
      productOrService: createCodeableConceptSchema(),
      modifier: z.array(createCodeableConceptSchema()).optional(),
      programCode: z.array(createCodeableConceptSchema()).optional(),
      servicedDate: z.string().optional(),
      _servicedDate: createElementSchema().optional(),
      servicedPeriod: createPeriodSchema().optional(),
      locationCodeableConcept: createCodeableConceptSchema().optional(),
      locationAddress: createAddressSchema().optional(),
      locationReference: createReferenceSchema().optional(),
      quantity: createQuantitySchema().optional(),
      unitPrice: createMoneySchema().optional(),
      factor: primitives.getDecimalSchema().optional(),
      _factor: createElementSchema().optional(),
      net: createMoneySchema().optional(),
      bodySite: createCodeableConceptSchema().optional(),
      subSite: z.array(createCodeableConceptSchema()).optional(),
      noteNumber: z.array(primitives.getPositiveIntSchema()).optional(),
      _noteNumber: z.array(createElementSchema()).optional(),
      adjudication: z.array(createClaimResponseAdjudicationSchema()),
      detail: z.array(createClaimResponseDetail1Schema()).optional(),
    });

    return baseSchema;
  });
}
