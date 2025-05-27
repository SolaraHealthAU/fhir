import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseInsurance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  focal?: boolean;

  _focal?: Element;

  coverage: Reference;

  businessArrangement?: string;

  _businessArrangement?: Element;

  claimResponse?: Reference;
}
