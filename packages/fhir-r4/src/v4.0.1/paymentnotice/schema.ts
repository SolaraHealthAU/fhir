import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("PaymentNotice", () => {
    const baseSchema: z.ZodType<types.PaymentNotice> = z.strictObject({
      resourceType: z.literal("PaymentNotice"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      request: createReferenceSchema().optional(),
      response: createReferenceSchema().optional(),
      created: primitives.getDateTimeSchema(),
      _created: z.lazy(() => createElementSchema()).optional(),
      provider: createReferenceSchema().optional(),
      payment: createReferenceSchema(),
      paymentDate: primitives.getDateSchema().optional(),
      _paymentDate: z.lazy(() => createElementSchema()).optional(),
      payee: createReferenceSchema().optional(),
      recipient: createReferenceSchema(),
      amount: createMoneySchema(),
      paymentStatus: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
