import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
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
    device: z.lazy(() => createReferenceSchema()),
    operationalStatus: primitives.createCodeSchema().optional(),
    _operationalStatus: z.lazy(() => createElementSchema()).optional(),
    color: primitives.createCodeSchema().optional(),
    _color: z.lazy(() => createElementSchema()).optional(),
    category: primitives.createCodeSchema().optional(),
    _category: z.lazy(() => createElementSchema()).optional(),
    measurementFrequency: z.lazy(() => createQuantitySchema()).optional(),
    calibration: z
      .array(z.lazy(() => createDeviceMetricCalibrationSchema()))
      .optional(),
  });

  return baseSchema;
}
