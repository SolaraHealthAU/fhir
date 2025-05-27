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

export function createDeviceDefinitionVersionSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionVersion> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    component: z.lazy(() => createIdentifierSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
