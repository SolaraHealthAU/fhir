import type {
  Extension,
  Element,
  CodeableReference,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface AccountProcedure {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  code: CodeableReference;

  dateOfService?: string;

  _dateOfService?: Element;

  type?: CodeableConcept[];

  packageCode?: CodeableConcept[];

  device?: Reference[];
}
