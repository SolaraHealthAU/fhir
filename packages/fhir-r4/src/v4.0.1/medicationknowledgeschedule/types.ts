import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeSchedule {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  schedule: CodeableConcept;
}
