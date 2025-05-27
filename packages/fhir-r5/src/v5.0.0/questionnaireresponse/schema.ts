import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createQuestionnaireResponseItemSchema } from "../questionnaireresponseitem/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireResponseSchema() {
  const baseSchema: z.ZodType<types.QuestionnaireResponse> = z.object({
    resourceType: z.literal("QuestionnaireResponse"),
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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    questionnaire: primitives.createCanonicalSchema(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    authored: primitives.createDateTimeSchema().optional(),
    _authored: z.lazy(() => createElementSchema()).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    source: z.lazy(() => createReferenceSchema()).optional(),
    item: z
      .array(z.lazy(() => createQuestionnaireResponseItemSchema()))
      .optional(),
  });

  return baseSchema;
}
