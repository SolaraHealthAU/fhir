import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
  createRangeSchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDevicePropertySchema() {
  const baseSchema: z.ZodType<types.DeviceProperty> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
  });

  return baseSchema;
}
