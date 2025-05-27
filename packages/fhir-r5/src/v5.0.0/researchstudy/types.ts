import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  RelatedArtifact,
  CodeableConcept,
  CodeableReference,
  Period,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ResearchStudyLabel } from "../researchstudylabel/types";
import type { ResearchStudyAssociatedParty } from "../researchstudyassociatedparty/types";
import type { ResearchStudyProgressStatus } from "../researchstudyprogressstatus/types";
import type { ResearchStudyRecruitment } from "../researchstudyrecruitment/types";
import type { ResearchStudyComparisonGroup } from "../researchstudycomparisongroup/types";
import type { ResearchStudyObjective } from "../researchstudyobjective/types";
import type { ResearchStudyOutcomeMeasure } from "../researchstudyoutcomemeasure/types";

/** Generated from FHIR JSON Schema */

/** A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future. */
export interface ResearchStudy {
  resourceType: `ResearchStudy`;

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

  url?: string;

  _url?: Element;

  identifier?: Identifier[];

  version?: string;

  _version?: Element;

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  label?: ResearchStudyLabel[];

  protocol?: Reference[];

  partOf?: Reference[];

  relatedArtifact?: RelatedArtifact[];

  date?: string;

  _date?: Element;

  status?: string;

  _status?: Element;

  primaryPurposeType?: CodeableConcept;

  phase?: CodeableConcept;

  studyDesign?: CodeableConcept[];

  focus?: CodeableReference[];

  condition?: CodeableConcept[];

  keyword?: CodeableConcept[];

  region?: CodeableConcept[];

  descriptionSummary?: string;

  _descriptionSummary?: Element;

  description?: string;

  _description?: Element;

  period?: Period;

  site?: Reference[];

  note?: Annotation[];

  classifier?: CodeableConcept[];

  associatedParty?: ResearchStudyAssociatedParty[];

  progressStatus?: ResearchStudyProgressStatus[];

  whyStopped?: CodeableConcept;

  recruitment?: ResearchStudyRecruitment;

  comparisonGroup?: ResearchStudyComparisonGroup[];

  objective?: ResearchStudyObjective[];

  outcomeMeasure?: ResearchStudyOutcomeMeasure[];

  result?: Reference[];
}
