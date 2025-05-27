import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createIdentifierSchema,
  createElementSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractValuedItemSchema() {
  return getCachedSchema("ContractValuedItem", () => {
    const baseSchema: z.ZodType<types.ContractValuedItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      entityCodeableConcept: createCodeableConceptSchema().optional(),
      entityReference: createReferenceSchema().optional(),
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      effectiveTime: primitives.getDateTimeSchema().optional(),
      _effectiveTime: z.lazy(() => createElementSchema()).optional(),
      quantity: createQuantitySchema().optional(),
      unitPrice: createMoneySchema().optional(),
      factor: primitives.getDecimalSchema().optional(),
      _factor: z.lazy(() => createElementSchema()).optional(),
      points: primitives.getDecimalSchema().optional(),
      _points: z.lazy(() => createElementSchema()).optional(),
      net: createMoneySchema().optional(),
      payment: primitives.getStringSchema().optional(),
      _payment: z.lazy(() => createElementSchema()).optional(),
      paymentDate: primitives.getDateTimeSchema().optional(),
      _paymentDate: z.lazy(() => createElementSchema()).optional(),
      responsible: createReferenceSchema().optional(),
      recipient: createReferenceSchema().optional(),
      linkId: z.array(primitives.getStringSchema()).optional(),
      _linkId: z.array(z.lazy(() => createElementSchema())).optional(),
      securityLabelNumber: z
        .array(primitives.getUnsignedIntSchema())
        .optional(),
      _securityLabelNumber: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
    });

    return baseSchema;
  });
}
