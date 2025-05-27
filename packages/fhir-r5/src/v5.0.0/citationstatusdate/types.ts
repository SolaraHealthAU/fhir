import type {
  Extension,
  CodeableConcept,
  Element,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationStatusDate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  activity: CodeableConcept;

  actual?: boolean;

  _actual?: Element;

  period: Period;
}
