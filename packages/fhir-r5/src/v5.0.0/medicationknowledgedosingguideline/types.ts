import type { Extension, CodeableConcept } from "../core/types";
import type { MedicationKnowledgeDosage } from "../medicationknowledgedosage/types";
import type { MedicationKnowledgePatientCharacteristic } from "../medicationknowledgepatientcharacteristic/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeDosingGuideline {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  treatmentIntent?: CodeableConcept;

  dosage?: MedicationKnowledgeDosage[];

  administrationTreatment?: CodeableConcept;

  patientCharacteristic?: MedicationKnowledgePatientCharacteristic[];
}
