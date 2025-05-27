import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface AppointmentMonthlyTemplate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  dayOfMonth?: number;

  _dayOfMonth?: Element;

  nthWeekOfMonth?: Coding;

  dayOfWeek?: Coding;

  monthInterval?: number;

  _monthInterval?: Element;
}
