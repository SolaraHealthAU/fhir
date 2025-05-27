import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Range,
  Ratio,
  Annotation,
  Address,
  Duration,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItemCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  characteristicType: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueUrl?: string;

  _valueUrl?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueAnnotation?: Annotation;

  valueAddress?: Address;

  valueDuration?: Duration;

  valueCodeableConcept?: CodeableConcept;
}
