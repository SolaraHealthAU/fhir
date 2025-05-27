import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Risk of harmful or undesirable physiological response which is specific to an individual and associated with exposure to a substance. */
export interface AllergyIntoleranceParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: Reference;
}
