import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionRegulatoryIdentifier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  deviceIdentifier?: string;

  _deviceIdentifier?: Element;

  issuer?: string;

  _issuer?: Element;

  jurisdiction?: string;

  _jurisdiction?: Element;
}
