import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("PaymentReconciliationDetail", () => {
    const baseSchema: z.ZodType<types.PaymentReconciliationDetail> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: createIdentifierSchema().optional(),
        predecessor: createIdentifierSchema().optional(),
        type: createCodeableConceptSchema(),
        request: createReferenceSchema().optional(),
        submitter: createReferenceSchema().optional(),
        response: createReferenceSchema().optional(),
        date: primitives.getDateSchema().optional(),
        _date: createElementSchema().optional(),
        responsible: createReferenceSchema().optional(),
        payee: createReferenceSchema().optional(),
        amount: createMoneySchema().optional(),
      });

    return baseSchema;
  });
}
