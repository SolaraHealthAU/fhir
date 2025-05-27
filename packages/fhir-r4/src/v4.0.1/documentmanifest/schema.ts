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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDocumentManifestRelatedSchema } from "../documentmanifestrelated/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentManifestSchema() {
  return getCachedSchema("DocumentManifest", () => {
    const baseSchema: z.ZodType<types.DocumentManifest> = z.strictObject({
      resourceType: z.literal("DocumentManifest"),
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
      masterIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: z.enum(["current", "superseded", "entered-in-error"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      created: primitives.getDateTimeSchema().optional(),
      _created: z.lazy(() => createElementSchema()).optional(),
      author: z.array(createReferenceSchema()).optional(),
      recipient: z.array(createReferenceSchema()).optional(),
      source: primitives.getUriSchema().optional(),
      _source: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      content: z.array(createReferenceSchema()),
      related: z.array(createDocumentManifestRelatedSchema()).optional(),
    });

    return baseSchema;
  });
}
