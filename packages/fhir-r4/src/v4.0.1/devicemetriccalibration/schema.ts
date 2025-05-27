import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceMetricCalibrationSchema() {
  const baseSchema: z.ZodType<types.DeviceMetricCalibration> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.enum(["unspecified", "offset", "gain", "two-point"]).optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    state: z
      .enum([
        "not-calibrated",
        "calibration-required",
        "calibrated",
        "unspecified",
      ])
      .optional(),
    _state: z.lazy(() => createElementSchema()).optional(),
    time: primitives.createInstantSchema().optional(),
    _time: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
