import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createDeviceDefinitionDistributorSchema } from "../devicedefinitiondistributor/schema";
import { createDeviceDefinitionUdiDeviceIdentifierSchema } from "../devicedefinitionudideviceidentifier/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionPackagingSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionPackaging> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    count: primitives.createIntegerSchema().optional(),
    _count: z.lazy(() => createElementSchema()).optional(),
    distributor: z
      .array(z.lazy(() => createDeviceDefinitionDistributorSchema()))
      .optional(),
    udiDeviceIdentifier: z
      .array(z.lazy(() => createDeviceDefinitionUdiDeviceIdentifierSchema()))
      .optional(),
    packaging: z
      .array(z.lazy(() => createDeviceDefinitionPackagingSchema()))
      .optional(),
  });

  return baseSchema;
}
