import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.QuestionnaireItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    definition: primitives.createUriSchema().optional(),
    _definition: z.lazy(() => createElementSchema()).optional(),
    code: z.array(z.lazy(() => createCodingSchema())).optional(),
    prefix: primitives.createStringSchema().optional(),
    _prefix: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    enableWhen: z
      .array(z.lazy(() => createQuestionnaireEnableWhenSchema()))
      .optional(),
    enableBehavior: primitives.createCodeSchema().optional(),
    _enableBehavior: z.lazy(() => createElementSchema()).optional(),
    disabledDisplay: primitives.createCodeSchema().optional(),
    _disabledDisplay: z.lazy(() => createElementSchema()).optional(),
    required: primitives.createBooleanSchema().optional(),
    _required: z.lazy(() => createElementSchema()).optional(),
    repeats: primitives.createBooleanSchema().optional(),
    _repeats: z.lazy(() => createElementSchema()).optional(),
    readOnly: primitives.createBooleanSchema().optional(),
    _readOnly: z.lazy(() => createElementSchema()).optional(),
    maxLength: primitives.createIntegerSchema().optional(),
    _maxLength: z.lazy(() => createElementSchema()).optional(),
    answerConstraint: primitives.createCodeSchema().optional(),
    _answerConstraint: z.lazy(() => createElementSchema()).optional(),
    answerValueSet: primitives.createCanonicalSchema().optional(),
    answerOption: z
      .array(z.lazy(() => createQuestionnaireAnswerOptionSchema()))
      .optional(),
    initial: z
      .array(z.lazy(() => createQuestionnaireInitialSchema()))
      .optional(),
    item: z.array(z.lazy(() => createQuestionnaireItemSchema())).optional(),
  });

  return baseSchema;
}
