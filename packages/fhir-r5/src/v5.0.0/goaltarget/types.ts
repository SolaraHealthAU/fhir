import type {
  Extension,
  CodeableConcept,
  Quantity,
  Range,
  Element,
  Ratio,
  Duration,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface GoalTarget {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  measure?: CodeableConcept;

  detailQuantity?: Quantity;

  detailRange?: Range;

  detailCodeableConcept?: CodeableConcept;

  detailString?: string;

  _detailString?: Element;

  detailBoolean?: boolean;

  _detailBoolean?: Element;

  detailInteger?: number;

  _detailInteger?: Element;

  detailRatio?: Ratio;

  dueDate?: string;

  _dueDate?: Element;

  dueDuration?: Duration;
}
