import type { Extension, CodeableConcept, Element, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface AccountBalance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  aggregate?: CodeableConcept;

  term?: CodeableConcept;

  estimate?: boolean;

  _estimate?: Element;

  amount: Money;
}
