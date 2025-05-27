import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
  createMoneySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPaymentReconciliationAllocationSchema } from "../paymentreconciliationallocation/schema";
import { createPaymentReconciliationProcessNoteSchema } from "../paymentreconciliationprocessnote/schema";

/* Generated from FHIR JSON Schema */

export function createPaymentReconciliationSchema() {
  const baseSchema: z.ZodType<types.PaymentReconciliation> = z.object({
    resourceType: z.literal("PaymentReconciliation"),
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
    type: z.lazy(() => createCodeableConceptSchema()),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    kind: z.lazy(() => createCodeableConceptSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    created: primitives.createDateTimeSchema().optional(),
    _created: z.lazy(() => createElementSchema()).optional(),
    enterer: z.lazy(() => createReferenceSchema()).optional(),
    issuerType: z.lazy(() => createCodeableConceptSchema()).optional(),
    paymentIssuer: z.lazy(() => createReferenceSchema()).optional(),
    request: z.lazy(() => createReferenceSchema()).optional(),
    requestor: z.lazy(() => createReferenceSchema()).optional(),
    outcome: primitives.createCodeSchema().optional(),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createStringSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    cardBrand: primitives.createStringSchema().optional(),
    _cardBrand: z.lazy(() => createElementSchema()).optional(),
    accountNumber: primitives.createStringSchema().optional(),
    _accountNumber: z.lazy(() => createElementSchema()).optional(),
    expirationDate: primitives.createDateSchema().optional(),
    _expirationDate: z.lazy(() => createElementSchema()).optional(),
    processor: primitives.createStringSchema().optional(),
    _processor: z.lazy(() => createElementSchema()).optional(),
    referenceNumber: primitives.createStringSchema().optional(),
    _referenceNumber: z.lazy(() => createElementSchema()).optional(),
    authorization: primitives.createStringSchema().optional(),
    _authorization: z.lazy(() => createElementSchema()).optional(),
    tenderedAmount: z.lazy(() => createMoneySchema()).optional(),
    returnedAmount: z.lazy(() => createMoneySchema()).optional(),
    amount: z.lazy(() => createMoneySchema()),
    paymentIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    allocation: z
      .array(z.lazy(() => createPaymentReconciliationAllocationSchema()))
      .optional(),
    formCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    processNote: z
      .array(z.lazy(() => createPaymentReconciliationProcessNoteSchema()))
      .optional(),
  });

  return baseSchema;
}
