import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimDiagnosis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  diagnosisCodeableConcept?: CodeableConcept;

  diagnosisReference?: Reference;

  type?: CodeableConcept[];

  onAdmission?: CodeableConcept;
}
