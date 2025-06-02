import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema, ZodNever } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageSchema<
  C extends z.ZodTypeAny = z.ZodUnknown,
>(options?: { contained?: C; allowNested?: boolean }) {
  const contained =
    options?.allowNested === false
      ? ZodNever
      : (options?.contained ?? createResourceListSchema());

  return getCachedSchema("Coverage", [contained], () => {
    const baseSchema: z.ZodType<types.Coverage> = z.strictObject({
      resourceType: z.literal("Coverage"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(contained).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      policyHolder: createReferenceSchema().optional(),
      subscriber: createReferenceSchema().optional(),
      subscriberId: primitives.getStringSchema().optional(),
      _subscriberId: createElementSchema().optional(),
      beneficiary: createReferenceSchema(),
      dependent: primitives.getStringSchema().optional(),
      _dependent: createElementSchema().optional(),
      relationship: createCodeableConceptSchema().optional(),
      period: createPeriodSchema().optional(),
      payor: z.array(createReferenceSchema()),
      class: z.array(createCoverageClassSchema()).optional(),
      order: primitives.getPositiveIntSchema().optional(),
      _order: createElementSchema().optional(),
      network: primitives.getStringSchema().optional(),
      _network: createElementSchema().optional(),
      costToBeneficiary: z
        .array(createCoverageCostToBeneficiarySchema())
        .optional(),
      subrogation: primitives.getBooleanSchema().optional(),
      _subrogation: createElementSchema().optional(),
      contract: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createCoverageClassSchema() {
  return getCachedSchema("CoverageClass", [], () => {
    const baseSchema: z.ZodType<types.CoverageClass> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema(),
      value: primitives.getStringSchema(),
      _value: createElementSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
    });

    return baseSchema;
  });
}

export function createCoverageCostToBeneficiarySchema() {
  return getCachedSchema("CoverageCostToBeneficiary", [], () => {
    const baseSchema: z.ZodType<types.CoverageCostToBeneficiary> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        valueQuantity: createQuantitySchema().optional(),
        valueMoney: createMoneySchema().optional(),
        exception: z.array(createCoverageExceptionSchema()).optional(),
      });

    return baseSchema;
  });
}

export function createCoverageExceptionSchema() {
  return getCachedSchema("CoverageException", [], () => {
    const baseSchema: z.ZodType<types.CoverageException> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}

export function createCoverageEligibilityRequestSchema<
  C extends z.ZodTypeAny = z.ZodUnknown,
>(options?: { contained?: C; allowNested?: boolean }) {
  const contained =
    options?.allowNested === false
      ? ZodNever
      : (options?.contained ?? createResourceListSchema());

  return getCachedSchema("CoverageEligibilityRequest", [contained], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequest> =
      z.strictObject({
        resourceType: z.literal("CoverageEligibilityRequest"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(contained).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        status: primitives.getCodeSchema(),
        _status: createElementSchema().optional(),
        priority: createCodeableConceptSchema().optional(),
        purpose: z
          .enum(["auth-requirements", "benefits", "discovery", "validation"])
          .array(),
        _purpose: z.array(createElementSchema()).optional(),
        patient: createReferenceSchema(),
        servicedDate: z.string().optional(),
        _servicedDate: createElementSchema().optional(),
        servicedPeriod: createPeriodSchema().optional(),
        created: primitives.getDateTimeSchema(),
        _created: createElementSchema().optional(),
        enterer: createReferenceSchema().optional(),
        provider: createReferenceSchema().optional(),
        insurer: createReferenceSchema(),
        facility: createReferenceSchema().optional(),
        supportingInfo: z
          .array(createCoverageEligibilityRequestSupportingInfoSchema())
          .optional(),
        insurance: z
          .array(createCoverageEligibilityRequestInsuranceSchema())
          .optional(),
        item: z.array(createCoverageEligibilityRequestItemSchema()).optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityRequestSupportingInfoSchema() {
  return getCachedSchema("CoverageEligibilityRequestSupportingInfo", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestSupportingInfo> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        sequence: primitives.getPositiveIntSchema(),
        _sequence: createElementSchema().optional(),
        information: createReferenceSchema(),
        appliesToAll: primitives.getBooleanSchema().optional(),
        _appliesToAll: createElementSchema().optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityRequestInsuranceSchema() {
  return getCachedSchema("CoverageEligibilityRequestInsurance", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestInsurance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        focal: primitives.getBooleanSchema().optional(),
        _focal: createElementSchema().optional(),
        coverage: createReferenceSchema(),
        businessArrangement: primitives.getStringSchema().optional(),
        _businessArrangement: createElementSchema().optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityRequestItemSchema() {
  return getCachedSchema("CoverageEligibilityRequestItem", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        supportingInfoSequence: z
          .array(primitives.getPositiveIntSchema())
          .optional(),
        _supportingInfoSequence: z.array(createElementSchema()).optional(),
        category: createCodeableConceptSchema().optional(),
        productOrService: createCodeableConceptSchema().optional(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        provider: createReferenceSchema().optional(),
        quantity: createQuantitySchema().optional(),
        unitPrice: createMoneySchema().optional(),
        facility: createReferenceSchema().optional(),
        diagnosis: z
          .array(createCoverageEligibilityRequestDiagnosisSchema())
          .optional(),
        detail: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityRequestDiagnosisSchema() {
  return getCachedSchema("CoverageEligibilityRequestDiagnosis", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestDiagnosis> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        diagnosisCodeableConcept: createCodeableConceptSchema().optional(),
        diagnosisReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityResponseSchema<
  C extends z.ZodTypeAny = z.ZodUnknown,
>(options?: { contained?: C; allowNested?: boolean }) {
  const contained =
    options?.allowNested === false
      ? ZodNever
      : (options?.contained ?? createResourceListSchema());

  return getCachedSchema("CoverageEligibilityResponse", [contained], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponse> =
      z.strictObject({
        resourceType: z.literal("CoverageEligibilityResponse"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(contained).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        status: primitives.getCodeSchema(),
        _status: createElementSchema().optional(),
        purpose: z
          .enum(["auth-requirements", "benefits", "discovery", "validation"])
          .array(),
        _purpose: z.array(createElementSchema()).optional(),
        patient: createReferenceSchema(),
        servicedDate: z.string().optional(),
        _servicedDate: createElementSchema().optional(),
        servicedPeriod: createPeriodSchema().optional(),
        created: primitives.getDateTimeSchema(),
        _created: createElementSchema().optional(),
        requestor: createReferenceSchema().optional(),
        request: createReferenceSchema(),
        outcome: z.enum(["queued", "complete", "error", "partial"]),
        _outcome: createElementSchema().optional(),
        disposition: primitives.getStringSchema().optional(),
        _disposition: createElementSchema().optional(),
        insurer: createReferenceSchema(),
        insurance: z
          .array(createCoverageEligibilityResponseInsuranceSchema())
          .optional(),
        preAuthRef: primitives.getStringSchema().optional(),
        _preAuthRef: createElementSchema().optional(),
        form: createCodeableConceptSchema().optional(),
        error: z
          .array(createCoverageEligibilityResponseErrorSchema())
          .optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityResponseInsuranceSchema() {
  return getCachedSchema("CoverageEligibilityResponseInsurance", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponseInsurance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        coverage: createReferenceSchema(),
        inforce: primitives.getBooleanSchema().optional(),
        _inforce: createElementSchema().optional(),
        benefitPeriod: createPeriodSchema().optional(),
        item: z.array(createCoverageEligibilityResponseItemSchema()).optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityResponseItemSchema() {
  return getCachedSchema("CoverageEligibilityResponseItem", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponseItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        category: createCodeableConceptSchema().optional(),
        productOrService: createCodeableConceptSchema().optional(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        provider: createReferenceSchema().optional(),
        excluded: primitives.getBooleanSchema().optional(),
        _excluded: createElementSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        network: createCodeableConceptSchema().optional(),
        unit: createCodeableConceptSchema().optional(),
        term: createCodeableConceptSchema().optional(),
        benefit: z
          .array(createCoverageEligibilityResponseBenefitSchema())
          .optional(),
        authorizationRequired: primitives.getBooleanSchema().optional(),
        _authorizationRequired: createElementSchema().optional(),
        authorizationSupporting: z
          .array(createCodeableConceptSchema())
          .optional(),
        authorizationUrl: primitives.getUriSchema().optional(),
        _authorizationUrl: createElementSchema().optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityResponseBenefitSchema() {
  return getCachedSchema("CoverageEligibilityResponseBenefit", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponseBenefit> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema(),
        allowedUnsignedInt: z.number().optional(),
        _allowedUnsignedInt: createElementSchema().optional(),
        allowedString: z.string().optional(),
        _allowedString: createElementSchema().optional(),
        allowedMoney: createMoneySchema().optional(),
        usedUnsignedInt: z.number().optional(),
        _usedUnsignedInt: createElementSchema().optional(),
        usedString: z.string().optional(),
        _usedString: createElementSchema().optional(),
        usedMoney: createMoneySchema().optional(),
      });

    return baseSchema;
  });
}

export function createCoverageEligibilityResponseErrorSchema() {
  return getCachedSchema("CoverageEligibilityResponseError", [], () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponseError> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: createCodeableConceptSchema(),
      });

    return baseSchema;
  });
}
