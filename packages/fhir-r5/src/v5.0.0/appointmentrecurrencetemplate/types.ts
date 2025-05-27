import type { Extension, CodeableConcept, Element } from "../core/types";
import type { AppointmentWeeklyTemplate } from "../appointmentweeklytemplate/types";
import type { AppointmentMonthlyTemplate } from "../appointmentmonthlytemplate/types";
import type { AppointmentYearlyTemplate } from "../appointmentyearlytemplate/types";

/** Generated from FHIR JSON Schema */

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface AppointmentRecurrenceTemplate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  timezone?: CodeableConcept;

  recurrenceType: CodeableConcept;

  lastOccurrenceDate?: string;

  _lastOccurrenceDate?: Element;

  occurrenceCount?: number;

  _occurrenceCount?: Element;

  occurrenceDate?: string[];

  _occurrenceDate?: Element[];

  weeklyTemplate?: AppointmentWeeklyTemplate;

  monthlyTemplate?: AppointmentMonthlyTemplate;

  yearlyTemplate?: AppointmentYearlyTemplate;

  excludingDate?: string[];

  _excludingDate?: Element[];

  excludingRecurrenceId?: number[];

  _excludingRecurrenceId?: Element[];
}
