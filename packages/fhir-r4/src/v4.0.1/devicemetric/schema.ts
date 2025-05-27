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
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      type: createCodeableConceptSchema(),
      unit: createCodeableConceptSchema().optional(),
      source: createReferenceSchema().optional(),
      parent: createReferenceSchema().optional(),
      operationalStatus: z
        .enum(["on", "off", "standby", "entered-in-error"])
        .optional(),
      _operationalStatus: z.lazy(() => createElementSchema()).optional(),
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
      _color: z.lazy(() => createElementSchema()).optional(),
      category: z.enum([
        "measurement",
        "setting",
        "calculation",
        "unspecified",
      ]),
      _category: z.lazy(() => createElementSchema()).optional(),
      measurementPeriod: createTimingSchema().optional(),
      calibration: z.array(createDeviceMetricCalibrationSchema()).optional(),
    });

    return baseSchema;
  });
}
