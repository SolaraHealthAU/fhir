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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        linkId: primitives.getStringSchema(),
        _linkId: createElementSchema().optional(),
        definition: primitives.getUriSchema().optional(),
        _definition: createElementSchema().optional(),
        text: primitives.getStringSchema().optional(),
        _text: createElementSchema().optional(),
        answer: z.array(createQuestionnaireResponseAnswerSchema()).optional(),
        item: z.array(createQuestionnaireResponseItemSchema()).optional(),
      });

    return baseSchema;
  });
}
