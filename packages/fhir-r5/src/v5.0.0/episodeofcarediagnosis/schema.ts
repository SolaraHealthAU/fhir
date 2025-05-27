import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEpisodeOfCareDiagnosisSchema() {
  const baseSchema: z.ZodType<types.EpisodeOfCareDiagnosis> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    condition: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    use: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
