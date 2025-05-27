import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface DeviceName {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  value?: string;

  _value?: Element;

  type?: string;

  _type?: Element;

  display?: boolean;

  _display?: Element;
}
