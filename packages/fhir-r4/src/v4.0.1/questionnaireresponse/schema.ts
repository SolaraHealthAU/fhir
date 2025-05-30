import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("QuestionnaireResponse", () => {
    const baseSchema: z.ZodType<types.QuestionnaireResponse> = z.strictObject({
      resourceType: z.literal("QuestionnaireResponse"),
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
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      questionnaire: primitives.getCanonicalSchema().optional(),
      status: z.enum([
        "in-progress",
        "completed",
        "amended",
        "entered-in-error",
        "stopped",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      authored: primitives.getDateTimeSchema().optional(),
      _authored: z.lazy(() => createElementSchema()).optional(),
      author: createReferenceSchema().optional(),
      source: createReferenceSchema().optional(),
      item: z.array(createQuestionnaireResponseItemSchema()).optional(),
    });

    return baseSchema;
  });
}
