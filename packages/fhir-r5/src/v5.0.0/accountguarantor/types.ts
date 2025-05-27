import type { Extension, Reference, Element, Period } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface AccountGuarantor {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  party: Reference;

  onHold?: boolean;

  _onHold?: Element;

  period?: Period;
}
