import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FamilyMemberHistoryParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: Reference;
}
