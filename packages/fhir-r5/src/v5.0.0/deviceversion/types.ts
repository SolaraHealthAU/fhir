import type {
  Extension,
  CodeableConcept,
  Identifier,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface DeviceVersion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  component?: Identifier;

  installDate?: string;

  _installDate?: Element;

  value?: string;

  _value?: Element;
}
