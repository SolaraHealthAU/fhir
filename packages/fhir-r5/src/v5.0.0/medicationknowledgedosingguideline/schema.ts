import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicationKnowledgeDosageSchema } from "../medicationknowledgedosage/schema";
import { createMedicationKnowledgePatientCharacteristicSchema } from "../medicationknowledgepatientcharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeDosingGuidelineSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeDosingGuideline> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      treatmentIntent: z.lazy(() => createCodeableConceptSchema()).optional(),
      dosage: z
        .array(z.lazy(() => createMedicationKnowledgeDosageSchema()))
        .optional(),
      administrationTreatment: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      patientCharacteristic: z
        .array(
          z.lazy(() => createMedicationKnowledgePatientCharacteristicSchema()),
        )
        .optional(),
    });

  return baseSchema;
}
