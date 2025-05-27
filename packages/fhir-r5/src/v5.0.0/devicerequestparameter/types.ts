import type {
  Extension,
  CodeableConcept,
  Quantity,
  Range,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface DeviceRequestParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueBoolean?: boolean;

  _valueBoolean?: Element;
}
