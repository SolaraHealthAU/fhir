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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        deviceIdentifier: primitives.getStringSchema(),
        _deviceIdentifier: createElementSchema().optional(),
        issuer: primitives.getUriSchema(),
        _issuer: createElementSchema().optional(),
        jurisdiction: primitives.getUriSchema(),
        _jurisdiction: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
