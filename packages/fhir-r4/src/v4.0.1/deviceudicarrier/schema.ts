import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceUdiCarrierSchema() {
  return getCachedSchema("DeviceUdiCarrier", () => {
    const baseSchema: z.ZodType<types.DeviceUdiCarrier> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      deviceIdentifier: primitives.getStringSchema().optional(),
      _deviceIdentifier: z.lazy(() => createElementSchema()).optional(),
      issuer: primitives.getUriSchema().optional(),
      _issuer: z.lazy(() => createElementSchema()).optional(),
      jurisdiction: primitives.getUriSchema().optional(),
      _jurisdiction: z.lazy(() => createElementSchema()).optional(),
      carrierAIDC: primitives.getBase64BinarySchema().optional(),
      _carrierAIDC: z.lazy(() => createElementSchema()).optional(),
      carrierHRF: primitives.getStringSchema().optional(),
      _carrierHRF: z.lazy(() => createElementSchema()).optional(),
      entryType: z
        .enum(["barcode", "rfid", "manual", "card", "self-reported", "unknown"])
        .optional(),
      _entryType: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
