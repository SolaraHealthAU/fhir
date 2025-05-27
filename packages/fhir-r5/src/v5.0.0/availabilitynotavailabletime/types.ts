import type { Extension, Element, Period } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Availability data for an {item}. */
export interface AvailabilityNotAvailableTime {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** Reason presented to the user explaining why time not available. */
  description?: string;

  _description?: Element;
  /** Service not available during this period. */
  during?: Period;
}
