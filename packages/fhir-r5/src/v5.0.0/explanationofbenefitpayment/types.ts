import type {
  Extension,
  CodeableConcept,
  Money,
  Element,
  Identifier,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitPayment {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  adjustment?: Money;

  adjustmentReason?: CodeableConcept;

  date?: string;

  _date?: Element;

  amount?: Money;

  identifier?: Identifier;
}
