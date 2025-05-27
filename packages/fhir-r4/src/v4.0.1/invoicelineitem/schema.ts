import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createInvoicePriceComponentSchema } from "../invoicepricecomponent/schema";

/* Generated from FHIR JSON Schema */

export function createInvoiceLineItemSchema() {
  const baseSchema: z.ZodType<types.InvoiceLineItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    chargeItemReference: z.lazy(() => createReferenceSchema()).optional(),
    chargeItemCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    priceComponent: z
      .array(z.lazy(() => createInvoicePriceComponentSchema()))
      .optional(),
  });

  return baseSchema;
}
