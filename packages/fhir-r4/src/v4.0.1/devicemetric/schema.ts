import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.DeviceMetric> = z.object({
    resourceType: z.literal("DeviceMetric"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    unit: z.lazy(() => createCodeableConceptSchema()).optional(),
    source: z.lazy(() => createReferenceSchema()).optional(),
    parent: z.lazy(() => createReferenceSchema()).optional(),
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
    category: z.enum(["measurement", "setting", "calculation", "unspecified"]),
    _category: z.lazy(() => createElementSchema()).optional(),
    measurementPeriod: z.lazy(() => createTimingSchema()).optional(),
    calibration: z
      .array(z.lazy(() => createDeviceMetricCalibrationSchema()))
      .optional(),
  });

  return baseSchema;
}
