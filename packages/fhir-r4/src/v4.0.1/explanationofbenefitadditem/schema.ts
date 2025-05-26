import { z } from "zod";
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
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";
import { createExplanationOfBenefitDetail1Schema } from "../explanationofbenefitdetail1/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitAddItemSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitAddItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    itemSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _itemSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    detailSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _detailSequence: z.array(z.lazy(() => createElementSchema())).optional(),
    subDetailSequence: z.array(primitives.createPositiveIntSchema()).optional(),
    _subDetailSequence: z.array(z.lazy(() => createElementSchema())).optional(),
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
    adjudication: z
      .array(z.lazy(() => createExplanationOfBenefitAdjudicationSchema()))
      .optional(),
    detail: z
      .array(z.lazy(() => createExplanationOfBenefitDetail1Schema()))
      .optional(),
  });

  return baseSchema;
}
