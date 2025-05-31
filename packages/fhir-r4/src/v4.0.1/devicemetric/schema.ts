import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createTimingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceMetricCalibrationSchema } from "../devicemetriccalibration/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceMetricSchema() {
  return getCachedSchema("DeviceMetric", () => {
    const baseSchema: z.ZodType<types.DeviceMetric> = z.strictObject({
      resourceType: z.literal("DeviceMetric"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      type: createCodeableConceptSchema(),
      unit: createCodeableConceptSchema().optional(),
      source: createReferenceSchema().optional(),
      parent: createReferenceSchema().optional(),
      operationalStatus: z
        .enum(["on", "off", "standby", "entered-in-error"])
        .optional(),
      _operationalStatus: createElementSchema().optional(),
      color: z
        .enum([
          "black",
          "red",
          "green",
          "yellow",
          "blue",
          "magenta",
          "cyan",
          "white",
        ])
        .optional(),
      _color: createElementSchema().optional(),
      category: z.enum([
        "measurement",
        "setting",
        "calculation",
        "unspecified",
      ]),
      _category: createElementSchema().optional(),
      measurementPeriod: createTimingSchema().optional(),
      calibration: z.array(createDeviceMetricCalibrationSchema()).optional(),
    });

    return baseSchema;
  });
}
