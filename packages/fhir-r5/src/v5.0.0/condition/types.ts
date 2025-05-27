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
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ConditionParticipant } from "../conditionparticipant/types";
import type { ConditionStage } from "../conditionstage/types";

/** Generated from FHIR JSON Schema */

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface Condition {
  resourceType: `Condition`;

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

  clinicalStatus: CodeableConcept;

  verificationStatus?: CodeableConcept;

  category?: CodeableConcept[];

  severity?: CodeableConcept;

  code?: CodeableConcept;

  bodySite?: CodeableConcept[];

  subject: Reference;

  encounter?: Reference;

  onsetDateTime?: string;

  _onsetDateTime?: Element;

  onsetAge?: Age;

  onsetPeriod?: Period;

  onsetRange?: Range;

  onsetString?: string;

  _onsetString?: Element;

  abatementDateTime?: string;

  _abatementDateTime?: Element;

  abatementAge?: Age;

  abatementPeriod?: Period;

  abatementRange?: Range;

  abatementString?: string;

  _abatementString?: Element;

  recordedDate?: string;

  _recordedDate?: Element;

  participant?: ConditionParticipant[];

  stage?: ConditionStage[];

  evidence?: CodeableReference[];

  note?: Annotation[];
}
