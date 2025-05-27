import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createReferenceSchema,
  createRelatedArtifactSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createArtifactAssessmentContentSchema() {
  const baseSchema: z.ZodType<types.ArtifactAssessmentContent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    informationType: primitives.createCodeSchema().optional(),
    _informationType: z.lazy(() => createElementSchema()).optional(),
    summary: primitives.createMarkdownSchema().optional(),
    _summary: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    classifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    path: z.array(primitives.createUriSchema()).optional(),
    _path: z.array(z.lazy(() => createElementSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    freeToShare: primitives.createBooleanSchema().optional(),
    _freeToShare: z.lazy(() => createElementSchema()).optional(),
    component: z
      .array(z.lazy(() => createArtifactAssessmentContentSchema()))
      .optional(),
  });

  return baseSchema;
}
