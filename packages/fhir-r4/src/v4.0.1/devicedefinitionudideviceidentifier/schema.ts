import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionUdiDeviceIdentifierSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionUdiDeviceIdentifier> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      deviceIdentifier: primitives.createStringSchema(),
      _deviceIdentifier: z.lazy(() => createElementSchema()).optional(),
      issuer: primitives.createUriSchema(),
      _issuer: z.lazy(() => createElementSchema()).optional(),
      jurisdiction: primitives.createUriSchema(),
      _jurisdiction: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
