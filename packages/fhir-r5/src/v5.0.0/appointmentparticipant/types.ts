import type {
  Extension,
  CodeableConcept,
  Period,
  Reference,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface AppointmentParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept[];

  period?: Period;

  actor?: Reference;

  required?: boolean;

  _required?: Element;

  status?: string;

  _status?: Element;
}
