import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceVersionSchema() {
  const baseSchema: z.ZodType<types.DeviceVersion> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    component: z.lazy(() => createIdentifierSchema()).optional(),
    installDate: primitives.createDateTimeSchema().optional(),
    _installDate: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
