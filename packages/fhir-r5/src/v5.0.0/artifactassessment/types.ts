import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ArtifactAssessmentContent } from "../artifactassessmentcontent/types";

/** Generated from FHIR JSON Schema */

/** This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content. */
export interface ArtifactAssessment {
  resourceType: `ArtifactAssessment`;

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

  title?: string;

  _title?: Element;

  citeAsReference?: Reference;

  citeAsMarkdown?: string;

  _citeAsMarkdown?: Element;

  date?: string;

  _date?: Element;

  copyright?: string;

  _copyright?: Element;

  approvalDate?: string;

  _approvalDate?: Element;

  lastReviewDate?: string;

  _lastReviewDate?: Element;

  artifactReference?: Reference;

  artifactCanonical?: string;

  _artifactCanonical?: Element;

  artifactUri?: string;

  _artifactUri?: Element;

  content?: ArtifactAssessmentContent[];

  workflowStatus?: string;

  _workflowStatus?: Element;

  disposition?: string;

  _disposition?: Element;
}
