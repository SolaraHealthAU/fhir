import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInvoicePriceComponentSchema() {
  const baseSchema: z.ZodType<types.InvoicePriceComponent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z
      .enum([
        "base",
        "surcharge",
        "deduction",
        "discount",
        "tax",
        "informational",
      ])
      .optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    amount: z.lazy(() => createMoneySchema()).optional(),
  });

  return baseSchema;
}
