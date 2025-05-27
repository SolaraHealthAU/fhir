import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceSampleSizeSchema() {
  const baseSchema: z.ZodType<types.EvidenceSampleSize> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    numberOfStudies: primitives.createUnsignedIntSchema().optional(),
    _numberOfStudies: z.lazy(() => createElementSchema()).optional(),
    numberOfParticipants: primitives.createUnsignedIntSchema().optional(),
    _numberOfParticipants: z.lazy(() => createElementSchema()).optional(),
    knownDataCount: primitives.createUnsignedIntSchema().optional(),
    _knownDataCount: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
