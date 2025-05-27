import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMonetaryComponentSchema } from "../monetarycomponent/schema";

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
    servicedDate: z.string().optional(),
    _servicedDate: z.lazy(() => createElementSchema()).optional(),
    servicedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    chargeItemReference: z.lazy(() => createReferenceSchema()).optional(),
    chargeItemCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    priceComponent: z
      .array(z.lazy(() => createMonetaryComponentSchema()))
      .optional(),
  });

  return baseSchema;
}
