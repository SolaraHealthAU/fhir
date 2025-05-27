import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createCodingSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";
import { createQuestionnaireResponseItemSchema } from "../questionnaireresponseitem/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireResponseAnswerSchema() {
  const baseSchema: z.ZodType<types.QuestionnaireResponseAnswer> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueDate: z.string().optional(),
    _valueDate: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
    valueTime: z.string().optional(),
    _valueTime: z.lazy(() => createElementSchema()).optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueUri: z.string().optional(),
    _valueUri: z.lazy(() => createElementSchema()).optional(),
    valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    valueCoding: z.lazy(() => createCodingSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
    item: z
      .array(z.lazy(() => createQuestionnaireResponseItemSchema()))
      .optional(),
  });

  return baseSchema;
}
