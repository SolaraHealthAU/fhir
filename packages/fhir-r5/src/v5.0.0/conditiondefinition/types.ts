import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  ContactDetail,
  UsageContext,
  CodeableConcept,
  Period,
  RelatedArtifact,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ConditionDefinitionObservation } from "../conditiondefinitionobservation/types";
import type { ConditionDefinitionMedication } from "../conditiondefinitionmedication/types";
import type { ConditionDefinitionPrecondition } from "../conditiondefinitionprecondition/types";
import type { ConditionDefinitionQuestionnaire } from "../conditiondefinitionquestionnaire/types";
import type { ConditionDefinitionPlan } from "../conditiondefinitionplan/types";

/** Generated from FHIR JSON Schema */

/** A definition of a condition and information relevant to managing it. */
export interface ConditionDefinition {
  resourceType: `ConditionDefinition`;

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

  versionAlgorithmString?: string;

  _versionAlgorithmString?: Element;

  versionAlgorithmCoding?: Coding;

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  status?: string;

  _status?: Element;

  experimental?: boolean;

  _experimental?: Element;

  date?: string;

  _date?: Element;

  publisher?: string;

  _publisher?: Element;

  contact?: ContactDetail[];

  description?: string;

  _description?: Element;

  useContext?: UsageContext[];

  jurisdiction?: CodeableConcept[];

  purpose?: string;

  _purpose?: Element;

  copyright?: string;

  _copyright?: Element;

  copyrightLabel?: string;

  _copyrightLabel?: Element;

  approvalDate?: string;

  _approvalDate?: Element;

  lastReviewDate?: string;

  _lastReviewDate?: Element;

  effectivePeriod?: Period;

  topic?: CodeableConcept[];

  author?: ContactDetail[];

  editor?: ContactDetail[];

  reviewer?: ContactDetail[];

  endorser?: ContactDetail[];

  relatedArtifact?: RelatedArtifact[];

  subtitle?: string;

  _subtitle?: Element;

  code: CodeableConcept;

  severity?: CodeableConcept;

  bodySite?: CodeableConcept;

  stage?: CodeableConcept;

  hasSeverity?: boolean;

  _hasSeverity?: Element;

  hasBodySite?: boolean;

  _hasBodySite?: Element;

  hasStage?: boolean;

  _hasStage?: Element;

  definition?: string[];

  _definition?: Element[];

  observation?: ConditionDefinitionObservation[];

  medication?: ConditionDefinitionMedication[];

  precondition?: ConditionDefinitionPrecondition[];

  team?: Reference[];

  questionnaire?: ConditionDefinitionQuestionnaire[];

  plan?: ConditionDefinitionPlan[];
}
