import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study. */
export interface ResearchSubjectProgress {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  subjectState?: CodeableConcept;

  milestone?: CodeableConcept;

  reason?: CodeableConcept;

  startDate?: string;

  _startDate?: Element;

  endDate?: string;

  _endDate?: Element;
}
