import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireAnswerOptionSchema() {
  const baseSchema: z.ZodType<types.QuestionnaireAnswerOption> = z.object({
    id: primitives.createStringSchema().optional(),
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
    valueCoding: z.lazy(() => createCodingSchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
    initialSelected: primitives.createBooleanSchema().optional(),
    _initialSelected: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
