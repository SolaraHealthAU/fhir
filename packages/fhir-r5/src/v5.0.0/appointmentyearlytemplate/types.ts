import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface AppointmentYearlyTemplate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  yearInterval?: number;

  _yearInterval?: Element;
}
