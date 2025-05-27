import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitProcedure {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  type?: CodeableConcept[];

  date?: string;

  _date?: Element;

  procedureCodeableConcept?: CodeableConcept;

  procedureReference?: Reference;

  udi?: Reference[];
}
