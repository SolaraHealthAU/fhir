import type {
  Extension,
  Quantity,
  CodeableConcept,
  Range,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface ObservationReferenceRange {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  low?: Quantity;

  high?: Quantity;

  normalValue?: CodeableConcept;

  type?: CodeableConcept;

  appliesTo?: CodeableConcept[];

  age?: Range;

  text?: string;

  _text?: Element;
}
