import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionLinkSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionLink> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    relation: z.lazy(() => createCodingSchema()),
    relatedDevice: z.lazy(() => createCodeableReferenceSchema()),
  });

  return baseSchema;
}
