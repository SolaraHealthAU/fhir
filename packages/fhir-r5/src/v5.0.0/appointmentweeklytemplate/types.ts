import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface AppointmentWeeklyTemplate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  monday?: boolean;

  _monday?: Element;

  tuesday?: boolean;

  _tuesday?: Element;

  wednesday?: boolean;

  _wednesday?: Element;

  thursday?: boolean;

  _thursday?: Element;

  friday?: boolean;

  _friday?: Element;

  saturday?: boolean;

  _saturday?: Element;

  sunday?: boolean;

  _sunday?: Element;

  weekInterval?: number;

  _weekInterval?: Element;
}
