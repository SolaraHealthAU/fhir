import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceMetricCalibrationSchema() {
  return getCachedSchema("DeviceMetricCalibration", () => {
    const baseSchema: z.ZodType<types.DeviceMetricCalibration> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: z.enum(["unspecified", "offset", "gain", "two-point"]).optional(),
        _type: createElementSchema().optional(),
        state: z
          .enum([
            "not-calibrated",
            "calibration-required",
            "calibrated",
            "unspecified",
          ])
          .optional(),
        _state: createElementSchema().optional(),
        time: primitives.getInstantSchema().optional(),
        _time: createElementSchema().optional(),
      },
    );

    return baseSchema;
  });
}
