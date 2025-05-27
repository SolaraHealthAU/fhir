import type {
  Extension,
  CodeableConcept,
  Element,
  Period,
  Quantity,
  Range,
  Ratio,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource reflects an instance of a biologically derived product. A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface BiologicallyDerivedProductProperty {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueCodeableConcept?: CodeableConcept;

  valuePeriod?: Period;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueString?: string;

  _valueString?: Element;

  valueAttachment?: Attachment;
}
