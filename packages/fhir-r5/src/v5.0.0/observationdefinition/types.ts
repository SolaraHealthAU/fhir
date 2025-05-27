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
import type { ObservationDefinitionQualifiedValue } from "../observationdefinitionqualifiedvalue/types";
import type { ObservationDefinitionComponent } from "../observationdefinitioncomponent/types";

/** Generated from FHIR JSON Schema */

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinition {
  resourceType: `ObservationDefinition`;

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

  identifier?: Identifier;

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

  derivedFromCanonical?: string[];

  derivedFromUri?: string[];

  _derivedFromUri?: Element[];

  subject?: CodeableConcept[];

  performerType?: CodeableConcept;

  category?: CodeableConcept[];

  code: CodeableConcept;

  permittedDataType?: string[];

  _permittedDataType?: Element[];

  multipleResultsAllowed?: boolean;

  _multipleResultsAllowed?: Element;

  bodySite?: CodeableConcept;

  method?: CodeableConcept;

  specimen?: Reference[];

  device?: Reference[];

  preferredReportName?: string;

  _preferredReportName?: Element;

  permittedUnit?: Coding[];

  qualifiedValue?: ObservationDefinitionQualifiedValue[];

  hasMember?: Reference[];

  component?: ObservationDefinitionComponent[];
}
