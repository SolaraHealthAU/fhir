import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceRequestParameterSchema() {
  return getCachedSchema("DeviceRequestParameter", () => {
    const baseSchema: z.ZodType<types.DeviceRequestParameter> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      valueCodeableConcept: createCodeableConceptSchema().optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueRange: createRangeSchema().optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
