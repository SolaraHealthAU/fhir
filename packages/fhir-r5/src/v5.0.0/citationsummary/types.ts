import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationSummary {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  style?: CodeableConcept;

  text?: string;

  _text?: Element;
}
