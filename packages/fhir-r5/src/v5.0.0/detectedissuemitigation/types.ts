import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
  Annotation,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc. */
export interface DetectedIssueMitigation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  action: CodeableConcept;

  date?: string;

  _date?: Element;

  author?: Reference;

  note?: Annotation[];
}
