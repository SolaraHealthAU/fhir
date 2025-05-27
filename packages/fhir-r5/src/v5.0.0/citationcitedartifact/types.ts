import type {
  Extension,
  Identifier,
  Element,
  CodeableConcept,
  Annotation,
} from "../core/types";
import type { CitationVersion } from "../citationversion/types";
import type { CitationStatusDate1 } from "../citationstatusdate1/types";
import type { CitationTitle } from "../citationtitle/types";
import type { CitationAbstract } from "../citationabstract/types";
import type { CitationPart } from "../citationpart/types";
import type { CitationRelatesTo } from "../citationrelatesto/types";
import type { CitationPublicationForm } from "../citationpublicationform/types";
import type { CitationWebLocation } from "../citationweblocation/types";
import type { CitationClassification1 } from "../citationclassification1/types";
import type { CitationContributorship } from "../citationcontributorship/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationCitedArtifact {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  relatedIdentifier?: Identifier[];

  dateAccessed?: string;

  _dateAccessed?: Element;

  version?: CitationVersion;

  currentState?: CodeableConcept[];

  statusDate?: CitationStatusDate1[];

  title?: CitationTitle[];

  abstract?: CitationAbstract[];

  part?: CitationPart;

  relatesTo?: CitationRelatesTo[];

  publicationForm?: CitationPublicationForm[];

  webLocation?: CitationWebLocation[];

  classification?: CitationClassification1[];

  contributorship?: CitationContributorship;

  note?: Annotation[];
}
