import type { Extension, CodeableConcept, Element, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitFinancial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  allowedUnsignedInt?: number;

  _allowedUnsignedInt?: Element;

  allowedString?: string;

  _allowedString?: Element;

  allowedMoney?: Money;

  usedUnsignedInt?: number;

  _usedUnsignedInt?: Element;

  usedMoney?: Money;
}
