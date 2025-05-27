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
      url: primitives.getUriSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      status: primitives.getCodeSchema().optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      legalState: createCodeableConceptSchema().optional(),
      instantiatesCanonical: createReferenceSchema().optional(),
      instantiatesUri: primitives.getUriSchema().optional(),
      _instantiatesUri: z.lazy(() => createElementSchema()).optional(),
      contentDerivative: createCodeableConceptSchema().optional(),
      issued: primitives.getDateTimeSchema().optional(),
      _issued: z.lazy(() => createElementSchema()).optional(),
      applies: createPeriodSchema().optional(),
      expirationType: createCodeableConceptSchema().optional(),
      subject: z.array(createReferenceSchema()).optional(),
      authority: z.array(createReferenceSchema()).optional(),
      domain: z.array(createReferenceSchema()).optional(),
      site: z.array(createReferenceSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      subtitle: primitives.getStringSchema().optional(),
      _subtitle: z.lazy(() => createElementSchema()).optional(),
      alias: z.array(primitives.getStringSchema()).optional(),
      _alias: z.array(z.lazy(() => createElementSchema())).optional(),
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
