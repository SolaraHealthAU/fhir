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
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level. */
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
