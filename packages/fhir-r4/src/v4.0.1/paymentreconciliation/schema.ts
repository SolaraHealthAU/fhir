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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      period: createPeriodSchema().optional(),
      created: primitives.getDateTimeSchema(),
      _created: createElementSchema().optional(),
      paymentIssuer: createReferenceSchema().optional(),
      request: createReferenceSchema().optional(),
      requestor: createReferenceSchema().optional(),
      outcome: z.enum(["queued", "complete", "error", "partial"]).optional(),
      _outcome: createElementSchema().optional(),
      disposition: primitives.getStringSchema().optional(),
      _disposition: createElementSchema().optional(),
      paymentDate: primitives.getDateSchema(),
      _paymentDate: createElementSchema().optional(),
      paymentAmount: createMoneySchema(),
      paymentIdentifier: createIdentifierSchema().optional(),
      detail: z.array(createPaymentReconciliationDetailSchema()).optional(),
      formCode: createCodeableConceptSchema().optional(),
      processNote: z
        .array(createPaymentReconciliationProcessNoteSchema())
        .optional(),
    });

    return baseSchema;
  });
}
