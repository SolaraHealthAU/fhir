import type {
  Extension,
  Element,
  CodeableConcept,
  Address,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitAccident {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  date?: string;

  _date?: Element;

  type?: CodeableConcept;

  locationAddress?: Address;

  locationReference?: Reference;
}
