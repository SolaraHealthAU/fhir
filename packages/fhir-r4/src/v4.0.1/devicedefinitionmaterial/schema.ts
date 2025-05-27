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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        substance: createCodeableConceptSchema(),
        alternate: primitives.getBooleanSchema().optional(),
        _alternate: z.lazy(() => createElementSchema()).optional(),
        allergenicIndicator: primitives.getBooleanSchema().optional(),
        _allergenicIndicator: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
