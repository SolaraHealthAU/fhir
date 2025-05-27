import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createRelatedArtifactSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionConformsToSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionConformsTo> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    specification: z.lazy(() => createCodeableConceptSchema()),
    version: z.array(primitives.createStringSchema()).optional(),
    _version: z.array(z.lazy(() => createElementSchema())).optional(),
    source: z.array(z.lazy(() => createRelatedArtifactSchema())).optional(),
  });

  return baseSchema;
}
