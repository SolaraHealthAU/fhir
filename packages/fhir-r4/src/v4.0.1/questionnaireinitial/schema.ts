import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createCodingSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createQuestionnaireInitialSchema() {
  return getCachedSchema("QuestionnaireInitial", () => {
    const baseSchema: z.ZodType<types.QuestionnaireInitial> = z.strictObject({
      id: primitives.getStringSchema().optional(),
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
      valueAttachment: createAttachmentSchema().optional(),
      valueCoding: createCodingSchema().optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
