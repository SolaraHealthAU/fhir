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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      linkId: primitives.getStringSchema(),
      _linkId: createElementSchema().optional(),
      definition: primitives.getUriSchema().optional(),
      _definition: createElementSchema().optional(),
      code: z.array(createCodingSchema()).optional(),
      prefix: primitives.getStringSchema().optional(),
      _prefix: createElementSchema().optional(),
      text: primitives.getStringSchema().optional(),
      _text: createElementSchema().optional(),
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
      _type: createElementSchema().optional(),
      enableWhen: z.array(createQuestionnaireEnableWhenSchema()).optional(),
      enableBehavior: z.enum(["all", "any"]).optional(),
      _enableBehavior: createElementSchema().optional(),
      required: primitives.getBooleanSchema().optional(),
      _required: createElementSchema().optional(),
      repeats: primitives.getBooleanSchema().optional(),
      _repeats: createElementSchema().optional(),
      readOnly: primitives.getBooleanSchema().optional(),
      _readOnly: createElementSchema().optional(),
      maxLength: primitives.getIntegerSchema().optional(),
      _maxLength: createElementSchema().optional(),
      answerValueSet: primitives.getCanonicalSchema().optional(),
      answerOption: z.array(createQuestionnaireAnswerOptionSchema()).optional(),
      initial: z.array(createQuestionnaireInitialSchema()).optional(),
      item: z.array(createQuestionnaireItemSchema()).optional(),
    });

    return baseSchema;
  });
}
