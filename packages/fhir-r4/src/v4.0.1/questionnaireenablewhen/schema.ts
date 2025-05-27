import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireEnableWhenSchema() {
  const baseSchema: z.ZodType<types.QuestionnaireEnableWhen> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    question: primitives.createStringSchema().optional(),
    _question: z.lazy(() => createElementSchema()).optional(),
    operator: z.enum(["exists", "=", "!=", ">", "<", ">=", "<="]).optional(),
    _operator: z.lazy(() => createElementSchema()).optional(),
    answerBoolean: z.boolean().optional(),
    _answerBoolean: z.lazy(() => createElementSchema()).optional(),
    answerDecimal: z.number().optional(),
    _answerDecimal: z.lazy(() => createElementSchema()).optional(),
    answerInteger: z.number().optional(),
    _answerInteger: z.lazy(() => createElementSchema()).optional(),
    answerDate: z.string().optional(),
    _answerDate: z.lazy(() => createElementSchema()).optional(),
    answerDateTime: z.string().optional(),
    _answerDateTime: z.lazy(() => createElementSchema()).optional(),
    answerTime: z.string().optional(),
    _answerTime: z.lazy(() => createElementSchema()).optional(),
    answerString: z.string().optional(),
    _answerString: z.lazy(() => createElementSchema()).optional(),
    answerCoding: z.lazy(() => createCodingSchema()).optional(),
    answerQuantity: z.lazy(() => createQuantitySchema()).optional(),
    answerReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
