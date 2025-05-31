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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      deviceIdentifier: primitives.getStringSchema().optional(),
      _deviceIdentifier: createElementSchema().optional(),
      issuer: primitives.getUriSchema().optional(),
      _issuer: createElementSchema().optional(),
      jurisdiction: primitives.getUriSchema().optional(),
      _jurisdiction: createElementSchema().optional(),
      carrierAIDC: primitives.getBase64BinarySchema().optional(),
      _carrierAIDC: createElementSchema().optional(),
      carrierHRF: primitives.getStringSchema().optional(),
      _carrierHRF: createElementSchema().optional(),
      entryType: z
        .enum(["barcode", "rfid", "manual", "card", "self-reported", "unknown"])
        .optional(),
      _entryType: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
