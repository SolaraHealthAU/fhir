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
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { EvidenceReportSubject } from "../evidencereportsubject/types";
import type { EvidenceReportRelatesTo } from "../evidencereportrelatesto/types";
import type { EvidenceReportSection } from "../evidencereportsection/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts. */
export interface EvidenceReport {
  resourceType: `EvidenceReport`;

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

  relatedIdentifier?: Identifier[];

  citeAsReference?: Reference;

  citeAsMarkdown?: string;

  _citeAsMarkdown?: Element;

  type?: CodeableConcept;

  note?: Annotation[];

  subject: EvidenceReportSubject;

  relatesTo?: EvidenceReportRelatesTo[];

  section?: EvidenceReportSection[];
}
