import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createContractPartySchema } from "../contractparty/schema";
import { createContractAnswerSchema } from "../contractanswer/schema";

/* Generated from FHIR JSON Schema */

export function createContractOfferSchema() {
  const baseSchema: z.ZodType<types.ContractOffer> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    party: z.array(z.lazy(() => createContractPartySchema())).optional(),
    topic: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    decision: z.lazy(() => createCodeableConceptSchema()).optional(),
    decisionMode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    answer: z.array(z.lazy(() => createContractAnswerSchema())).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
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
