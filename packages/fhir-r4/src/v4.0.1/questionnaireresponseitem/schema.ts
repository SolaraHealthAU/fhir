import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createQuestionnaireResponseAnswerSchema } from "../questionnaireresponseanswer/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireResponseItemSchema() {
  const baseSchema: z.ZodType<types.QuestionnaireResponseItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createStringSchema(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    definition: primitives.createUriSchema().optional(),
    _definition: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    answer: z
      .array(z.lazy(() => createQuestionnaireResponseAnswerSchema()))
      .optional(),
    item: z
      .array(z.lazy(() => createQuestionnaireResponseItemSchema()))
      .optional(),
  });

  return baseSchema;
}
