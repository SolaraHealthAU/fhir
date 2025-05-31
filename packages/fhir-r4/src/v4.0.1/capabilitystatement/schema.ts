import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("CapabilityStatement", () => {
    const baseSchema: z.ZodType<types.CapabilityStatement> = z.strictObject({
      resourceType: z.literal("CapabilityStatement"),
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
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      date: primitives.getDateTimeSchema(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: createElementSchema().optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: createElementSchema().optional(),
      kind: z.enum(["instance", "capability", "requirements"]),
      _kind: createElementSchema().optional(),
      instantiates: z.array(primitives.getCanonicalSchema()).optional(),
      imports: z.array(primitives.getCanonicalSchema()).optional(),
      software: createCapabilityStatementSoftwareSchema().optional(),
      implementation:
        createCapabilityStatementImplementationSchema().optional(),
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
      _fhirVersion: createElementSchema().optional(),
      format: z.array(primitives.getCodeSchema()),
      _format: z.array(createElementSchema()).optional(),
      patchFormat: z.array(primitives.getCodeSchema()).optional(),
      _patchFormat: z.array(createElementSchema()).optional(),
      implementationGuide: z.array(primitives.getCanonicalSchema()).optional(),
      rest: z.array(createCapabilityStatementRestSchema()).optional(),
      messaging: z.array(createCapabilityStatementMessagingSchema()).optional(),
      document: z.array(createCapabilityStatementDocumentSchema()).optional(),
    });

    return baseSchema;
  });
}
