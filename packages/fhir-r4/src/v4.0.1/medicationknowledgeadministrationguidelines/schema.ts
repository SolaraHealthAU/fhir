import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createMedicationKnowledgeDosageSchema } from "../medicationknowledgedosage/schema";
import { createMedicationKnowledgePatientCharacteristicsSchema } from "../medicationknowledgepatientcharacteristics/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeAdministrationGuidelinesSchema() {
  return getCachedSchema("MedicationKnowledgeAdministrationGuidelines", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeAdministrationGuidelines> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        dosage: z.array(createMedicationKnowledgeDosageSchema()).optional(),
        indicationCodeableConcept: createCodeableConceptSchema().optional(),
        indicationReference: createReferenceSchema().optional(),
        patientCharacteristics: z
          .array(createMedicationKnowledgePatientCharacteristicsSchema())
          .optional(),
      });

    return baseSchema;
  });
}
