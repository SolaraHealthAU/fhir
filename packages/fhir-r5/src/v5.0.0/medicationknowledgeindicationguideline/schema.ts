import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createMedicationKnowledgeDosingGuidelineSchema } from "../medicationknowledgedosingguideline/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeIndicationGuidelineSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeIndicationGuideline> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      indication: z
        .array(z.lazy(() => createCodeableReferenceSchema()))
        .optional(),
      dosingGuideline: z
        .array(z.lazy(() => createMedicationKnowledgeDosingGuidelineSchema()))
        .optional(),
    });

  return baseSchema;
}
