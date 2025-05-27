import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface PersonCommunication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language: CodeableConcept;

  preferred?: boolean;

  _preferred?: Element;
}
