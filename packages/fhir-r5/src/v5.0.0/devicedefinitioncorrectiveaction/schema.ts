import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionCorrectiveActionSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionCorrectiveAction> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      recall: primitives.createBooleanSchema().optional(),
      _recall: z.lazy(() => createElementSchema()).optional(),
      scope: primitives.createCodeSchema().optional(),
      _scope: z.lazy(() => createElementSchema()).optional(),
      period: z.lazy(() => createPeriodSchema()),
    });

  return baseSchema;
}
