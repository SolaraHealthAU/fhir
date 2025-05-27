import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Range,
  Reference,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface GroupCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueReference?: Reference;

  exclude?: boolean;

  _exclude?: Element;

  period?: Period;
}
