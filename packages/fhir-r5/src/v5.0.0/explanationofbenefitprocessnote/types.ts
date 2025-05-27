import type { Extension, Element, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitProcessNote {
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
