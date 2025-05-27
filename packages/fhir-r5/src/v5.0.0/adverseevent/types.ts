import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Timing,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { AdverseEventParticipant } from "../adverseeventparticipant/types";
import type { AdverseEventSuspectEntity } from "../adverseeventsuspectentity/types";
import type { AdverseEventContributingFactor } from "../adverseeventcontributingfactor/types";
import type { AdverseEventPreventiveAction } from "../adverseeventpreventiveaction/types";
import type { AdverseEventMitigatingAction } from "../adverseeventmitigatingaction/types";
import type { AdverseEventSupportingInfo } from "../adverseeventsupportinginfo/types";

/** Generated from FHIR JSON Schema */

/** An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints. */
export interface AdverseEvent {
  resourceType: `AdverseEvent`;

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

  actuality?: string;

  _actuality?: Element;

  category?: CodeableConcept[];

  code?: CodeableConcept;

  subject: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  detected?: string;

  _detected?: Element;

  recordedDate?: string;

  _recordedDate?: Element;

  resultingEffect?: Reference[];

  location?: Reference;

  seriousness?: CodeableConcept;

  outcome?: CodeableConcept[];

  recorder?: Reference;

  participant?: AdverseEventParticipant[];

  study?: Reference[];

  expectedInResearchStudy?: boolean;

  _expectedInResearchStudy?: Element;

  suspectEntity?: AdverseEventSuspectEntity[];

  contributingFactor?: AdverseEventContributingFactor[];

  preventiveAction?: AdverseEventPreventiveAction[];

  mitigatingAction?: AdverseEventMitigatingAction[];

  supportingInfo?: AdverseEventSupportingInfo[];

  note?: Annotation[];
}
