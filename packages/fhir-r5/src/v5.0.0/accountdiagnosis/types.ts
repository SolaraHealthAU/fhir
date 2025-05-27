import type {
  Extension,
  Element,
  CodeableReference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface AccountDiagnosis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  condition: CodeableReference;

  dateOfDiagnosis?: string;

  _dateOfDiagnosis?: Element;

  type?: CodeableConcept[];

  onAdmission?: boolean;

  _onAdmission?: Element;

  packageCode?: CodeableConcept[];
}
