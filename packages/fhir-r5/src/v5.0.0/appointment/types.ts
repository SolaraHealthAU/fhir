import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  CodeableReference,
  Reference,
  Period,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { VirtualServiceDetail } from "../virtualservicedetail/types";
import type { AppointmentParticipant } from "../appointmentparticipant/types";
import type { AppointmentRecurrenceTemplate } from "../appointmentrecurrencetemplate/types";

/** Generated from FHIR JSON Schema */

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface Appointment {
  resourceType: `Appointment`;

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

  status?: string;

  _status?: Element;

  cancellationReason?: CodeableConcept;

  class?: CodeableConcept[];

  serviceCategory?: CodeableConcept[];

  serviceType?: CodeableReference[];

  specialty?: CodeableConcept[];

  appointmentType?: CodeableConcept;

  reason?: CodeableReference[];

  priority?: CodeableConcept;

  description?: string;

  _description?: Element;

  replaces?: Reference[];

  virtualService?: VirtualServiceDetail[];

  supportingInformation?: Reference[];

  previousAppointment?: Reference;

  originatingAppointment?: Reference;

  start?: string;

  _start?: Element;

  end?: string;

  _end?: Element;

  minutesDuration?: number;

  _minutesDuration?: Element;

  requestedPeriod?: Period[];

  slot?: Reference[];

  account?: Reference[];

  created?: string;

  _created?: Element;

  cancellationDate?: string;

  _cancellationDate?: Element;

  note?: Annotation[];

  patientInstruction?: CodeableReference[];

  basedOn?: Reference[];

  subject?: Reference;

  participant: AppointmentParticipant[];

  recurrenceId?: number;

  _recurrenceId?: Element;

  occurrenceChanged?: boolean;

  _occurrenceChanged?: Element;

  recurrenceTemplate?: AppointmentRecurrenceTemplate[];
}
