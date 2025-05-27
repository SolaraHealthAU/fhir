import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionMarketDistributionSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionMarketDistribution> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      marketPeriod: z.lazy(() => createPeriodSchema()),
      subJurisdiction: primitives.createUriSchema().optional(),
      _subJurisdiction: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
