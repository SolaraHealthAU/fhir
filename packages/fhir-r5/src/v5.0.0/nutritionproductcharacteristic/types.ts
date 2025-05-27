import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A food or supplement that is consumed by patients. */
export interface NutritionProductCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valueQuantity?: Quantity;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;

  valueAttachment?: Attachment;

  valueBoolean?: boolean;

  _valueBoolean?: Element;
}
