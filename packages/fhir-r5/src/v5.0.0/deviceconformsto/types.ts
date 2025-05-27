import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface DeviceConformsTo {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category?: CodeableConcept;

  specification: CodeableConcept;

  version?: string;

  _version?: Element;
}
