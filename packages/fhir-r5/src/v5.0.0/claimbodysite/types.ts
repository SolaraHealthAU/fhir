import type {
  Extension,
  CodeableReference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimBodySite {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  site: CodeableReference[];

  subSite?: CodeableConcept[];
}
