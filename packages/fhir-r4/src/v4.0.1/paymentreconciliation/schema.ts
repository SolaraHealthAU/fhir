import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("PaymentReconciliation", () => {
    const baseSchema: z.ZodType<types.PaymentReconciliation> = z.strictObject({
      resourceType: z.literal("PaymentReconciliation"),
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
      period: createPeriodSchema().optional(),
      created: primitives.getDateTimeSchema(),
      _created: z.lazy(() => createElementSchema()).optional(),
      paymentIssuer: createReferenceSchema().optional(),
      request: createReferenceSchema().optional(),
      requestor: createReferenceSchema().optional(),
      outcome: z.enum(["queued", "complete", "error", "partial"]).optional(),
      _outcome: z.lazy(() => createElementSchema()).optional(),
      disposition: primitives.getStringSchema().optional(),
      _disposition: z.lazy(() => createElementSchema()).optional(),
      paymentDate: primitives.getDateSchema(),
      _paymentDate: z.lazy(() => createElementSchema()).optional(),
      paymentAmount: createMoneySchema(),
      paymentIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      detail: z.array(createPaymentReconciliationDetailSchema()).optional(),
      formCode: createCodeableConceptSchema().optional(),
      processNote: z
        .array(createPaymentReconciliationProcessNoteSchema())
        .optional(),
    });

    return baseSchema;
  });
}
