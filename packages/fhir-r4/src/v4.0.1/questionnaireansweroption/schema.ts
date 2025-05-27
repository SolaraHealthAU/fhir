import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireAnswerOptionSchema() {
  return getCachedSchema("QuestionnaireAnswerOption", () => {
    const baseSchema: z.ZodType<types.QuestionnaireAnswerOption> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        valueInteger: z.number().optional(),
        _valueInteger: z.lazy(() => createElementSchema()).optional(),
        valueDate: z.string().optional(),
        _valueDate: z.lazy(() => createElementSchema()).optional(),
        valueTime: z.string().optional(),
        _valueTime: z.lazy(() => createElementSchema()).optional(),
        valueString: z.string().optional(),
        _valueString: z.lazy(() => createElementSchema()).optional(),
        valueCoding: createCodingSchema().optional(),
        valueReference: createReferenceSchema().optional(),
        initialSelected: primitives.getBooleanSchema().optional(),
        _initialSelected: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
