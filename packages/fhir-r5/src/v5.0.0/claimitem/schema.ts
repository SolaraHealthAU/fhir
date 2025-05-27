import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createAddressSchema,
  createMoneySchema,
  createQuantitySchema,
} from "../core/schema";
import { createClaimBodySiteSchema } from "../claimbodysite/schema";
import { createClaimDetailSchema } from "../claimdetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimItemSchema() {
  const baseSchema: z.ZodType<types.ClaimItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    traceNumber: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    careTeamSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _careTeamSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    diagnosisSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _diagnosisSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    procedureSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _procedureSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    informationSequence: z
      .array(primitives.createPositiveIntSchema())
      .optional(),
    _informationSequence: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    revenue: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
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
    patientPaid: z.lazy(() => createMoneySchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    tax: z.lazy(() => createMoneySchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    udi: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.array(z.lazy(() => createClaimBodySiteSchema())).optional(),
    encounter: z.array(z.lazy(() => createReferenceSchema())).optional(),
    detail: z.array(z.lazy(() => createClaimDetailSchema())).optional(),
  });

  return baseSchema;
}
