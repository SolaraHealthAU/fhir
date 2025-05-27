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
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ConceptMapProperty } from "../conceptmapproperty/types";
import type { ConceptMapAdditionalAttribute } from "../conceptmapadditionalattribute/types";
import type { ConceptMapGroup } from "../conceptmapgroup/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMap {
  resourceType: `ConceptMap`;

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

  property?: ConceptMapProperty[];

  additionalAttribute?: ConceptMapAdditionalAttribute[];

  sourceScopeUri?: string;

  _sourceScopeUri?: Element;

  sourceScopeCanonical?: string;

  _sourceScopeCanonical?: Element;

  targetScopeUri?: string;

  _targetScopeUri?: Element;

  targetScopeCanonical?: string;

  _targetScopeCanonical?: Element;

  group?: ConceptMapGroup[];
}
