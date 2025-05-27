import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Period,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ResearchSubjectProgress } from "../researchsubjectprogress/types";

/** Generated from FHIR JSON Schema */

/** A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study. */
export interface ResearchSubject {
  resourceType: `ResearchSubject`;

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

  progress?: ResearchSubjectProgress[];

  period?: Period;

  study: Reference;

  subject: Reference;

  assignedComparisonGroup?: string;

  _assignedComparisonGroup?: Element;

  actualComparisonGroup?: string;

  _actualComparisonGroup?: Element;

  consent?: Reference[];
}
