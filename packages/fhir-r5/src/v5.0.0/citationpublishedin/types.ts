import type {
  Extension,
  CodeableConcept,
  Identifier,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationPublishedIn {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  identifier?: Identifier[];

  title?: string;

  _title?: Element;

  publisher?: Reference;

  publisherLocation?: string;

  _publisherLocation?: Element;
}
