import type {
  Extension,
  Element,
  CodeableConcept,
  Address,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimAccident {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  date?: string;

  _date?: Element;

  type?: CodeableConcept;

  locationAddress?: Address;

  locationReference?: Reference;
}
