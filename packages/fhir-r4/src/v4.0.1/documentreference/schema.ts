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
import { createDocumentReferenceRelatesToSchema } from "../documentreferencerelatesto/schema";
import { createDocumentReferenceContentSchema } from "../documentreferencecontent/schema";
import { createDocumentReferenceContextSchema } from "../documentreferencecontext/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceSchema() {
  const baseSchema: z.ZodType<types.DocumentReference> = z.object({
    resourceType: z.literal("DocumentReference"),
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
    docStatus: primitives.createCodeSchema().optional(),
    _docStatus: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createInstantSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())).optional(),
    authenticator: z.lazy(() => createReferenceSchema()).optional(),
    custodian: z.lazy(() => createReferenceSchema()).optional(),
    relatesTo: z
      .array(z.lazy(() => createDocumentReferenceRelatesToSchema()))
      .optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    securityLabel: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    content: z.array(z.lazy(() => createDocumentReferenceContentSchema())),
    context: z.lazy(() => createDocumentReferenceContextSchema()).optional(),
  });

  return baseSchema;
}
