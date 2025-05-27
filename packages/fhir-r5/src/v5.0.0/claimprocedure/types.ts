import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimProcedure {
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
