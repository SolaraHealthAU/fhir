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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: createElementSchema().optional(),
      valueDecimal: z.number().optional(),
      _valueDecimal: createElementSchema().optional(),
      valueInteger: z.number().optional(),
      _valueInteger: createElementSchema().optional(),
      valueDate: z.string().optional(),
      _valueDate: createElementSchema().optional(),
      valueDateTime: z.string().optional(),
      _valueDateTime: createElementSchema().optional(),
      valueTime: z.string().optional(),
      _valueTime: createElementSchema().optional(),
      valueString: z.string().optional(),
      _valueString: createElementSchema().optional(),
      valueUri: z.string().optional(),
      _valueUri: createElementSchema().optional(),
      valueAttachment: createAttachmentSchema().optional(),
      valueCoding: createCodingSchema().optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
