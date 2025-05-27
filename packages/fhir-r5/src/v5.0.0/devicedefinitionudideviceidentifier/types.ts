import type { Extension, Element } from "../core/types";
import type { DeviceDefinitionMarketDistribution } from "../devicedefinitionmarketdistribution/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionUdiDeviceIdentifier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  deviceIdentifier?: string;

  _deviceIdentifier?: Element;

  issuer?: string;

  _issuer?: Element;

  jurisdiction?: string;

  _jurisdiction?: Element;

  marketDistribution?: DeviceDefinitionMarketDistribution[];
}
