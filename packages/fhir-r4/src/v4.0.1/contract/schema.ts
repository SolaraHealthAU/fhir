import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.Contract> = z.object({
    resourceType: z.literal("Contract"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    legalState: z.lazy(() => createCodeableConceptSchema()).optional(),
    instantiatesCanonical: z.lazy(() => createReferenceSchema()).optional(),
    instantiatesUri: primitives.createUriSchema().optional(),
    _instantiatesUri: z.lazy(() => createElementSchema()).optional(),
    contentDerivative: z.lazy(() => createCodeableConceptSchema()).optional(),
    issued: primitives.createDateTimeSchema().optional(),
    _issued: z.lazy(() => createElementSchema()).optional(),
    applies: z.lazy(() => createPeriodSchema()).optional(),
    expirationType: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    authority: z.array(z.lazy(() => createReferenceSchema())).optional(),
    domain: z.array(z.lazy(() => createReferenceSchema())).optional(),
    site: z.array(z.lazy(() => createReferenceSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    subtitle: primitives.createStringSchema().optional(),
    _subtitle: z.lazy(() => createElementSchema()).optional(),
    alias: z.array(primitives.createStringSchema()).optional(),
    _alias: z.array(z.lazy(() => createElementSchema())).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    scope: z.lazy(() => createCodeableConceptSchema()).optional(),
    topicCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    topicReference: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    subType: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    contentDefinition: z
      .lazy(() => createContractContentDefinitionSchema())
      .optional(),
    term: z.array(z.lazy(() => createContractTermSchema())).optional(),
    supportingInfo: z.array(z.lazy(() => createReferenceSchema())).optional(),
    relevantHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
    signer: z.array(z.lazy(() => createContractSignerSchema())).optional(),
    friendly: z.array(z.lazy(() => createContractFriendlySchema())).optional(),
    legal: z.array(z.lazy(() => createContractLegalSchema())).optional(),
    rule: z.array(z.lazy(() => createContractRuleSchema())).optional(),
    legallyBindingAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    legallyBindingReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
