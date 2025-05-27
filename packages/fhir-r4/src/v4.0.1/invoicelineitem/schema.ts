import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createInvoicePriceComponentSchema } from "../invoicepricecomponent/schema";

/* Generated from FHIR JSON Schema */

export function createInvoiceLineItemSchema() {
  return getCachedSchema("InvoiceLineItem", () => {
    const baseSchema: z.ZodType<types.InvoiceLineItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      sequence: primitives.getPositiveIntSchema().optional(),
      _sequence: z.lazy(() => createElementSchema()).optional(),
      chargeItemReference: createReferenceSchema().optional(),
      chargeItemCodeableConcept: createCodeableConceptSchema().optional(),
      priceComponent: z.array(createInvoicePriceComponentSchema()).optional(),
    });

    return baseSchema;
  });
}
