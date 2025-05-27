import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBodyStructureDistanceFromLandmarkSchema() {
  const baseSchema: z.ZodType<types.BodyStructureDistanceFromLandmark> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      device: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
      value: z.array(z.lazy(() => createQuantitySchema())).optional(),
    });

  return baseSchema;
}
