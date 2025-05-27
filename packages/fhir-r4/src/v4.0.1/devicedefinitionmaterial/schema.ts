import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionMaterialSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionMaterial> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    substance: z.lazy(() => createCodeableConceptSchema()),
    alternate: primitives.createBooleanSchema().optional(),
    _alternate: z.lazy(() => createElementSchema()).optional(),
    allergenicIndicator: primitives.createBooleanSchema().optional(),
    _allergenicIndicator: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
