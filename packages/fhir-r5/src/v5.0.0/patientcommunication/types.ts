import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface PatientCommunication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language: CodeableConcept;

  preferred?: boolean;

  _preferred?: Element;
}
