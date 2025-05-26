import type { Extension, CodeableConcept, Money, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitAdjudication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category: CodeableConcept;

  reason?: CodeableConcept;

  amount?: Money;

  value?: number;

  _value?: Element;
}
