import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPaymentReconciliationAllocationSchema() {
  const baseSchema: z.ZodType<types.PaymentReconciliationAllocation> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      predecessor: z.lazy(() => createIdentifierSchema()).optional(),
      target: z.lazy(() => createReferenceSchema()).optional(),
      targetItemString: z.string().optional(),
      _targetItemString: z.lazy(() => createElementSchema()).optional(),
      targetItemIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      targetItemPositiveInt: z.number().optional(),
      _targetItemPositiveInt: z.lazy(() => createElementSchema()).optional(),
      encounter: z.lazy(() => createReferenceSchema()).optional(),
      account: z.lazy(() => createReferenceSchema()).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      submitter: z.lazy(() => createReferenceSchema()).optional(),
      response: z.lazy(() => createReferenceSchema()).optional(),
      date: primitives.createDateSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      responsible: z.lazy(() => createReferenceSchema()).optional(),
      payee: z.lazy(() => createReferenceSchema()).optional(),
      amount: z.lazy(() => createMoneySchema()).optional(),
    },
  );

  return baseSchema;
}
