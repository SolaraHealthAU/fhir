import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createPeriodSchema,
  createQuantitySchema,
  createRangeSchema,
  createRatioSchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductPropertySchema() {
  const baseSchema: z.ZodType<types.BiologicallyDerivedProductProperty> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueInteger: z.number().optional(),
      _valueInteger: z.lazy(() => createElementSchema()).optional(),
      valueCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      valuePeriod: z.lazy(() => createPeriodSchema()).optional(),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
      valueRange: z.lazy(() => createRangeSchema()).optional(),
      valueRatio: z.lazy(() => createRatioSchema()).optional(),
      valueString: z.string().optional(),
      _valueString: z.lazy(() => createElementSchema()).optional(),
      valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    });

  return baseSchema;
}
