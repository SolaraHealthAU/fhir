import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitDiagnosis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  diagnosisCodeableConcept?: CodeableConcept;

  diagnosisReference?: Reference;

  type?: CodeableConcept[];

  onAdmission?: CodeableConcept;
}
