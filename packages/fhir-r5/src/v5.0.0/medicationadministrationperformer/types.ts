import type {
  Extension,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. */
export interface MedicationAdministrationPerformer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: CodeableReference;
}
