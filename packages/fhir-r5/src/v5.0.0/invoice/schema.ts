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
  createMoneySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createInvoiceParticipantSchema } from "../invoiceparticipant/schema";
import { createInvoiceLineItemSchema } from "../invoicelineitem/schema";
import { createMonetaryComponentSchema } from "../monetarycomponent/schema";

/* Generated from FHIR JSON Schema */

export function createInvoiceSchema() {
  const baseSchema: z.ZodType<types.Invoice> = z.object({
    resourceType: z.literal("Invoice"),
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
    cancelledReason: primitives.createStringSchema().optional(),
    _cancelledReason: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    recipient: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    creation: primitives.createDateTimeSchema().optional(),
    _creation: z.lazy(() => createElementSchema()).optional(),
    periodDate: z.string().optional(),
    _periodDate: z.lazy(() => createElementSchema()).optional(),
    periodPeriod: z.lazy(() => createPeriodSchema()).optional(),
    participant: z
      .array(z.lazy(() => createInvoiceParticipantSchema()))
      .optional(),
    issuer: z.lazy(() => createReferenceSchema()).optional(),
    account: z.lazy(() => createReferenceSchema()).optional(),
    lineItem: z.array(z.lazy(() => createInvoiceLineItemSchema())).optional(),
    totalPriceComponent: z
      .array(z.lazy(() => createMonetaryComponentSchema()))
      .optional(),
    totalNet: z.lazy(() => createMoneySchema()).optional(),
    totalGross: z.lazy(() => createMoneySchema()).optional(),
    paymentTerms: primitives.createMarkdownSchema().optional(),
    _paymentTerms: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
