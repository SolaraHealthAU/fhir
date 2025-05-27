import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Range,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface DeviceProperty {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueQuantity?: Quantity;

  valueCodeableConcept?: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueRange?: Range;

  valueAttachment?: Attachment;
}
