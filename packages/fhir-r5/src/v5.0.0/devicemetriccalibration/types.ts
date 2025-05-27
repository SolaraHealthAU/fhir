import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a measurement, calculation or setting capability of a device. */
export interface DeviceMetricCalibration {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  state?: string;

  _state?: Element;

  time?: string;

  _time?: Element;
}
