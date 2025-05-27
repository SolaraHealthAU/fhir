import type { Extension, Element, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseProcessNote {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  number?: number;

  _number?: Element;

  type?: CodeableConcept;

  text?: string;

  _text?: Element;

  language?: CodeableConcept;
}
