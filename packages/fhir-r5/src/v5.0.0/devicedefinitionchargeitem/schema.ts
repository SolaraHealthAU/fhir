import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createQuantitySchema,
  createPeriodSchema,
  createUsageContextSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionChargeItemSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionChargeItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    chargeItemCode: z.lazy(() => createCodeableReferenceSchema()),
    count: z.lazy(() => createQuantitySchema()),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
  });

  return baseSchema;
}
