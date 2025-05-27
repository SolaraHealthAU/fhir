import type {
  Extension,
  Element,
  CodeableConcept,
  Attachment,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationRelatesTo {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  classifier?: CodeableConcept[];

  label?: string;

  _label?: Element;

  display?: string;

  _display?: Element;

  citation?: string;

  _citation?: Element;

  document?: Attachment;

  resource?: string;

  _resource?: Element;

  resourceReference?: Reference;
}
