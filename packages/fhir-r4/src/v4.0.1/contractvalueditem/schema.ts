import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.ContractValuedItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    entityCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    entityReference: z.lazy(() => createReferenceSchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    effectiveTime: primitives.createDateTimeSchema().optional(),
    _effectiveTime: z.lazy(() => createElementSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    points: primitives.createDecimalSchema().optional(),
    _points: z.lazy(() => createElementSchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    payment: primitives.createStringSchema().optional(),
    _payment: z.lazy(() => createElementSchema()).optional(),
    paymentDate: primitives.createDateTimeSchema().optional(),
    _paymentDate: z.lazy(() => createElementSchema()).optional(),
    responsible: z.lazy(() => createReferenceSchema()).optional(),
    recipient: z.lazy(() => createReferenceSchema()).optional(),
    linkId: z.array(primitives.createStringSchema()).optional(),
    _linkId: z.array(z.lazy(() => createElementSchema())).optional(),
    securityLabelNumber: z
      .array(primitives.createUnsignedIntSchema())
      .optional(),
    _securityLabelNumber: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
  });

  return baseSchema;
}
