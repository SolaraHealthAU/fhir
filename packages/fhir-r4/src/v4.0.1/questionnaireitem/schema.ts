import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";
import { createQuestionnaireEnableWhenSchema } from "../questionnaireenablewhen/schema";
import { createQuestionnaireAnswerOptionSchema } from "../questionnaireansweroption/schema";
import { createQuestionnaireInitialSchema } from "../questionnaireinitial/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireItemSchema() {
  return getCachedSchema("QuestionnaireItem", () => {
    const baseSchema: z.ZodType<types.QuestionnaireItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      linkId: primitives.getStringSchema(),
      _linkId: z.lazy(() => createElementSchema()).optional(),
      definition: primitives.getUriSchema().optional(),
      _definition: z.lazy(() => createElementSchema()).optional(),
      code: z.array(createCodingSchema()).optional(),
      prefix: primitives.getStringSchema().optional(),
      _prefix: z.lazy(() => createElementSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
      type: z.enum([
        "group",
        "display",
        "boolean",
        "decimal",
        "integer",
        "date",
        "dateTime",
        "time",
        "string",
        "text",
        "url",
        "choice",
        "open-choice",
        "attachment",
        "reference",
        "quantity",
      ]),
      _type: z.lazy(() => createElementSchema()).optional(),
      enableWhen: z.array(createQuestionnaireEnableWhenSchema()).optional(),
      enableBehavior: z.enum(["all", "any"]).optional(),
      _enableBehavior: z.lazy(() => createElementSchema()).optional(),
      required: primitives.getBooleanSchema().optional(),
      _required: z.lazy(() => createElementSchema()).optional(),
      repeats: primitives.getBooleanSchema().optional(),
      _repeats: z.lazy(() => createElementSchema()).optional(),
      readOnly: primitives.getBooleanSchema().optional(),
      _readOnly: z.lazy(() => createElementSchema()).optional(),
      maxLength: primitives.getIntegerSchema().optional(),
      _maxLength: z.lazy(() => createElementSchema()).optional(),
      answerValueSet: primitives.getCanonicalSchema().optional(),
      answerOption: z.array(createQuestionnaireAnswerOptionSchema()).optional(),
      initial: z.array(createQuestionnaireInitialSchema()).optional(),
      item: z.array(createQuestionnaireItemSchema()).optional(),
    });

    return baseSchema;
  });
}
