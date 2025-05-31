import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionCapabilitySchema() {
  return getCachedSchema("DeviceDefinitionCapability", () => {
    const baseSchema: z.ZodType<types.DeviceDefinitionCapability> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema(),
        description: z.array(createCodeableConceptSchema()).optional(),
      });

    return baseSchema;
  });
}
