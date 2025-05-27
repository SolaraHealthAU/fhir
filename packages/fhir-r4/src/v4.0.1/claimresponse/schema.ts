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
import { createClaimResponseItemSchema } from "../claimresponseitem/schema";
import { createClaimResponseAddItemSchema } from "../claimresponseadditem/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseTotalSchema } from "../claimresponsetotal/schema";
import { createClaimResponsePaymentSchema } from "../claimresponsepayment/schema";
import { createClaimResponseProcessNoteSchema } from "../claimresponseprocessnote/schema";
import { createClaimResponseInsuranceSchema } from "../claimresponseinsurance/schema";
import { createClaimResponseErrorSchema } from "../claimresponseerror/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseSchema() {
  const baseSchema: z.ZodType<types.ClaimResponse> = z.object({
    resourceType: z.literal("ClaimResponse"),
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    subType: z.lazy(() => createCodeableConceptSchema()).optional(),
    use: primitives.createCodeSchema(),
    _use: z.lazy(() => createElementSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    insurer: z.lazy(() => createReferenceSchema()),
    requestor: z.lazy(() => createReferenceSchema()).optional(),
    request: z.lazy(() => createReferenceSchema()).optional(),
    outcome: primitives.createCodeSchema(),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createStringSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
    preAuthRef: primitives.createStringSchema().optional(),
    _preAuthRef: z.lazy(() => createElementSchema()).optional(),
    preAuthPeriod: z.lazy(() => createPeriodSchema()).optional(),
    payeeType: z.lazy(() => createCodeableConceptSchema()).optional(),
    item: z.array(z.lazy(() => createClaimResponseItemSchema())).optional(),
    addItem: z
      .array(z.lazy(() => createClaimResponseAddItemSchema()))
      .optional(),
    adjudication: z
      .array(z.lazy(() => createClaimResponseAdjudicationSchema()))
      .optional(),
    total: z.array(z.lazy(() => createClaimResponseTotalSchema())).optional(),
    payment: z.lazy(() => createClaimResponsePaymentSchema()).optional(),
    fundsReserve: z.lazy(() => createCodeableConceptSchema()).optional(),
    formCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    form: z.lazy(() => createAttachmentSchema()).optional(),
    processNote: z
      .array(z.lazy(() => createClaimResponseProcessNoteSchema()))
      .optional(),
    communicationRequest: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    insurance: z
      .array(z.lazy(() => createClaimResponseInsuranceSchema()))
      .optional(),
    error: z.array(z.lazy(() => createClaimResponseErrorSchema())).optional(),
  });

  return baseSchema;
}
