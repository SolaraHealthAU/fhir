import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Age,
  Period,
  Range,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { AllergyIntoleranceParticipant } from "../allergyintoleranceparticipant/types";
import type { AllergyIntoleranceReaction } from "../allergyintolerancereaction/types";

/** Generated from FHIR JSON Schema */

/** Risk of harmful or undesirable physiological response which is specific to an individual and associated with exposure to a substance. */
export interface AllergyIntolerance {
  resourceType: `AllergyIntolerance`;

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

  clinicalStatus?: CodeableConcept;

  verificationStatus?: CodeableConcept;

  type?: CodeableConcept;

  category?: string[];

  _category?: Element[];

  criticality?: string;

  _criticality?: Element;

  code?: CodeableConcept;

  patient: Reference;

  encounter?: Reference;

  onsetDateTime?: string;

  _onsetDateTime?: Element;

  onsetAge?: Age;

  onsetPeriod?: Period;

  onsetRange?: Range;

  onsetString?: string;

  _onsetString?: Element;

  recordedDate?: string;

  _recordedDate?: Element;

  participant?: AllergyIntoleranceParticipant[];

  lastOccurrence?: string;

  _lastOccurrence?: Element;

  note?: Annotation[];

  reaction?: AllergyIntoleranceReaction[];
}
