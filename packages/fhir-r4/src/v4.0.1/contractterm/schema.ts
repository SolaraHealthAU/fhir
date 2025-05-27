import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createContractSecurityLabelSchema } from "../contractsecuritylabel/schema";
import { createContractOfferSchema } from "../contractoffer/schema";
import { createContractAssetSchema } from "../contractasset/schema";
import { createContractActionSchema } from "../contractaction/schema";

/* Generated from FHIR JSON Schema */

export function createContractTermSchema() {
  const baseSchema: z.ZodType<types.ContractTerm> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    issued: primitives.createDateTimeSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    applies: z.lazy(() => createPeriodSchema()).optional(),
    topicCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    topicReference: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    subType: z.lazy(() => createCodeableConceptSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    securityLabel: z
      .array(z.lazy(() => createContractSecurityLabelSchema()))
      .optional(),
    offer: z.lazy(() => createContractOfferSchema()),
    asset: z.array(z.lazy(() => createContractAssetSchema())).optional(),
    action: z.array(z.lazy(() => createContractActionSchema())).optional(),
    group: z.array(z.lazy(() => createContractTermSchema())).optional(),
  });

  return baseSchema;
}
