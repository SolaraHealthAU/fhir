import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DetectedIssueEvidence } from "../detectedissueevidence/types";
import type { DetectedIssueMitigation } from "../detectedissuemitigation/types";

/** Generated from FHIR JSON Schema */

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc. */
export interface DetectedIssue {
  resourceType: `DetectedIssue`;

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

  category?: CodeableConcept[];

  code?: CodeableConcept;

  severity?: string;

  _severity?: Element;

  subject?: Reference;

  encounter?: Reference;

  identifiedDateTime?: string;

  _identifiedDateTime?: Element;

  identifiedPeriod?: Period;

  author?: Reference;

  implicated?: Reference[];

  evidence?: DetectedIssueEvidence[];

  detail?: string;

  _detail?: Element;

  reference?: string;

  _reference?: Element;

  mitigation?: DetectedIssueMitigation[];
}
