import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeMedicineClassificationSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeMedicineClassification> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      sourceString: z.string().optional(),
      _sourceString: z.lazy(() => createElementSchema()).optional(),
      sourceUri: z.string().optional(),
      _sourceUri: z.lazy(() => createElementSchema()).optional(),
      classification: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
    });

  return baseSchema;
}
