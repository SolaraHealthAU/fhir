import type { Extension, Reference, CodeableConcept } from "../core/types";
import type { MedicationKnowledgeSubstitution } from "../medicationknowledgesubstitution/types";
import type { MedicationKnowledgeMaxDispense } from "../medicationknowledgemaxdispense/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeRegulatory {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  regulatoryAuthority: Reference;

  substitution?: MedicationKnowledgeSubstitution[];

  schedule?: CodeableConcept[];

  maxDispense?: MedicationKnowledgeMaxDispense;
}
