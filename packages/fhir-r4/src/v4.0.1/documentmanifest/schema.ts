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

/* Generated from FHIR JSON Schema */

export function createDocumentManifestSchema() {
  return getCachedSchema("DocumentManifest", () => {
    const baseSchema: z.ZodType<types.DocumentManifest> = z.strictObject({
      resourceType: z.literal("DocumentManifest"),
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
      masterIdentifier: createIdentifierSchema().optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: z.enum(["current", "superseded", "entered-in-error"]),
      _status: createElementSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      created: primitives.getDateTimeSchema().optional(),
      _created: createElementSchema().optional(),
      author: z.array(createReferenceSchema()).optional(),
      recipient: z.array(createReferenceSchema()).optional(),
      source: primitives.getUriSchema().optional(),
      _source: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      content: z.array(createReferenceSchema()),
      related: z.array(createDocumentManifestRelatedSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createDocumentManifestRelatedSchema() {
  return getCachedSchema("DocumentManifestRelated", () => {
    const baseSchema: z.ZodType<types.DocumentManifestRelated> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: createIdentifierSchema().optional(),
        ref: createReferenceSchema().optional(),
      },
    );

    return baseSchema;
  });
}
