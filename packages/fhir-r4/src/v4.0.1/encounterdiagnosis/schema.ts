import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterDiagnosisSchema() {
  const baseSchema: z.ZodType<types.EncounterDiagnosis> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    condition: z.lazy(() => createReferenceSchema()),
    use: z.lazy(() => createCodeableConceptSchema()).optional(),
    rank: primitives.createPositiveIntSchema().optional(),
    _rank: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
