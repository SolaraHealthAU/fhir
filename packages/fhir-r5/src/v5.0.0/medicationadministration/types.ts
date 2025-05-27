import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Period,
  Timing,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationAdministrationPerformer } from "../medicationadministrationperformer/types";
import type { MedicationAdministrationDosage } from "../medicationadministrationdosage/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. */
export interface MedicationAdministration {
  resourceType: `MedicationAdministration`;

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

  basedOn?: Reference[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept[];

  category?: CodeableConcept[];

  medication: CodeableReference;

  subject: Reference;

  encounter?: Reference;

  supportingInformation?: Reference[];

  occurenceDateTime?: string;

  _occurenceDateTime?: Element;

  occurencePeriod?: Period;

  occurenceTiming?: Timing;

  recorded?: string;

  _recorded?: Element;

  isSubPotent?: boolean;

  _isSubPotent?: Element;

  subPotentReason?: CodeableConcept[];

  performer?: MedicationAdministrationPerformer[];

  reason?: CodeableReference[];

  request?: Reference;

  device?: CodeableReference[];

  note?: Annotation[];

  dosage?: MedicationAdministrationDosage;

  eventHistory?: Reference[];
}
