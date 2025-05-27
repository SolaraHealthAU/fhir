import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCapabilityStatementSoftwareSchema } from "../capabilitystatementsoftware/schema";
import { createCapabilityStatementImplementationSchema } from "../capabilitystatementimplementation/schema";
import { createCapabilityStatementRestSchema } from "../capabilitystatementrest/schema";
import { createCapabilityStatementMessagingSchema } from "../capabilitystatementmessaging/schema";
import { createCapabilityStatementDocumentSchema } from "../capabilitystatementdocument/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatement> = z.object({
    resourceType: z.literal("CapabilityStatement"),
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
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmString: z.string().optional(),
    _versionAlgorithmString: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmCoding: z.lazy(() => createCodingSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    copyrightLabel: primitives.createStringSchema().optional(),
    _copyrightLabel: z.lazy(() => createElementSchema()).optional(),
    kind: primitives.createCodeSchema().optional(),
    _kind: z.lazy(() => createElementSchema()).optional(),
    instantiates: z.array(primitives.createCanonicalSchema()).optional(),
    imports: z.array(primitives.createCanonicalSchema()).optional(),
    software: z
      .lazy(() => createCapabilityStatementSoftwareSchema())
      .optional(),
    implementation: z
      .lazy(() => createCapabilityStatementImplementationSchema())
      .optional(),
    fhirVersion: primitives.createCodeSchema().optional(),
    _fhirVersion: z.lazy(() => createElementSchema()).optional(),
    format: z.array(primitives.createCodeSchema()).optional(),
    _format: z.array(z.lazy(() => createElementSchema())).optional(),
    patchFormat: z.array(primitives.createCodeSchema()).optional(),
    _patchFormat: z.array(z.lazy(() => createElementSchema())).optional(),
    acceptLanguage: z.array(primitives.createCodeSchema()).optional(),
    _acceptLanguage: z.array(z.lazy(() => createElementSchema())).optional(),
    implementationGuide: z.array(primitives.createCanonicalSchema()).optional(),
    rest: z
      .array(z.lazy(() => createCapabilityStatementRestSchema()))
      .optional(),
    messaging: z
      .array(z.lazy(() => createCapabilityStatementMessagingSchema()))
      .optional(),
    document: z
      .array(z.lazy(() => createCapabilityStatementDocumentSchema()))
      .optional(),
  });

  return baseSchema;
}
