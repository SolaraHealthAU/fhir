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
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createConsentPolicySchema } from "../consentpolicy/schema";
import { createConsentVerificationSchema } from "../consentverification/schema";
import { createConsentProvisionSchema } from "../consentprovision/schema";

/* Generated from FHIR JSON Schema */

export function createConsentSchema() {
  return getCachedSchema("Consent", () => {
    const baseSchema: z.ZodType<types.Consent> = z.strictObject({
      resourceType: z.literal("Consent"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: z.enum([
        "draft",
        "proposed",
        "active",
        "rejected",
        "inactive",
        "entered-in-error",
      ]),
      _status: createElementSchema().optional(),
      scope: createCodeableConceptSchema(),
      category: z.array(createCodeableConceptSchema()),
      patient: createReferenceSchema().optional(),
      dateTime: primitives.getDateTimeSchema().optional(),
      _dateTime: createElementSchema().optional(),
      performer: z.array(createReferenceSchema()).optional(),
      organization: z.array(createReferenceSchema()).optional(),
      sourceAttachment: createAttachmentSchema().optional(),
      sourceReference: createReferenceSchema().optional(),
      policy: z.array(createConsentPolicySchema()).optional(),
      policyRule: createCodeableConceptSchema().optional(),
      verification: z.array(createConsentVerificationSchema()).optional(),
      provision: createConsentProvisionSchema().optional(),
    });

    return baseSchema;
  });
}
