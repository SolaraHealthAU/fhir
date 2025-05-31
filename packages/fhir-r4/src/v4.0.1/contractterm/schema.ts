import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ContractTerm", () => {
    const baseSchema: z.ZodType<types.ContractTerm> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: createIdentifierSchema().optional(),
      issued: primitives.getDateTimeSchema().optional(),
      _issued: createElementSchema().optional(),
      applies: createPeriodSchema().optional(),
      topicCodeableConcept: createCodeableConceptSchema().optional(),
      topicReference: createReferenceSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      subType: createCodeableConceptSchema().optional(),
      text: primitives.getStringSchema().optional(),
      _text: createElementSchema().optional(),
      securityLabel: z.array(createContractSecurityLabelSchema()).optional(),
      offer: createContractOfferSchema(),
      asset: z.array(createContractAssetSchema()).optional(),
      action: z.array(createContractActionSchema()).optional(),
      group: z.array(createContractTermSchema()).optional(),
    });

    return baseSchema;
  });
}
