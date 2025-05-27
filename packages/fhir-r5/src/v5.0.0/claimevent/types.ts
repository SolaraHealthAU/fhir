import type {
  Extension,
  CodeableConcept,
  Element,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimEvent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  whenDateTime?: string;

  _whenDateTime?: Element;

  whenPeriod?: Period;
}
