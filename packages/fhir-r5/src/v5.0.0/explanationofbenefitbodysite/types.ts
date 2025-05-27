import type {
  Extension,
  CodeableReference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitBodySite {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  site: CodeableReference[];

  subSite?: CodeableConcept[];
}
