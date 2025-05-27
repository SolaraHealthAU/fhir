import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createMedicationKnowledgeDosageSchema } from "../medicationknowledgedosage/schema";
import { createMedicationKnowledgePatientCharacteristicsSchema } from "../medicationknowledgepatientcharacteristics/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeAdministrationGuidelinesSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeAdministrationGuidelines> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      dosage: z
        .array(z.lazy(() => createMedicationKnowledgeDosageSchema()))
        .optional(),
      indicationCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      indicationReference: z.lazy(() => createReferenceSchema()).optional(),
      patientCharacteristics: z
        .array(
          z.lazy(() => createMedicationKnowledgePatientCharacteristicsSchema()),
        )
        .optional(),
    });

  return baseSchema;
}
