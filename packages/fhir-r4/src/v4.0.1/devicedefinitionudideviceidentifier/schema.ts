import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionUdiDeviceIdentifierSchema() {
  return getCachedSchema("DeviceDefinitionUdiDeviceIdentifier", () => {
    const baseSchema: z.ZodType<types.DeviceDefinitionUdiDeviceIdentifier> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        deviceIdentifier: primitives.getStringSchema(),
        _deviceIdentifier: z.lazy(() => createElementSchema()).optional(),
        issuer: primitives.getUriSchema(),
        _issuer: z.lazy(() => createElementSchema()).optional(),
        jurisdiction: primitives.getUriSchema(),
        _jurisdiction: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
