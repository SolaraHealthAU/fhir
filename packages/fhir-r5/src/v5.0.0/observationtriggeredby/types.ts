import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface ObservationTriggeredBy {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  observation: Reference;

  type?: string;

  _type?: Element;

  reason?: string;

  _reason?: Element;
}
