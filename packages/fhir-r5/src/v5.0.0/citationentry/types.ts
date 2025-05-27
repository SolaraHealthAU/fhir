import type {
  Extension,
  Reference,
  Element,
  CodeableConcept,
} from "../core/types";
import type { CitationContributionInstance } from "../citationcontributioninstance/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationEntry {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  contributor: Reference;

  forenameInitials?: string;

  _forenameInitials?: Element;

  affiliation?: Reference[];

  contributionType?: CodeableConcept[];

  role?: CodeableConcept;

  contributionInstance?: CitationContributionInstance[];

  correspondingContact?: boolean;

  _correspondingContact?: Element;

  rankingOrder?: number;

  _rankingOrder?: Element;
}
