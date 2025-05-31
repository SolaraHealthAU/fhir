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
  createMoneySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createInvoiceParticipantSchema } from "../invoiceparticipant/schema";
import { createInvoiceLineItemSchema } from "../invoicelineitem/schema";
import { createInvoicePriceComponentSchema } from "../invoicepricecomponent/schema";

/* Generated from FHIR JSON Schema */

export function createInvoiceSchema() {
  return getCachedSchema("Invoice", () => {
    const baseSchema: z.ZodType<types.Invoice> = z.strictObject({
      resourceType: z.literal("Invoice"),
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
        "issued",
        "balanced",
        "cancelled",
        "entered-in-error",
      ]),
      _status: createElementSchema().optional(),
      cancelledReason: primitives.getStringSchema().optional(),
      _cancelledReason: createElementSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      recipient: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      participant: z.array(createInvoiceParticipantSchema()).optional(),
      issuer: createReferenceSchema().optional(),
      account: createReferenceSchema().optional(),
      lineItem: z.array(createInvoiceLineItemSchema()).optional(),
      totalPriceComponent: z
        .array(createInvoicePriceComponentSchema())
        .optional(),
      totalNet: createMoneySchema().optional(),
      totalGross: createMoneySchema().optional(),
      paymentTerms: primitives.getMarkdownSchema().optional(),
      _paymentTerms: createElementSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
