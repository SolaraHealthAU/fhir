import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createContractContentDefinitionSchema } from "../contractcontentdefinition/schema";
import { createContractTermSchema } from "../contractterm/schema";
import { createContractSignerSchema } from "../contractsigner/schema";
import { createContractFriendlySchema } from "../contractfriendly/schema";
import { createContractLegalSchema } from "../contractlegal/schema";
import { createContractRuleSchema } from "../contractrule/schema";

/* Generated from FHIR JSON Schema */

export function createContractSchema() {
  return getCachedSchema("Contract", () => {
    const baseSchema: z.ZodType<types.Contract> = z.strictObject({
      resourceType: z.literal("Contract"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      status: primitives.getCodeSchema().optional(),
      _status: createElementSchema().optional(),
      legalState: createCodeableConceptSchema().optional(),
      instantiatesCanonical: createReferenceSchema().optional(),
      instantiatesUri: primitives.getUriSchema().optional(),
      _instantiatesUri: createElementSchema().optional(),
      contentDerivative: createCodeableConceptSchema().optional(),
      issued: primitives.getDateTimeSchema().optional(),
      _issued: createElementSchema().optional(),
      applies: createPeriodSchema().optional(),
      expirationType: createCodeableConceptSchema().optional(),
      subject: z.array(createReferenceSchema()).optional(),
      authority: z.array(createReferenceSchema()).optional(),
      domain: z.array(createReferenceSchema()).optional(),
      site: z.array(createReferenceSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      subtitle: primitives.getStringSchema().optional(),
      _subtitle: createElementSchema().optional(),
      alias: z.array(primitives.getStringSchema()).optional(),
      _alias: z.array(createElementSchema()).optional(),
      author: createReferenceSchema().optional(),
      scope: createCodeableConceptSchema().optional(),
      topicCodeableConcept: createCodeableConceptSchema().optional(),
      topicReference: createReferenceSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      subType: z.array(createCodeableConceptSchema()).optional(),
      contentDefinition: createContractContentDefinitionSchema().optional(),
      term: z.array(createContractTermSchema()).optional(),
      supportingInfo: z.array(createReferenceSchema()).optional(),
      relevantHistory: z.array(createReferenceSchema()).optional(),
      signer: z.array(createContractSignerSchema()).optional(),
      friendly: z.array(createContractFriendlySchema()).optional(),
      legal: z.array(createContractLegalSchema()).optional(),
      rule: z.array(createContractRuleSchema()).optional(),
      legallyBindingAttachment: createAttachmentSchema().optional(),
      legallyBindingReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
