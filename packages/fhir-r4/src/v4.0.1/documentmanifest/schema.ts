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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDocumentManifestRelatedSchema } from "../documentmanifestrelated/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentManifestSchema() {
  const baseSchema: z.ZodType<types.DocumentManifest> = z.object({
    resourceType: z.literal("DocumentManifest"),
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
    masterIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: z.enum(["current", "superseded", "entered-in-error"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    created: primitives.createDateTimeSchema().optional(),
    _created: z.lazy(() => createElementSchema()).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())).optional(),
    recipient: z.array(z.lazy(() => createReferenceSchema())).optional(),
    source: primitives.createUriSchema().optional(),
    _source: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    content: z.array(z.lazy(() => createReferenceSchema())),
    related: z
      .array(z.lazy(() => createDocumentManifestRelatedSchema()))
      .optional(),
  });

  return baseSchema;
}
