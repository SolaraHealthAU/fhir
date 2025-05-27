import type {
  Extension,
  CodeableConcept,
  Identifier,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionVersion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  component?: Identifier;

  value?: string;

  _value?: Element;
}
