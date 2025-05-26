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
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createConsentPolicySchema } from "../consentpolicy/schema";
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
    status: z.enum([
      "draft",
      "proposed",
      "active",
      "rejected",
      "inactive",
      "entered-in-error",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    scope: z.lazy(() => createCodeableConceptSchema()),
    category: z.array(z.lazy(() => createCodeableConceptSchema())),
    patient: z.lazy(() => createReferenceSchema()).optional(),
    dateTime: primitives.createDateTimeSchema().optional(),
    _dateTime: z.lazy(() => createElementSchema()).optional(),
    performer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    organization: z.array(z.lazy(() => createReferenceSchema())).optional(),
    sourceAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    sourceReference: z.lazy(() => createReferenceSchema()).optional(),
    policy: z.array(z.lazy(() => createConsentPolicySchema())).optional(),
    policyRule: z.lazy(() => createCodeableConceptSchema()).optional(),
    verification: z
      .array(z.lazy(() => createConsentVerificationSchema()))
      .optional(),
    provision: z.lazy(() => createConsentProvisionSchema()).optional(),
  });

  return baseSchema;
}
