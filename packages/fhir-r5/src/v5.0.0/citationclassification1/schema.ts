import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCitationClassification1Schema() {
  const baseSchema: z.ZodType<types.CitationClassification1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    classifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    artifactAssessment: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
  });

  return baseSchema;
}
