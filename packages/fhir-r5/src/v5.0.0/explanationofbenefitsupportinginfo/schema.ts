import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createQuantitySchema,
  createAttachmentSchema,
  createReferenceSchema,
  createIdentifierSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitSupportingInfoSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitSupportingInfo> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      sequence: primitives.createPositiveIntSchema().optional(),
      _sequence: z.lazy(() => createElementSchema()).optional(),
      category: z.lazy(() => createCodeableConceptSchema()),
      code: z.lazy(() => createCodeableConceptSchema()).optional(),
      timingDate: z.string().optional(),
      _timingDate: z.lazy(() => createElementSchema()).optional(),
      timingPeriod: z.lazy(() => createPeriodSchema()).optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueString: z.string().optional(),
      _valueString: z.lazy(() => createElementSchema()).optional(),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
      valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
      valueReference: z.lazy(() => createReferenceSchema()).optional(),
      valueIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      reason: z.lazy(() => createCodingSchema()).optional(),
    });

  return baseSchema;
}
