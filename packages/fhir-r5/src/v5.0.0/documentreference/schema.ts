import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDocumentReferenceAttesterSchema } from "../documentreferenceattester/schema";
import { createDocumentReferenceRelatesToSchema } from "../documentreferencerelatesto/schema";
import { createDocumentReferenceContentSchema } from "../documentreferencecontent/schema";

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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    docStatus: primitives.createCodeSchema().optional(),
    _docStatus: z.lazy(() => createElementSchema()).optional(),
    modality: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    context: z.array(z.lazy(() => createReferenceSchema())).optional(),
    event: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    bodySite: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    facilityType: z.lazy(() => createCodeableConceptSchema()).optional(),
    practiceSetting: z.lazy(() => createCodeableConceptSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    date: primitives.createInstantSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())).optional(),
    attester: z
      .array(z.lazy(() => createDocumentReferenceAttesterSchema()))
      .optional(),
    custodian: z.lazy(() => createReferenceSchema()).optional(),
    relatesTo: z
      .array(z.lazy(() => createDocumentReferenceRelatesToSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    securityLabel: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    content: z.array(z.lazy(() => createDocumentReferenceContentSchema())),
  });

  return baseSchema;
}
