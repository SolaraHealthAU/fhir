import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceUdiCarrierSchema() {
  const baseSchema: z.ZodType<types.DeviceUdiCarrier> = z.object({
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
    carrierAIDC: primitives.createBase64BinarySchema().optional(),
    _carrierAIDC: z.lazy(() => createElementSchema()).optional(),
    carrierHRF: primitives.createStringSchema().optional(),
    _carrierHRF: z.lazy(() => createElementSchema()).optional(),
    entryType: primitives.createCodeSchema().optional(),
    _entryType: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
