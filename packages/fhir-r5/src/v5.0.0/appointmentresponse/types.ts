import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
export interface AppointmentResponse {
  resourceType: `AppointmentResponse`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  appointment: Reference;

  proposedNewTime?: boolean;

  _proposedNewTime?: Element;

  start?: string;

  _start?: Element;

  end?: string;

  _end?: Element;

  participantType?: CodeableConcept[];

  actor?: Reference;

  participantStatus?: string;

  _participantStatus?: Element;

  comment?: string;

  _comment?: Element;

  recurring?: boolean;

  _recurring?: Element;

  occurrenceDate?: string;

  _occurrenceDate?: Element;

  recurrenceId?: number;

  _recurrenceId?: Element;
}
