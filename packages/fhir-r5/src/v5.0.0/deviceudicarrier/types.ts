import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface DeviceUdiCarrier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  deviceIdentifier?: string;

  _deviceIdentifier?: Element;

  issuer?: string;

  _issuer?: Element;

  jurisdiction?: string;

  _jurisdiction?: Element;

  carrierAIDC?: string;

  _carrierAIDC?: Element;

  carrierHRF?: string;

  _carrierHRF?: Element;

  entryType?: string;

  _entryType?: Element;
}
