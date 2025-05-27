import type { Extension, CodeableConcept, Element } from "../core/types";
import type { CitationPublishedIn } from "../citationpublishedin/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationPublicationForm {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  publishedIn?: CitationPublishedIn;

  citedMedium?: CodeableConcept;

  volume?: string;

  _volume?: Element;

  issue?: string;

  _issue?: Element;

  articleDate?: string;

  _articleDate?: Element;

  publicationDateText?: string;

  _publicationDateText?: Element;

  publicationDateSeason?: string;

  _publicationDateSeason?: Element;

  lastRevisionDate?: string;

  _lastRevisionDate?: Element;

  language?: CodeableConcept[];

  accessionNumber?: string;

  _accessionNumber?: Element;

  pageString?: string;

  _pageString?: Element;

  firstPage?: string;

  _firstPage?: Element;

  lastPage?: string;

  _lastPage?: Element;

  pageCount?: string;

  _pageCount?: Element;

  copyright?: string;

  _copyright?: Element;
}
