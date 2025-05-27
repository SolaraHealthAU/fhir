import type { Extension, Period, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionMarketDistribution {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  marketPeriod: Period;

  subJurisdiction?: string;

  _subJurisdiction?: Element;
}
