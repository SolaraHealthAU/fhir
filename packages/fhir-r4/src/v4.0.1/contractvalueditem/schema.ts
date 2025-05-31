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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      entityCodeableConcept: createCodeableConceptSchema().optional(),
      entityReference: createReferenceSchema().optional(),
      identifier: createIdentifierSchema().optional(),
      effectiveTime: primitives.getDateTimeSchema().optional(),
      _effectiveTime: createElementSchema().optional(),
      quantity: createQuantitySchema().optional(),
      unitPrice: createMoneySchema().optional(),
      factor: primitives.getDecimalSchema().optional(),
      _factor: createElementSchema().optional(),
      points: primitives.getDecimalSchema().optional(),
      _points: createElementSchema().optional(),
      net: createMoneySchema().optional(),
      payment: primitives.getStringSchema().optional(),
      _payment: createElementSchema().optional(),
      paymentDate: primitives.getDateTimeSchema().optional(),
      _paymentDate: createElementSchema().optional(),
      responsible: createReferenceSchema().optional(),
      recipient: createReferenceSchema().optional(),
      linkId: z.array(primitives.getStringSchema()).optional(),
      _linkId: z.array(createElementSchema()).optional(),
      securityLabelNumber: z
        .array(primitives.getUnsignedIntSchema())
        .optional(),
      _securityLabelNumber: z.array(createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
