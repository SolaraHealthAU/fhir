import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Timing,
  Period,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceUsageAdherence } from "../deviceusageadherence/types";

/** Generated from FHIR JSON Schema */

/** A record of a device being used by a patient where the record is the result of a report from the patient or a clinician. */
export interface DeviceUsage {
  resourceType: `DeviceUsage`;

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

  status?: string;

  _status?: Element;

  category?: CodeableConcept[];

  patient: Reference;

  derivedFrom?: Reference[];

  context?: Reference;

  timingTiming?: Timing;

  timingPeriod?: Period;

  timingDateTime?: string;

  _timingDateTime?: Element;

  dateAsserted?: string;

  _dateAsserted?: Element;

  usageStatus?: CodeableConcept;

  usageReason?: CodeableConcept[];

  adherence?: DeviceUsageAdherence;

  informationSource?: Reference;

  device: CodeableReference;

  reason?: CodeableReference[];

  bodySite?: CodeableReference;

  note?: Annotation[];
}
