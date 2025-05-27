import type {
  Extension,
  Reference,
  CodeableConcept,
  Identifier,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitRelated {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  claim?: Reference;

  relationship?: CodeableConcept;

  reference?: Identifier;
}
