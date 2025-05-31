import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEpisodeOfCareDiagnosisSchema() {
  return getCachedSchema("EpisodeOfCareDiagnosis", () => {
    const baseSchema: z.ZodType<types.EpisodeOfCareDiagnosis> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      condition: createReferenceSchema(),
      role: createCodeableConceptSchema().optional(),
      rank: primitives.getPositiveIntSchema().optional(),
      _rank: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
