import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireEnableWhenSchema() {
  return getCachedSchema("QuestionnaireEnableWhen", () => {
    const baseSchema: z.ZodType<types.QuestionnaireEnableWhen> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        question: primitives.getStringSchema().optional(),
        _question: createElementSchema().optional(),
        operator: z
          .enum(["exists", "=", "!=", ">", "<", ">=", "<="])
          .optional(),
        _operator: createElementSchema().optional(),
        answerBoolean: z.boolean().optional(),
        _answerBoolean: createElementSchema().optional(),
        answerDecimal: z.number().optional(),
        _answerDecimal: createElementSchema().optional(),
        answerInteger: z.number().optional(),
        _answerInteger: createElementSchema().optional(),
        answerDate: z.string().optional(),
        _answerDate: createElementSchema().optional(),
        answerDateTime: z.string().optional(),
        _answerDateTime: createElementSchema().optional(),
        answerTime: z.string().optional(),
        _answerTime: createElementSchema().optional(),
        answerString: z.string().optional(),
        _answerString: createElementSchema().optional(),
        answerCoding: createCodingSchema().optional(),
        answerQuantity: createQuantitySchema().optional(),
        answerReference: createReferenceSchema().optional(),
      },
    );

    return baseSchema;
  });
}
