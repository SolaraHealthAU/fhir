import type {
  Meta,
  Element,
  Extension,
  Reference,
  Identifier,
  CodeableConcept,
  CodeableReference,
  Period,
  Duration,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { EncounterHistoryLocation } from "../encounterhistorylocation/types";

/** Generated from FHIR JSON Schema */

/** A record of significant events/milestones key data throughout the history of an Encounter, often tracked for specific purposes such as billing. */
export interface EncounterHistory {
  resourceType: `EncounterHistory`;

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

  encounter?: Reference;

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  class: CodeableConcept;

  type?: CodeableConcept[];

  serviceType?: CodeableReference[];

  subject?: Reference;

  subjectStatus?: CodeableConcept;

  actualPeriod?: Period;

  plannedStartDate?: string;

  _plannedStartDate?: Element;

  plannedEndDate?: string;

  _plannedEndDate?: Element;

  length?: Duration;

  location?: EncounterHistoryLocation[];
}
