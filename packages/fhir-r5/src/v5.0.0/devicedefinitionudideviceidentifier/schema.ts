import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createDeviceDefinitionMarketDistributionSchema } from "../devicedefinitionmarketdistribution/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionUdiDeviceIdentifierSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionUdiDeviceIdentifier> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      deviceIdentifier: primitives.createStringSchema().optional(),
      _deviceIdentifier: z.lazy(() => createElementSchema()).optional(),
      issuer: primitives.createUriSchema().optional(),
      _issuer: z.lazy(() => createElementSchema()).optional(),
      jurisdiction: primitives.createUriSchema().optional(),
      _jurisdiction: z.lazy(() => createElementSchema()).optional(),
      marketDistribution: z
        .array(z.lazy(() => createDeviceDefinitionMarketDistributionSchema()))
        .optional(),
    });

  return baseSchema;
}
