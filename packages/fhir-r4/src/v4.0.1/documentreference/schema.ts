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
import { createDocumentReferenceRelatesToSchema } from "../documentreferencerelatesto/schema";
import { createDocumentReferenceContentSchema } from "../documentreferencecontent/schema";
import { createDocumentReferenceContextSchema } from "../documentreferencecontext/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceSchema() {
  return getCachedSchema("DocumentReference", () => {
    const baseSchema: z.ZodType<types.DocumentReference> = z.strictObject({
      resourceType: z.literal("DocumentReference"),
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
      docStatus: primitives.getCodeSchema().optional(),
      _docStatus: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      subject: createReferenceSchema().optional(),
      date: primitives.getInstantSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      author: z.array(createReferenceSchema()).optional(),
      authenticator: createReferenceSchema().optional(),
      custodian: createReferenceSchema().optional(),
      relatesTo: z.array(createDocumentReferenceRelatesToSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      securityLabel: z.array(createCodeableConceptSchema()).optional(),
      content: z.array(createDocumentReferenceContentSchema()),
      context: createDocumentReferenceContextSchema().optional(),
    });

    return baseSchema;
  });
}
