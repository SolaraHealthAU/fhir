import { z } from "zod/v4";
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
import { createConsentPolicyBasisSchema } from "../consentpolicybasis/schema";
import { createConsentVerificationSchema } from "../consentverification/schema";
import { createConsentProvisionSchema } from "../consentprovision/schema";

/* Generated from FHIR JSON Schema */

export function createConsentSchema() {
  const baseSchema: z.ZodType<types.Consent> = z.object({
    resourceType: z.literal("Consent"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    grantor: z.array(z.lazy(() => createReferenceSchema())).optional(),
    grantee: z.array(z.lazy(() => createReferenceSchema())).optional(),
    manager: z.array(z.lazy(() => createReferenceSchema())).optional(),
    controller: z.array(z.lazy(() => createReferenceSchema())).optional(),
    sourceAttachment: z
      .array(z.lazy(() => createAttachmentSchema()))
      .optional(),
    sourceReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    regulatoryBasis: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    policyBasis: z.lazy(() => createConsentPolicyBasisSchema()).optional(),
    policyText: z.array(z.lazy(() => createReferenceSchema())).optional(),
    verification: z
      .array(z.lazy(() => createConsentVerificationSchema()))
      .optional(),
    decision: primitives.createCodeSchema().optional(),
    _decision: z.lazy(() => createElementSchema()).optional(),
    provision: z.array(z.lazy(() => createConsentProvisionSchema())).optional(),
  });

  return baseSchema;
}
