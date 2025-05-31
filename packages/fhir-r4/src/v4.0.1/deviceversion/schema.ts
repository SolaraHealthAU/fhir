import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceVersionSchema() {
  return getCachedSchema("DeviceVersion", () => {
    const baseSchema: z.ZodType<types.DeviceVersion> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      component: createIdentifierSchema().optional(),
      value: primitives.getStringSchema(),
      _value: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
