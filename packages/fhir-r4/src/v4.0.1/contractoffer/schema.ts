import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ContractOffer", () => {
    const baseSchema: z.ZodType<types.ContractOffer> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      party: z.array(createContractPartySchema()).optional(),
      topic: createReferenceSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      decision: createCodeableConceptSchema().optional(),
      decisionMode: z.array(createCodeableConceptSchema()).optional(),
      answer: z.array(createContractAnswerSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
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
