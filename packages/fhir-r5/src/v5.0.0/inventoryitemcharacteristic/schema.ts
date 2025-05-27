import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createRangeSchema,
  createRatioSchema,
  createAnnotationSchema,
  createAddressSchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryItemCharacteristicSchema() {
  const baseSchema: z.ZodType<types.InventoryItemCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    characteristicType: z.lazy(() => createCodeableConceptSchema()),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueUrl: z.string().optional(),
    _valueUrl: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueRatio: z.lazy(() => createRatioSchema()).optional(),
    valueAnnotation: z.lazy(() => createAnnotationSchema()).optional(),
    valueAddress: z.lazy(() => createAddressSchema()).optional(),
    valueDuration: z.lazy(() => createDurationSchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
  });

  return baseSchema;
}
