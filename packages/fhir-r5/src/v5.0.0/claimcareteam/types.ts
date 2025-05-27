import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimCareTeam {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  provider: Reference;

  responsible?: boolean;

  _responsible?: Element;

  role?: CodeableConcept;

  specialty?: CodeableConcept;
}
