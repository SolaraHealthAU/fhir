import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionClassificationSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionClassification> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    justification: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
  });

  return baseSchema;
}
