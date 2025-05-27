import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createBodyStructureBodyLandmarkOrientationSchema } from "../bodystructurebodylandmarkorientation/schema";

/* Generated from FHIR JSON Schema */

export function createBodyStructureIncludedStructureSchema() {
  const baseSchema: z.ZodType<types.BodyStructureIncludedStructure> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    structure: z.lazy(() => createCodeableConceptSchema()),
    laterality: z.lazy(() => createCodeableConceptSchema()).optional(),
    bodyLandmarkOrientation: z
      .array(z.lazy(() => createBodyStructureBodyLandmarkOrientationSchema()))
      .optional(),
    spatialReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    qualifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
