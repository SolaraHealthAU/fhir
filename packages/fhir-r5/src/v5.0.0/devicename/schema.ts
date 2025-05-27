import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceNameSchema() {
  const baseSchema: z.ZodType<types.DeviceName> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createBooleanSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
