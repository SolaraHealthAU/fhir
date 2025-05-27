import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ClinicalImpressionFinding } from "../clinicalimpressionfinding/types";

/** Generated from FHIR JSON Schema */

/** A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score. */
export interface ClinicalImpression {
  resourceType: `ClinicalImpression`;

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

  statusReason?: CodeableConcept;

  description?: string;

  _description?: Element;

  subject: Reference;

  encounter?: Reference;

  effectiveDateTime?: string;

  _effectiveDateTime?: Element;

  effectivePeriod?: Period;

  date?: string;

  _date?: Element;

  performer?: Reference;

  previous?: Reference;

  problem?: Reference[];

  changePattern?: CodeableConcept;

  protocol?: string[];

  _protocol?: Element[];

  summary?: string;

  _summary?: Element;

  finding?: ClinicalImpressionFinding[];

  prognosisCodeableConcept?: CodeableConcept[];

  prognosisReference?: Reference[];

  supportingInfo?: Reference[];

  note?: Annotation[];
}
