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
import type { MeasureTerm } from "../measureterm/types";
import type { MeasureGroup } from "../measuregroup/types";
import type { MeasureSupplementalData } from "../measuresupplementaldata/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface Measure {
  resourceType: `Measure`;

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

  subjectCodeableConcept?: CodeableConcept;

  subjectReference?: Reference;

  basis?: string;

  _basis?: Element;

  usage?: string;

  _usage?: Element;

  library?: string[];

  disclaimer?: string;

  _disclaimer?: Element;

  scoring?: CodeableConcept;

  scoringUnit?: CodeableConcept;

  compositeScoring?: CodeableConcept;

  type?: CodeableConcept[];

  riskAdjustment?: string;

  _riskAdjustment?: Element;

  rateAggregation?: string;

  _rateAggregation?: Element;

  rationale?: string;

  _rationale?: Element;

  clinicalRecommendationStatement?: string;

  _clinicalRecommendationStatement?: Element;

  improvementNotation?: CodeableConcept;

  term?: MeasureTerm[];

  guidance?: string;

  _guidance?: Element;

  group?: MeasureGroup[];

  supplementalData?: MeasureSupplementalData[];
}
