import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDeviceNameSchema() {
  return getCachedSchema("DeviceDeviceName", () => {
    const baseSchema: z.ZodType<types.DeviceDeviceName> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      type: z.enum([
        "udi-label-name",
        "user-friendly-name",
        "patient-reported-name",
        "manufacturer-name",
        "model-name",
        "other",
      ]),
      _type: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
