import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createPeriodSchema,
  createReferenceSchema,
  createMoneySchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPaymentReconciliationDetailSchema } from "../paymentreconciliationdetail/schema";
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    paymentIssuer: z.lazy(() => createReferenceSchema()).optional(),
    request: z.lazy(() => createReferenceSchema()).optional(),
    requestor: z.lazy(() => createReferenceSchema()).optional(),
    outcome: z.enum(["queued", "complete", "error", "partial"]).optional(),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createStringSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
    paymentDate: primitives.createDateSchema(),
    _paymentDate: z.lazy(() => createElementSchema()).optional(),
    paymentAmount: z.lazy(() => createMoneySchema()),
    paymentIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    detail: z
      .array(z.lazy(() => createPaymentReconciliationDetailSchema()))
      .optional(),
    formCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    processNote: z
      .array(z.lazy(() => createPaymentReconciliationProcessNoteSchema()))
      .optional(),
  });

  return baseSchema;
}
