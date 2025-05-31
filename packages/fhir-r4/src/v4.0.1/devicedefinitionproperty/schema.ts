import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionPropertySchema() {
  return getCachedSchema("DeviceDefinitionProperty", () => {
    const baseSchema: z.ZodType<types.DeviceDefinitionProperty> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema(),
        valueQuantity: z.array(createQuantitySchema()).optional(),
        valueCode: z.array(createCodeableConceptSchema()).optional(),
      });

    return baseSchema;
  });
}
