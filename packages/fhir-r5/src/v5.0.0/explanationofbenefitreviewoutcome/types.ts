import type {
  Extension,
  CodeableConcept,
  Element,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitReviewOutcome {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  decision?: CodeableConcept;

  reason?: CodeableConcept[];

  preAuthRef?: string;

  _preAuthRef?: Element;

  preAuthPeriod?: Period;
}
