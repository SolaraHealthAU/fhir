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
  return getCachedSchema("ClaimResponse", () => {
    const baseSchema: z.ZodType<types.ClaimResponse> = z.strictObject({
      resourceType: z.literal("ClaimResponse"),
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
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema(),
      subType: createCodeableConceptSchema().optional(),
      use: primitives.getCodeSchema(),
      _use: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema(),
      created: primitives.getDateTimeSchema(),
      _created: z.lazy(() => createElementSchema()).optional(),
      insurer: createReferenceSchema(),
      requestor: createReferenceSchema().optional(),
      request: createReferenceSchema().optional(),
      outcome: primitives.getCodeSchema(),
      _outcome: z.lazy(() => createElementSchema()).optional(),
      disposition: primitives.getStringSchema().optional(),
      _disposition: z.lazy(() => createElementSchema()).optional(),
      preAuthRef: primitives.getStringSchema().optional(),
      _preAuthRef: z.lazy(() => createElementSchema()).optional(),
      preAuthPeriod: createPeriodSchema().optional(),
      payeeType: createCodeableConceptSchema().optional(),
      item: z.array(createClaimResponseItemSchema()).optional(),
      addItem: z.array(createClaimResponseAddItemSchema()).optional(),
      adjudication: z.array(createClaimResponseAdjudicationSchema()).optional(),
      total: z.array(createClaimResponseTotalSchema()).optional(),
      payment: createClaimResponsePaymentSchema().optional(),
      fundsReserve: createCodeableConceptSchema().optional(),
      formCode: createCodeableConceptSchema().optional(),
      form: createAttachmentSchema().optional(),
      processNote: z.array(createClaimResponseProcessNoteSchema()).optional(),
      communicationRequest: z.array(createReferenceSchema()).optional(),
      insurance: z.array(createClaimResponseInsuranceSchema()).optional(),
      error: z.array(createClaimResponseErrorSchema()).optional(),
    });

    return baseSchema;
  });
}
