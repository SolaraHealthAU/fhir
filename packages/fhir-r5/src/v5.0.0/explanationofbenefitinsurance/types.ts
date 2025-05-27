import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitInsurance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  focal?: boolean;

  _focal?: Element;

  coverage: Reference;

  preAuthRef?: string[];

  _preAuthRef?: Element[];
}
