import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ExplanationOfBenefit", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefit> = z.strictObject({
      resourceType: z.literal("ExplanationOfBenefit"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema(),
      subType: createCodeableConceptSchema().optional(),
      use: primitives.getCodeSchema(),
      _use: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema(),
      billablePeriod: createPeriodSchema().optional(),
      created: primitives.getDateTimeSchema(),
      _created: z.lazy(() => createElementSchema()).optional(),
      enterer: createReferenceSchema().optional(),
      insurer: createReferenceSchema(),
      provider: createReferenceSchema(),
      priority: createCodeableConceptSchema().optional(),
      fundsReserveRequested: createCodeableConceptSchema().optional(),
      fundsReserve: createCodeableConceptSchema().optional(),
      related: z.array(createExplanationOfBenefitRelatedSchema()).optional(),
      prescription: createReferenceSchema().optional(),
      originalPrescription: createReferenceSchema().optional(),
      payee: createExplanationOfBenefitPayeeSchema().optional(),
      referral: createReferenceSchema().optional(),
      facility: createReferenceSchema().optional(),
      claim: createReferenceSchema().optional(),
      claimResponse: createReferenceSchema().optional(),
      outcome: primitives.getCodeSchema(),
      _outcome: z.lazy(() => createElementSchema()).optional(),
      disposition: primitives.getStringSchema().optional(),
      _disposition: z.lazy(() => createElementSchema()).optional(),
      preAuthRef: z.array(primitives.getStringSchema()).optional(),
      _preAuthRef: z.array(z.lazy(() => createElementSchema())).optional(),
      preAuthRefPeriod: z.array(createPeriodSchema()).optional(),
      careTeam: z.array(createExplanationOfBenefitCareTeamSchema()).optional(),
      supportingInfo: z
        .array(createExplanationOfBenefitSupportingInfoSchema())
        .optional(),
      diagnosis: z
        .array(createExplanationOfBenefitDiagnosisSchema())
        .optional(),
      procedure: z
        .array(createExplanationOfBenefitProcedureSchema())
        .optional(),
      precedence: primitives.getPositiveIntSchema().optional(),
      _precedence: z.lazy(() => createElementSchema()).optional(),
      insurance: z.array(createExplanationOfBenefitInsuranceSchema()),
      accident: createExplanationOfBenefitAccidentSchema().optional(),
      item: z.array(createExplanationOfBenefitItemSchema()).optional(),
      addItem: z.array(createExplanationOfBenefitAddItemSchema()).optional(),
      adjudication: z
        .array(createExplanationOfBenefitAdjudicationSchema())
        .optional(),
      total: z.array(createExplanationOfBenefitTotalSchema()).optional(),
      payment: createExplanationOfBenefitPaymentSchema().optional(),
      formCode: createCodeableConceptSchema().optional(),
      form: createAttachmentSchema().optional(),
      processNote: z
        .array(createExplanationOfBenefitProcessNoteSchema())
        .optional(),
      benefitPeriod: createPeriodSchema().optional(),
      benefitBalance: z
        .array(createExplanationOfBenefitBenefitBalanceSchema())
        .optional(),
    });

    return baseSchema;
  });
}
