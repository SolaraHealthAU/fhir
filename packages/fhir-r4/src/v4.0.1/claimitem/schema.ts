import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAddressSchema,
  createReferenceSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
import { createClaimDetailSchema } from "../claimdetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimItemSchema() {
  return getCachedSchema("ClaimItem", () => {
    const baseSchema: z.ZodType<types.ClaimItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      sequence: primitives.getPositiveIntSchema(),
      _sequence: createElementSchema().optional(),
      careTeamSequence: z.array(primitives.getPositiveIntSchema()).optional(),
      _careTeamSequence: z.array(createElementSchema()).optional(),
      diagnosisSequence: z.array(primitives.getPositiveIntSchema()).optional(),
      _diagnosisSequence: z.array(createElementSchema()).optional(),
      procedureSequence: z.array(primitives.getPositiveIntSchema()).optional(),
      _procedureSequence: z.array(createElementSchema()).optional(),
      informationSequence: z
        .array(primitives.getPositiveIntSchema())
        .optional(),
      _informationSequence: z.array(createElementSchema()).optional(),
      revenue: createCodeableConceptSchema().optional(),
      category: createCodeableConceptSchema().optional(),
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
      udi: z.array(createReferenceSchema()).optional(),
      bodySite: createCodeableConceptSchema().optional(),
      subSite: z.array(createCodeableConceptSchema()).optional(),
      encounter: z.array(createReferenceSchema()).optional(),
      detail: z.array(createClaimDetailSchema()).optional(),
    });

    return baseSchema;
  });
}
