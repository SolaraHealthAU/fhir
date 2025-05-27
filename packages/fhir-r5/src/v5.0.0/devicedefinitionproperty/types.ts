import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Range,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionProperty {
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
