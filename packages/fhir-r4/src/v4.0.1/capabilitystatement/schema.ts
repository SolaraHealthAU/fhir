import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
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
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema(),
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
    kind: z.enum(["instance", "capability", "requirements"]),
    _kind: z.lazy(() => createElementSchema()).optional(),
    instantiates: z.array(primitives.createCanonicalSchema()).optional(),
    imports: z.array(primitives.createCanonicalSchema()).optional(),
    software: z
      .lazy(() => createCapabilityStatementSoftwareSchema())
      .optional(),
    implementation: z
      .lazy(() => createCapabilityStatementImplementationSchema())
      .optional(),
    fhirVersion: z.enum([
      "0.01",
      "0.05",
      "0.06",
      "0.11",
      "0.0.80",
      "0.0.81",
      "0.0.82",
      "0.4.0",
      "0.5.0",
      "1.0.0",
      "1.0.1",
      "1.0.2",
      "1.1.0",
      "1.4.0",
      "1.6.0",
      "1.8.0",
      "3.0.0",
      "3.0.1",
      "3.3.0",
      "3.5.0",
      "4.0.0",
      "4.0.1",
    ]),
    _fhirVersion: z.lazy(() => createElementSchema()).optional(),
    format: z.array(primitives.createCodeSchema()),
    _format: z.array(z.lazy(() => createElementSchema())).optional(),
    patchFormat: z.array(primitives.createCodeSchema()).optional(),
    _patchFormat: z.array(z.lazy(() => createElementSchema())).optional(),
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
