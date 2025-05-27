import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  CodeableReference,
  Reference,
  Period,
  Duration,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { EncounterParticipant } from "../encounterparticipant/types";
import type { VirtualServiceDetail } from "../virtualservicedetail/types";
import type { EncounterReason } from "../encounterreason/types";
import type { EncounterDiagnosis } from "../encounterdiagnosis/types";
import type { EncounterAdmission } from "../encounteradmission/types";
import type { EncounterLocation } from "../encounterlocation/types";

/** Generated from FHIR JSON Schema */

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.  Encounter is primarily used to record information about the actual activities that occurred, where Appointment is used to record planned activities. */
export interface Encounter {
  resourceType: `Encounter`;

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

  class?: CodeableConcept[];

  priority?: CodeableConcept;

  type?: CodeableConcept[];

  serviceType?: CodeableReference[];

  subject?: Reference;

  subjectStatus?: CodeableConcept;

  episodeOfCare?: Reference[];

  basedOn?: Reference[];

  careTeam?: Reference[];

  partOf?: Reference;

  serviceProvider?: Reference;

  participant?: EncounterParticipant[];

  appointment?: Reference[];

  virtualService?: VirtualServiceDetail[];

  actualPeriod?: Period;

  plannedStartDate?: string;

  _plannedStartDate?: Element;

  plannedEndDate?: string;

  _plannedEndDate?: Element;

  length?: Duration;

  reason?: EncounterReason[];

  diagnosis?: EncounterDiagnosis[];

  account?: Reference[];

  dietPreference?: CodeableConcept[];

  specialArrangement?: CodeableConcept[];

  specialCourtesy?: CodeableConcept[];

  admission?: EncounterAdmission;

  location?: EncounterLocation[];
}
