import type { Extension, CodeableConcept, Element, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponseBenefit {
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

  usedString?: string;

  _usedString?: Element;

  usedMoney?: Money;
}
