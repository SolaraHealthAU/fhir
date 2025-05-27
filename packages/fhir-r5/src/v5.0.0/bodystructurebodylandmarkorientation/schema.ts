import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createBodyStructureDistanceFromLandmarkSchema } from "../bodystructuredistancefromlandmark/schema";

/* Generated from FHIR JSON Schema */

export function createBodyStructureBodyLandmarkOrientationSchema() {
  const baseSchema: z.ZodType<types.BodyStructureBodyLandmarkOrientation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      landmarkDescription: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      clockFacePosition: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      distanceFromLandmark: z
        .array(z.lazy(() => createBodyStructureDistanceFromLandmarkSchema()))
        .optional(),
      surfaceOrientation: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
    });

  return baseSchema;
}
