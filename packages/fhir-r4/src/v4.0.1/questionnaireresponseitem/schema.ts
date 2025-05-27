import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createQuestionnaireResponseAnswerSchema } from "../questionnaireresponseanswer/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireResponseItemSchema() {
  return getCachedSchema("QuestionnaireResponseItem", () => {
    const baseSchema: z.ZodType<types.QuestionnaireResponseItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        linkId: primitives.getStringSchema(),
        _linkId: z.lazy(() => createElementSchema()).optional(),
        definition: primitives.getUriSchema().optional(),
        _definition: z.lazy(() => createElementSchema()).optional(),
        text: primitives.getStringSchema().optional(),
        _text: z.lazy(() => createElementSchema()).optional(),
        answer: z.array(createQuestionnaireResponseAnswerSchema()).optional(),
        item: z.array(createQuestionnaireResponseItemSchema()).optional(),
      });

    return baseSchema;
  });
}
