import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitCareTeam {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  provider: Reference;

  responsible?: boolean;

  _responsible?: Element;

  role?: CodeableConcept;

  specialty?: CodeableConcept;
}
