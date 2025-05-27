import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A person who is directly or indirectly involved in the provisioning of healthcare or related services. */
export interface PractitionerCommunication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language: CodeableConcept;

  preferred?: boolean;

  _preferred?: Element;
}
