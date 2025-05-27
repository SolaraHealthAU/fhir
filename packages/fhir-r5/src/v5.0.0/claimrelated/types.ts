import type {
  Extension,
  Reference,
  CodeableConcept,
  Identifier,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimRelated {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  claim?: Reference;

  relationship?: CodeableConcept;

  reference?: Identifier;
}
