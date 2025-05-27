import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createCodingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createStructureDefinitionMappingSchema } from "../structuredefinitionmapping/schema";
import { createStructureDefinitionContextSchema } from "../structuredefinitioncontext/schema";
import { createStructureDefinitionSnapshotSchema } from "../structuredefinitionsnapshot/schema";
import { createStructureDefinitionDifferentialSchema } from "../structuredefinitiondifferential/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionSchema() {
  return getCachedSchema("StructureDefinition", () => {
    const baseSchema: z.ZodType<types.StructureDefinition> = z.strictObject({
      resourceType: z.literal("StructureDefinition"),
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
      url: primitives.getUriSchema(),
      _url: z.lazy(() => createElementSchema()).optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: z.lazy(() => createElementSchema()).optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: z.lazy(() => createElementSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: z.lazy(() => createElementSchema()).optional(),
      keyword: z.array(createCodingSchema()).optional(),
      fhirVersion: z
        .enum([
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
        ])
        .optional(),
      _fhirVersion: z.lazy(() => createElementSchema()).optional(),
      mapping: z.array(createStructureDefinitionMappingSchema()).optional(),
      kind: z.enum(["primitive-type", "complex-type", "resource", "logical"]),
      _kind: z.lazy(() => createElementSchema()).optional(),
      abstract: primitives.getBooleanSchema(),
      _abstract: z.lazy(() => createElementSchema()).optional(),
      context: z.array(createStructureDefinitionContextSchema()).optional(),
      contextInvariant: z.array(primitives.getStringSchema()).optional(),
      _contextInvariant: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
      type: primitives.getUriSchema(),
      _type: z.lazy(() => createElementSchema()).optional(),
      baseDefinition: primitives.getCanonicalSchema().optional(),
      derivation: z.enum(["specialization", "constraint"]).optional(),
      _derivation: z.lazy(() => createElementSchema()).optional(),
      snapshot: createStructureDefinitionSnapshotSchema().optional(),
      differential: createStructureDefinitionDifferentialSchema().optional(),
    });

    return baseSchema;
  });
}
