import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createUsageContextSchema,
  createElementSchema,
  createRelatedArtifactSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionGuidelineSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinitionGuideline> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    usageInstruction: primitives.createMarkdownSchema().optional(),
    _usageInstruction: z.lazy(() => createElementSchema()).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    indication: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    contraindication: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    warning: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    intendedUse: primitives.createStringSchema().optional(),
    _intendedUse: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
