import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createDosageSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeDosageSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeDosage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    dosage: z.array(z.lazy(() => createDosageSchema())),
  });

  return baseSchema;
}
