import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceSpecializationSchema() {
  return getCachedSchema("DeviceSpecialization", () => {
    const baseSchema: z.ZodType<types.DeviceSpecialization> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      systemType: createCodeableConceptSchema(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
