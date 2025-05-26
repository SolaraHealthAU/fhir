import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";
import { createExplanationOfBenefitDetailSchema } from "../explanationofbenefitdetail/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitItemSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
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
    udi: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.lazy(() => createCodeableConceptSchema()).optional(),
    subSite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    encounter: z.array(z.lazy(() => createReferenceSchema())).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    adjudication: z
      .array(z.lazy(() => createExplanationOfBenefitAdjudicationSchema()))
      .optional(),
    detail: z
      .array(z.lazy(() => createExplanationOfBenefitDetailSchema()))
      .optional(),
  });

  return baseSchema;
}
