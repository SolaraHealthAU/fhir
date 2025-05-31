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

export function createDeviceDefinitionMaterialSchema() {
  return getCachedSchema("DeviceDefinitionMaterial", () => {
    const baseSchema: z.ZodType<types.DeviceDefinitionMaterial> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        substance: createCodeableConceptSchema(),
        alternate: primitives.getBooleanSchema().optional(),
        _alternate: createElementSchema().optional(),
        allergenicIndicator: primitives.getBooleanSchema().optional(),
        _allergenicIndicator: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
