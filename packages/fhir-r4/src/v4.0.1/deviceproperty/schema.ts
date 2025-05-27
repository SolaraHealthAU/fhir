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

export function createDevicePropertySchema() {
  return getCachedSchema("DeviceProperty", () => {
    const baseSchema: z.ZodType<types.DeviceProperty> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodeableConceptSchema(),
      valueQuantity: z.array(createQuantitySchema()).optional(),
      valueCode: z.array(createCodeableConceptSchema()).optional(),
    });

    return baseSchema;
  });
}
