import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createExplanationOfBenefitRelatedSchema } from "../explanationofbenefitrelated/schema";
import { createExplanationOfBenefitPayeeSchema } from "../explanationofbenefitpayee/schema";
import { createExplanationOfBenefitCareTeamSchema } from "../explanationofbenefitcareteam/schema";
import { createExplanationOfBenefitSupportingInfoSchema } from "../explanationofbenefitsupportinginfo/schema";
import { createExplanationOfBenefitDiagnosisSchema } from "../explanationofbenefitdiagnosis/schema";
import { createExplanationOfBenefitProcedureSchema } from "../explanationofbenefitprocedure/schema";
import { createExplanationOfBenefitInsuranceSchema } from "../explanationofbenefitinsurance/schema";
import { createExplanationOfBenefitAccidentSchema } from "../explanationofbenefitaccident/schema";
import { createExplanationOfBenefitItemSchema } from "../explanationofbenefititem/schema";
import { createExplanationOfBenefitAddItemSchema } from "../explanationofbenefitadditem/schema";
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";
import { createExplanationOfBenefitTotalSchema } from "../explanationofbenefittotal/schema";
import { createExplanationOfBenefitPaymentSchema } from "../explanationofbenefitpayment/schema";
import { createExplanationOfBenefitProcessNoteSchema } from "../explanationofbenefitprocessnote/schema";
import { createExplanationOfBenefitBenefitBalanceSchema } from "../explanationofbenefitbenefitbalance/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefit> = z.object({
    resourceType: z.literal("ExplanationOfBenefit"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    subType: z.lazy(() => createCodeableConceptSchema()).optional(),
    use: primitives.createCodeSchema(),
    _use: z.lazy(() => createElementSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    billablePeriod: z.lazy(() => createPeriodSchema()).optional(),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    enterer: z.lazy(() => createReferenceSchema()).optional(),
    insurer: z.lazy(() => createReferenceSchema()),
    provider: z.lazy(() => createReferenceSchema()),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    fundsReserveRequested: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    fundsReserve: z.lazy(() => createCodeableConceptSchema()).optional(),
    related: z
      .array(z.lazy(() => createExplanationOfBenefitRelatedSchema()))
      .optional(),
    prescription: z.lazy(() => createReferenceSchema()).optional(),
    originalPrescription: z.lazy(() => createReferenceSchema()).optional(),
    payee: z.lazy(() => createExplanationOfBenefitPayeeSchema()).optional(),
    referral: z.lazy(() => createReferenceSchema()).optional(),
    facility: z.lazy(() => createReferenceSchema()).optional(),
    claim: z.lazy(() => createReferenceSchema()).optional(),
    claimResponse: z.lazy(() => createReferenceSchema()).optional(),
    outcome: primitives.createCodeSchema(),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createStringSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
    preAuthRef: z.array(primitives.createStringSchema()).optional(),
    _preAuthRef: z.array(z.lazy(() => createElementSchema())).optional(),
    preAuthRefPeriod: z.array(z.lazy(() => createPeriodSchema())).optional(),
    careTeam: z
      .array(z.lazy(() => createExplanationOfBenefitCareTeamSchema()))
      .optional(),
    supportingInfo: z
      .array(z.lazy(() => createExplanationOfBenefitSupportingInfoSchema()))
      .optional(),
    diagnosis: z
      .array(z.lazy(() => createExplanationOfBenefitDiagnosisSchema()))
      .optional(),
    procedure: z
      .array(z.lazy(() => createExplanationOfBenefitProcedureSchema()))
      .optional(),
    precedence: primitives.createPositiveIntSchema().optional(),
    _precedence: z.lazy(() => createElementSchema()).optional(),
    insurance: z.array(
      z.lazy(() => createExplanationOfBenefitInsuranceSchema()),
    ),
    accident: z
      .lazy(() => createExplanationOfBenefitAccidentSchema())
      .optional(),
    item: z
      .array(z.lazy(() => createExplanationOfBenefitItemSchema()))
      .optional(),
    addItem: z
      .array(z.lazy(() => createExplanationOfBenefitAddItemSchema()))
      .optional(),
    adjudication: z
      .array(z.lazy(() => createExplanationOfBenefitAdjudicationSchema()))
      .optional(),
    total: z
      .array(z.lazy(() => createExplanationOfBenefitTotalSchema()))
      .optional(),
    payment: z.lazy(() => createExplanationOfBenefitPaymentSchema()).optional(),
    formCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    form: z.lazy(() => createAttachmentSchema()).optional(),
    processNote: z
      .array(z.lazy(() => createExplanationOfBenefitProcessNoteSchema()))
      .optional(),
    benefitPeriod: z.lazy(() => createPeriodSchema()).optional(),
    benefitBalance: z
      .array(z.lazy(() => createExplanationOfBenefitBenefitBalanceSchema()))
      .optional(),
  });

  return baseSchema;
}
