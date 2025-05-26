import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createMoneySchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createPaymentNoticeSchema() {
  const baseSchema: z.ZodType<types.PaymentNotice> = z.object({
    resourceType: z.literal("PaymentNotice"),
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
    request: z.lazy(() => createReferenceSchema()).optional(),
    response: z.lazy(() => createReferenceSchema()).optional(),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    provider: z.lazy(() => createReferenceSchema()).optional(),
    payment: z.lazy(() => createReferenceSchema()),
    paymentDate: primitives.createDateSchema().optional(),
    _paymentDate: z.lazy(() => createElementSchema()).optional(),
    payee: z.lazy(() => createReferenceSchema()).optional(),
    recipient: z.lazy(() => createReferenceSchema()),
    amount: z.lazy(() => createMoneySchema()),
    paymentStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
