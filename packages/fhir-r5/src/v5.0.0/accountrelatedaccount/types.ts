import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface AccountRelatedAccount {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  relationship?: CodeableConcept;

  account: Reference;
}
