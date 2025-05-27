import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { RiskAssessmentPrediction } from "../riskassessmentprediction/types";

/** Generated from FHIR JSON Schema */

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface RiskAssessment {
  resourceType: `RiskAssessment`;

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

  basedOn?: Reference;

  parent?: Reference;

  status?: string;

  _status?: Element;

  method?: CodeableConcept;

  code?: CodeableConcept;

  subject: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  condition?: Reference;

  performer?: Reference;

  reason?: CodeableReference[];

  basis?: Reference[];

  prediction?: RiskAssessmentPrediction[];

  mitigation?: string;

  _mitigation?: Element;

  note?: Annotation[];
}
