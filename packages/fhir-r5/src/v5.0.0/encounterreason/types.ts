import type {
  Extension,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.  Encounter is primarily used to record information about the actual activities that occurred, where Appointment is used to record planned activities. */
export interface EncounterReason {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  use?: CodeableConcept[];

  value?: CodeableReference[];
}
