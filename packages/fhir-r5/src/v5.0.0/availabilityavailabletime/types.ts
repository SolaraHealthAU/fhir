import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Availability data for an {item}. */
export interface AvailabilityAvailableTime {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** mon | tue | wed | thu | fri | sat | sun. */
  daysOfWeek?: string[];

  _daysOfWeek?: Element[];
  /** Always available? i.e. 24 hour service. */
  allDay?: boolean;

  _allDay?: Element;
  /** Opening time of day (ignored if allDay = true). */
  availableStartTime?: string;

  _availableStartTime?: Element;
  /** Closing time of day (ignored if allDay = true). */
  availableEndTime?: string;

  _availableEndTime?: Element;
}
