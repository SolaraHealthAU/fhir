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

export function createEncounterDiagnosisSchema() {
  return getCachedSchema("EncounterDiagnosis", () => {
    const baseSchema: z.ZodType<types.EncounterDiagnosis> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      condition: createReferenceSchema(),
      use: createCodeableConceptSchema().optional(),
      rank: primitives.getPositiveIntSchema().optional(),
      _rank: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
