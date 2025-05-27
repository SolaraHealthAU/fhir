import type { Extension, CodeableReference } from "../core/types";
import type { MedicationKnowledgeDosingGuideline } from "../medicationknowledgedosingguideline/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeIndicationGuideline {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  indication?: CodeableReference[];

  dosingGuideline?: MedicationKnowledgeDosingGuideline[];
}
