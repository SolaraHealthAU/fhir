import type {
  Extension,
  CodeableConcept,
  Element,
  Age,
  Range,
  Period,
  Annotation,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FamilyMemberHistoryProcedure {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  outcome?: CodeableConcept;

  contributedToDeath?: boolean;

  _contributedToDeath?: Element;

  performedAge?: Age;

  performedRange?: Range;

  performedPeriod?: Period;

  performedString?: string;

  _performedString?: Element;

  performedDateTime?: string;

  _performedDateTime?: Element;

  note?: Annotation[];
}
