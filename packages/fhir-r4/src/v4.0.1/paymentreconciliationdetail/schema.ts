import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPaymentReconciliationDetailSchema() {
  const baseSchema: z.ZodType<types.PaymentReconciliationDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    predecessor: z.lazy(() => createIdentifierSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    request: z.lazy(() => createReferenceSchema()).optional(),
    submitter: z.lazy(() => createReferenceSchema()).optional(),
    response: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    responsible: z.lazy(() => createReferenceSchema()).optional(),
    payee: z.lazy(() => createReferenceSchema()).optional(),
    amount: z.lazy(() => createMoneySchema()).optional(),
  });

  return baseSchema;
}
