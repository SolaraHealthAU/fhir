import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createQuantitySchema,
  createAttachmentSchema,
  createReferenceSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitSupportingInfoSchema() {
  return getCachedSchema("ExplanationOfBenefitSupportingInfo", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitSupportingInfo> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        sequence: primitives.getPositiveIntSchema(),
        _sequence: z.lazy(() => createElementSchema()).optional(),
        category: createCodeableConceptSchema(),
        code: createCodeableConceptSchema().optional(),
        timingDate: z.string().optional(),
        _timingDate: z.lazy(() => createElementSchema()).optional(),
        timingPeriod: createPeriodSchema().optional(),
        valueBoolean: z.boolean().optional(),
        _valueBoolean: z.lazy(() => createElementSchema()).optional(),
        valueString: z.string().optional(),
        _valueString: z.lazy(() => createElementSchema()).optional(),
        valueQuantity: createQuantitySchema().optional(),
        valueAttachment: createAttachmentSchema().optional(),
        valueReference: createReferenceSchema().optional(),
        reason: createCodingSchema().optional(),
      });

    return baseSchema;
  });
}
