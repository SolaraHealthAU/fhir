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
export interface FamilyMemberHistoryCondition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  outcome?: CodeableConcept;

  contributedToDeath?: boolean;

  _contributedToDeath?: Element;

  onsetAge?: Age;

  onsetRange?: Range;

  onsetPeriod?: Period;

  onsetString?: string;

  _onsetString?: Element;

  note?: Annotation[];
}
