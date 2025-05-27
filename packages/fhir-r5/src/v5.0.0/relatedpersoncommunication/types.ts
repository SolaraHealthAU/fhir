import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a person that is involved in a patient's health or the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface RelatedPersonCommunication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language: CodeableConcept;

  preferred?: boolean;

  _preferred?: Element;
}
