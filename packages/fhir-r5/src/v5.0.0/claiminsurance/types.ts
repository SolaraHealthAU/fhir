import type { Extension, Element, Identifier, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimInsurance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  focal?: boolean;

  _focal?: Element;

  identifier?: Identifier;

  coverage: Reference;

  businessArrangement?: string;

  _businessArrangement?: Element;

  preAuthRef?: string[];

  _preAuthRef?: Element[];

  claimResponse?: Reference;
}
