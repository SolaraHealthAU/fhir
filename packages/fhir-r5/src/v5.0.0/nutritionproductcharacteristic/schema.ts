import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionProductCharacteristicSchema() {
  const baseSchema: z.ZodType<types.NutritionProductCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueBase64Binary: z.string().optional(),
    _valueBase64Binary: z.lazy(() => createElementSchema()).optional(),
    valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
