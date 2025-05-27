import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.StructureDefinition> = z.object({
    resourceType: z.literal("StructureDefinition"),
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
    url: primitives.createUriSchema(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
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
    keyword: z.array(z.lazy(() => createCodingSchema())).optional(),
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
    mapping: z
      .array(z.lazy(() => createStructureDefinitionMappingSchema()))
      .optional(),
    kind: z.enum(["primitive-type", "complex-type", "resource", "logical"]),
    _kind: z.lazy(() => createElementSchema()).optional(),
    abstract: primitives.createBooleanSchema(),
    _abstract: z.lazy(() => createElementSchema()).optional(),
    context: z
      .array(z.lazy(() => createStructureDefinitionContextSchema()))
      .optional(),
    contextInvariant: z.array(primitives.createStringSchema()).optional(),
    _contextInvariant: z.array(z.lazy(() => createElementSchema())).optional(),
    type: primitives.createUriSchema(),
    _type: z.lazy(() => createElementSchema()).optional(),
    baseDefinition: primitives.createCanonicalSchema().optional(),
    derivation: z.enum(["specialization", "constraint"]).optional(),
    _derivation: z.lazy(() => createElementSchema()).optional(),
    snapshot: z
      .lazy(() => createStructureDefinitionSnapshotSchema())
      .optional(),
    differential: z
      .lazy(() => createStructureDefinitionDifferentialSchema())
      .optional(),
  });

  return baseSchema;
}
