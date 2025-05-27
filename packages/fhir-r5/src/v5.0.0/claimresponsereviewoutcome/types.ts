import type {
  Extension,
  CodeableConcept,
  Element,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseReviewOutcome {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  decision?: CodeableConcept;

  reason?: CodeableConcept[];

  preAuthRef?: string;

  _preAuthRef?: Element;

  preAuthPeriod?: Period;
}
